function Baby(){
	this.x ;
	this.y ;
	this.angle;
	this.babyEye  = new Image();
	this.babyFade = new Image();
	// 尾巴变化
	this.babyTimer,	this.babyTimeCount;
	// 眼睛变化
	this.babyEyeTimer ,	this.babyEyeInterval , this.babyEyeCount;
	// 身体变化
	this.babyBodyTimer , this.babyBodyInterval,	this.babyBodyCount ;
}
Baby.prototype.init = function()
{
	this.x = ctxWidth  * 0.5;
	this.y = ctxHeight * 0.5;
	this.angle = Math.PI;
	this.babyEye.src = "./source/babyEye0.png";
	this.babyFade.src = "./source/babyFade0.png";
	
	this.babyTimer     = 0;
	this.babyTimeCount = 0;

	this.babyEyeTimer = 0;
	this.babyEyeInterval = 100;
	this.babyEyeCount    = 0; 

	this.babyBodyTimer = 0;
	this.babyBodyInterval = 400;
	this.babyBodyCount = 0;
}

Baby.prototype.draw = function(ctx)
{
	var beta = Math.atan2(this.y-mon.y, this.x-mon.x);  //获取到与鼠标的角度
	// console.log(ang);
	this.x = lerpDistance(mon.x, this.x, 0.99);
	this.y = lerpDistance(mon.y, this.y, 0.99);
	ang = beta;
	this.angle = lerpAngle(beta, this.angle, 0.9);
	// console.log(this.angle);

	ctx.save();
	ctx.translate(this.x , this.y);
	ctx.rotate(this.angle);
	// ctx.rotate(Math.random()*0.1);
	
	this.babyTimer += deltaTime;
	
	if(this.babyTimer > 60){
		this.babyTimeCount = (this.babyTimeCount + 1)% 8;
		this.babyTimer = this.babyTimer % 60;
	}
	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer > this.babyEyeInterval){

		this.babyEyeTimer %= this.babyEyeInterval;
		this.babyEyeCount = (this.babyEyeCount + 1) % 2;
	}
	if(this.babyEyeCount == 0)
	{
		this.babyEyeInterval = Math.random()*1000+2000;
	}else{
		this.babyEyeInterval = 100;
	}

	this.babyBodyTimer += deltaTime;
	if(this.babyBodyTimer > this.babyBodyInterval)
	{
		this.babyBodyTimer %= this.babyBodyInterval;
		this.babyBodyCount = this.babyBodyCount + 1;
		if(this.babyBodyCount > 19 )
		{
			this.babyBodyCount = 19;
			console.log("小鱼要死了");
		}
	}

	var i = this.babyTimeCount , j=this.babyBodyCount , k = this.babyEyeCount;
	// ctx.clearRect(0,0,-babyTail[i].width*0.5+24,-babyTail[i].height*0.5);
	ctx.drawImage(babyTail[i],-babyTail[i].width*0.5+24,-babyTail[i].height*0.5);	
	ctx.drawImage(babyBody[j],-babyBody[j].width*0.5,-babyBody[j].height*0.5);
	ctx.drawImage(babyEye[k],-babyEye[k].width*0.5,-babyEye[k].height*0.5);
	// console.log("Baby draing");
	ctx.restore();
}
