// 判断大鱼吃果实
function checkEat()
{
	for(var i = 0; i< seed.maxNum; i++)
	{
		// console.log(i);
		if(seed.ma[i]==true)
		{
			var a = testPosition(seed.mx[i],seed.my[i],seed.l[i],seed.l[i],
						mon.x, mon.y, 30, 30 );
			if(a == true)
			{
				// console.log("ate fruit \+ " + i);
				seed.seedIsEated(i);
			}
		}
	}
}
function checkBreed() {
	if(distance2(mon.x,mon.y,baby.x,baby.y) < 400 )
	{
		if(baby.babyBodyCount > 0 )
			baby.babyBodyCount -= 1;
		console.log("喂小鱼了？");;
	}
}
function testPosition(x1,y1,w1,h1,x2,y2,w2,h2)
{
	var d = distance(x1,y1,x2,y2) ;
	var x = xie(w1,h1) + xie(w2,h2);
	if( d < x )
		return true;
}
function distance(x1,y1,x2,y2)
{
	return Math.sqrt((y1-y2)*(y1-y2)+(x1-x2)*(x1-x2));
}
function xie(w,h)
{
	return Math.sqrt(w*w/4 + h*h/4);
}
// 为了减少算法，直接不再开根号求线长，检测时使用测试出来的平方值
function distance2(x1,y1,x2,y2)
{
	return ((y1-y2)*(y1-y2)+(x1-x2)*(x1-x2));
}