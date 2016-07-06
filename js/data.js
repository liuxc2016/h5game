function Score()
{
	this.point;
	this.seedEated; //总共吃到了多少果实
	this.seedTake;  //身上携带了多少果实
	this.powers ;   //当前强化状态，如果吃到蓝色果实，分值是吃到黄色的3倍；
}
Score.prototype.init = function(){
	 this.point = 0 ; 
	 this.seedEated = 0;
	 this.powers = 1;
}
// 吃到果实了
Score.prototype.eatAdd = function(i){
	this.seedEated++;

	if((/blue/i).test(seed.mi[i].src)){
		//吃到蓝色果实
		this.powers += 3;
	}else{
		this.powers += 1;
	}
	this.point += this.powers; 
	 console.log("现在得分是" + this.point);
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
	ctx2.fillText("一共吃了"+this.seedEated+"个果实", ctxWidth*0.5 , ctxHeight-50);
	ctx2.fillText("当前能量态："+this.powers, ctxWidth*0.5 , ctxHeight-80);
	ctx2.fillText("当前总分："+this.point, ctxWidth*0.5 , ctxHeight-100);
}