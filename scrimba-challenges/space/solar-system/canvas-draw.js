// requestAnimationFrame Shim
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();
   
  
  var canvas = document.getElementById('myCanvas');
   var context = canvas.getContext('2d');
   var x = canvas.width / 2;
   var y = canvas.height / 2;
   var radius = 75;
   var endPercent = 105;
   var curPerc = 0;
   var counterClockwise = false;
   var circ = Math.PI * 2;
   var quart = Math.PI / 2;
  
   context.lineWidth = 10;
   context.strokeStyle = '#ad2323';
   context.shadowOffsetX = 0;
   context.shadowOffsetY = 0;
   context.shadowBlur = 10;
   context.shadowColor = '#656565';
  
  
   function animate(current) {
    console.log("current:", current)
       context.clearRect(0, 0, canvas.width, canvas.height);
       context.beginPath();
       context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
       context.stroke();
       curPerc++;
       if (curPerc < endPercent) {
           requestAnimationFrame(function () {
               animate(curPerc / 100)
           });
       }
   }
  
   animate();