function Score()
{
	this.point;
	this.seedEated; //吃到了多少果实
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
		this.powers = 3;
	}else{
		this.powers = 1;
	}
	this.point += this.powers; 
	 console.log("现在得分是" + this.point);
}