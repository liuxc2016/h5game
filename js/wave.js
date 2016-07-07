function Wave()
{
	this.x = [], this.y = [] , this.r = []; 
	this.alive = [] , this.alpha = [];
}
Wave.prototype.num = 10;
Wave.prototype.init = function(){
	for(var i = 0; i<this.num; i++)
	{
		this.x[i] = 0;
		this.y[i] = 0;
		this.r[i] = 10;
		this.alive[i] = false;
		this.alpha[i] = 0;
	}
}
// 吃到果实了
Wave.prototype.born = function(x, y){
	for(var i=0; i<this.num; i++)
	{
		if(!this.alive[i]){
			// console.log("born"+ i);
			this.alive[i] = true;
			this.x[i] = x;
			this.y[i] = y;
			this.alpha[i] = 0;
			this.r[i] = 10;
			return;
		}

	}
}
Wave.prototype.draw = function(){
	
	ctx2.fillStyle = "#fff";

	ctx2.save();
	ctx2.shadowBlur = 10;
	ctx2.lineWidth = 2;
	ctx2.shadowColor = "white";
	// ctx2.strokeStyle = "white";
	for(var i = 0; i<this.num; i++)
	{
		if(this.alive[i])
		{
			this.r[i] += deltaTime*0.02;
			if(this.r[i] > 30 ){
				this.alive[i] = false;
				continue;
			}
			this.alpha[i] = 1 - this.r[i] / 30 ; 
			// console.log("x:"+this.x[i]+"y:"+this.y[i]+"r:"+this.r[i]);
			ctx2.beginPath()
			ctx2.strokeStyle = "rgba(255,255,255," + this.alpha[i] +")"; 
			ctx2.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
			ctx2.stroke();
			ctx2.closePath();
			
		}
	}
	// this.alpha += deltaTime*0.0005;
	// if(this.alpha >1)
	// 	this.alpha = 1;
	// ctx2.fillStyle = "rgba(255,255,255,"+ this.alpha +")";
	// ctx2.fillText("Game Over", ctxWidth*0.5 , ctxHeight*0.5);

	ctx2.restore()
}