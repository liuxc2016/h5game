function Score()
{
	this.point;
	this.seedEated; //总共吃到了多少果实
	this.seedTake;  //身上携带了多少果实
	this.powers ;   //当前强化状态，如果吃到蓝色果实，分值是吃到黄色的3倍；
	this.step ;      //记录当前吃的是黄的还是蓝的，如果是蓝色为3，黄色为1，为强化态做准备 
	this.gameOver, this.alpha ;
	this.shadowBlue, this.shadowColor;
}
Score.prototype.init = function(){
	 this.point = 0 ; 
	 this.seedEated = 0;
	 this.powers = 1;
	 this.step = 1;
	 this.seedTake = 0;
	 this.gameOver = false , this.alpha = 0 ;
	 this.shadowBlue = 10 , this.shadowColor = "white";
}
// 吃到果实了
Score.prototype.eatAdd = function(i){
	this.seedEated++;
	this.seedTake ++;
	if((/blue/i).test(seed.mi[i].src)){
		this.step = 3;
	}else{
		this.step = 1;
	}
	this.powers += this.step;
	this.point += this.powers; 
	 // console.log("现在得分是" + this.point);
}
Score.prototype.breedBaby = function()
{
	this.seedTake = 0;
	this.powers = 1;
	if(baby.babyBodyCount > 0 ){
		baby.babyBodyCount = 0;
		// baby.babyBodyCount -= 1;
	}
}
Score.prototype.draw = function(){
	ctx2.fillStyle = "#fff";

	ctx2.fillText("Fruit eated :"+this.seedEated, ctxWidth*0.5 , ctxHeight-50);
	ctx2.fillText("Powers："+this.powers, ctxWidth*0.5 , ctxHeight-80);
	ctx2.fillText("Score:"+this.point, ctxWidth*0.5 , ctxHeight-110);
	ctx2.save();
	ctx2.shadowBlur = 10;
	ctx2.shadowColor = "white";
	if(this.gameOver)
	{
		// console.log("game over");
		this.alpha += deltaTime*0.0005;
		if(this.alpha >1)
			this.alpha = 1;
		ctx2.fillStyle = "rgba(255,255,255,"+ this.alpha +")";
		ctx2.fillText("Game Over", ctxWidth*0.5 , ctxHeight*0.5);
	}
	ctx2.restore()
}