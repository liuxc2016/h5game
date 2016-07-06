function Ane(){
	this.num = 26;
	this.aneWidth = 20;
	this.mx = [];
	this.my = [];
}
Ane.prototype.init = function()
{
	// console.log("num is "+ this.num);
	for(var i =0;i<this.num;i++)
	{
		this.mx[i] = 12 + i*(20+Math.floor(this.aneWidth/2)) + Math.floor(Math.random()*20);
		this.my[i] = 330 + Math.floor(Math.random()*120);
	}
}
Ane.prototype.draw = function(ctx)
{
	ctx.save();
	ctx.globalAlpha = 0.3;
	ctx.strokeStyle =  "#FFAAD7";
	ctx.lineWidth = this.aneWidth;
	ctx.lineCap="round";
	for(var i =0;i<this.num;i++)
	{
		ctx.beginPath();
		// console.log(this.mx[i]+"**"+this.my[i]);
		ctx.moveTo(this.mx[i],ctxHeight);
		ctx.lineTo(this.mx[i],this.my[i]);
		ctx.stroke();
		ctx.closePath()	
	}
	ctx.restore();
}