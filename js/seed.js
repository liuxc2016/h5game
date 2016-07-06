function Seed(ane){
	this.num = 15;
	this.maxNum = ane.num;
	this.mx = [];  
	this.my = [];
	this.l = []; //pic 's  large scale.
	this.ms = []; //speed
	this.md = []; //Seed is not alive in this array with its index;
	this.ma = []; //seed's alive status width value true or false;
	//this.mi[] = new Image();
	//this.mi[].src = "./source/fruit.png" //image; fruit.png && blue.png
	this.mi = [];

	this.ane = ane;
}
Seed.prototype.init = function()
{
	// console.log("num is "+ this.num);
	for(var i =0;i<this.maxNum;i++)
	{
		var k = Math.floor(Math.random()*this.maxNum); //返回一个0-maxNum)定位到海葵k上
		this.mx[i] = 0;
		this.my[i] = 0;
		this.l[i] = 0;
		this.ms[i] = 0.5+ Math.random()*1.3;
		this.mi[i] = new Image();
		this.mi[i].src = (Math.random()>0.25)?"./source/fruit.png":"./source/blue.png";
	}
	this.draw(ctx1);
}
Seed.prototype.born = function(ctx)
{

	var k = Math.floor(Math.random()*this.maxNum); //返回一个0-maxNum)定位到海葵k上
	var i = this.md.shift();
	this.l[i] = 0;
	this.mx[i] = this.ane.mx[k];
	this.my[i] = this.ane.my[k];
	this.ms[i] = 0.5+ Math.random()*0.9;
	this.mi[i].src = (Math.random()>0.3)?"./source/fruit.png":"./source/blue.png";
	ctx.drawImage(this.mi[i],this.mx[i],this.my[i], this.l[i], this.l[i]);
}
Seed.prototype.draw = function(ctx)
{
	this.MonitorSeed(ctx);
	for(i=0;i<this.maxNum;i++)
	{
		this.my[i] -= this.ms[i];
		if(this.l[i] < 14)
			this.l[i]  += 0.0035 * deltaTime;
		ctx.drawImage(this.mi[i],this.mx[i],this.my[i],
						this.l[i], this.l[i]);
	}
}
Seed.prototype.MonitorSeed = function(ctx)
{
	var count = 0;
	this.md = [];
	for(i=0;i<this.maxNum;i++)
	{
		if(this.seedIsAlive(i)){
			count++
		}else{
			this.md.push(i);
		}
	}
	// console.log("count is "+count);
	if(count<15)
		this.born(ctx);
}

Seed.prototype.seedIsAlive = function(i)
{
	if(this.my[i] < 0){
		this.ma[i] = false;
		return false;
	}else{
		this.ma[i] = true;
		return true;
	}
}

Seed.prototype.seedIsEated = function(i)
{
	seed.mi[i].src="";
	seed.ma[i] = false;
	seed.my[i] = -888;
	console.log("第"+i+"个小种子被吃掉了哦");
	seed.md.push(i);
}


