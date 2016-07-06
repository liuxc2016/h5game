//游戏起始入口
window.onload = gameStart;

var lastTime = new Date();
var deltaTime ;
var mx,my;	//保存鼠标位置
var canvas1 , canvas2 ; //canvas1背景及背景渲染，canvas2游戏及碰撞渲染层
var ctx1,ctx2;
var ctxWidth  = 800 ,
	ctxHeight = 600 ;

var backimage ,ane;
var seed;

var mon ;

//游戏流程
function gameStart(){
	init();
	play();
}

//游戏主控制
function play()
{
	requestAnimFrame( play );
    draw();
}

function init() {

	 document.getElementById( 'canvas2' ).addEventListener("mousemove", function (evt) { 
	  var mousePos = getMousePos(canvas2, evt);
	  mx = mousePos.x;
	  my = mousePos.y; 
	  // console.log("X:"+mousePos.x +',Y:' + mousePos.y); 
	 }, false); 

    canvas1 = document.getElementById( 'canvas1' );
    canvas2 = document.getElementById( 'canvas2' );
    mx = ctxWidth  * 0.5;
    my = ctxHeight * 0.5;
    ctx1 = canvas1.getContext( '2d' );
    ctx2 = canvas2.getContext( '2d' );
    backimage = new Image();
    backimage.src = "./source/background.jpg";

	ane = new Ane();
	ane.init();

	seed = new Seed(ane);
	seed.init();

	mon = new Mon();
	mon.init();

	baby = new Baby();
	baby.init();
}
function draw()
{
	var now = new Date();
	deltaTime = now - lastTime;
	if(deltaTime>40)
		deltaTime = 30;
	lastTime = now;
	// console.log(deltaTime);
	ctx1.drawImage(backimage,0,0);

	ane.draw(ctx1);
	seed.draw(ctx1);

	ctx2.clearRect(0, 0, ctxWidth, ctxHeight);
	mon.draw(ctx2);

	baby.draw(ctx2);

	checkEat();

}
