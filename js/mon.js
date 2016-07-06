function Mon(){
	this.x ;
	this.y ;
	this.angle;
	this.bigEye  = new Image();
	this.bigSwim = new Image();
	this.bigTail = new Image();
}
Mon.prototype.init = function()
{
	this.x = ctxWidth  * 0.5;
	this.y = ctxHeight * 0.5;
	this.angle = Math.PI;
	this.bigEye.src = "./source/bigEye0.png";
	this.bigSwim.src = "./source/bigSwim0.png";
	this.bigTail.src = "./source/bigTail0.png"
	this.draw(ctx1);
}
Mon.prototype.born = function(ctx)
{


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
	ctx.save();

	ctx.translate(this.x , this.y);
	ctx.rotate(this.angle);
	ctx.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
	ctx.drawImage(this.bigSwim,-this.bigSwim.width*0.5,-this.bigSwim.height*0.5);
	ctx.rotate(Math.random()*0.1);
	ctx.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);
	// console.log("mon draing");
	ctx.restore();
}
