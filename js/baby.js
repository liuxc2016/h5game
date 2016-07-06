function Baby(){
	this.x ;
	this.y ;
	this.angle;
	this.babyEye  = new Image();
	this.babyFade = new Image();
	this.babyTail = new Image();
}
Baby.prototype.init = function()
{
	this.x = ctxWidth  * 0.5;
	this.y = ctxHeight * 0.5;
	this.angle = Math.PI;
	this.babyEye.src = "./source/babyEye0.png";
	this.babyFade.src = "./source/babyFade0.png";
	this.babyTail.src = "./source/babyTail0.png"
	
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
	ctx.rotate(Math.random()*0.1);
	ctx.clearRect(0,0,-this.babyTail.width*0.5+24,-this.babyTail.height*0.5);
	ctx.drawImage(this.babyTail,-this.babyTail.width*0.5+24,-this.babyTail.height*0.5);	
	ctx.drawImage(this.babyFade,-this.babyFade.width*0.5,-this.babyFade.height*0.5);
	ctx.drawImage(this.babyEye,-this.babyEye.width*0.5,-this.babyEye.height*0.5);
	// console.log("Baby draing");
	ctx.restore();
}
