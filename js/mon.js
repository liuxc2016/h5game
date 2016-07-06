function Mon(){
	this.x ;
	this.y ;
	this.angle;
		// 尾巴变化
	this.monTailTimer,	this.monTailCount;
	// 眼睛变化
	this.monEyeTimer ,	this.monEyeInterval , this.monEyeCount;
	this.bigSwim = new Image();

}
Mon.prototype.init = function()
{
	this.x = ctxWidth  * 0.5;
	this.y = ctxHeight * 0.5;
	this.angle = Math.PI;

	this.bigSwim.src    = "./source/bigSwim0.png";

	this.monTailTimer   = 0   ;
	this.monTailCount   = 0   ;

	this.monEyeTimer    = 0   ;
	this.monEyeInterval = 160 ;
	this.monEyeCount    = 0   ; 

	// this.draw(ctx1);
}

Mon.prototype.draw = function(ctx)
{
	var beta = Math.atan2(this.y-my, this.x-mx);  //获取到与鼠标的角度
	// console.log(ang);
	this.x = lerpDistance(mx, this.x, 0.96);
	this.y = lerpDistance(my, this.y, 0.96);
	ang = beta;
	this.angle = lerpAngle(beta, this.angle, 0.9);
	// console.log(this.angle);

	this.monTailTimer += deltaTime;
	if(this.monTailTimer > 60){
		this.monTailCount = (this.monTailCount + 1)% 8;
		this.monTail = this.monTailTimer % 60;
	}

	this.monEyeTimer += deltaTime;
	if(this.monEyeTimer > this.monEyeInterval){

		this.monEyeTimer %= this.monEyeInterval;
		this.monEyeCount = (this.monEyeCount + 1) % 2;
	}
	if(this.monEyeCount == 0)
	{
		this.monEyeInterval = Math.random()*2000+1000;
	}else{
		this.monEyeInterval = 160;
	}

	var i = this.monTailCount , k = this.monEyeCount;

	// console.log(k);
	ctx.save();

	ctx.translate(this.x , this.y);
	ctx.rotate(this.angle);
	ctx.drawImage(monTail[i],-monTail[i].width*0.5+30,-monTail[i].height*0.5);
	ctx.drawImage(this.bigSwim,-this.bigSwim.width*0.5,-this.bigSwim.height*0.5);
	ctx.drawImage(monEye[k],-monEye[k].width*0.5,-monEye[k].height*0.5);
	ctx.restore();
}
