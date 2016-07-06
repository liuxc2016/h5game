// shim layer with setTimeout fallback
var requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.msRequestAnimationFrame 	 ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

//Get Mouse Position 
 function getMousePos(canvas, evt) { 
   var rect = canvas.getBoundingClientRect();    
   // console.log(evt);
   return { 
     x: evt.clientX - rect.left * (canvas.width / rect.width),
     y: evt.clientY - rect.top * (canvas.height / rect.height)
   }
 }

function lerpDistance(aim, cur, ratio)
{
	var delta = cur - aim;
	return aim + delta * ratio;
}

//a: aim angle, 
//b: current angel;
//t = ratio;
function lerpAngle(a , b ,t)
{
	var d =  b - a;
	if(d > Math.PI)
		d = d - 2*Math.PI;
	if(d < -Math.PI)
		d = d+ 2*Math.PI;
	return a + d * t;
}
