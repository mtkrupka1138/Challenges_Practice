


   
  
for (let i=1; i<10; i++) {

    // requestAnimationFrame Shim
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    })();

   let canvas = document.getElementById(`${i}`);
   let context = canvas.getContext('2d');
   let x = canvas.width / 2;
   let y = canvas.height / 2;
   let radius = i * 40;
   const endPercent = 101;
   let curPerc = 0;
   let counterClockwise = false;
   let startAngle = 0;
   let endAngle = Math.PI * 2;
   if (i % 2 === 0) {
    counterClockwise = true;
    endAngle = -Math.PI * 2;

   }
   
//    let circ = Math.PI * 2;
//    let quart = Math.PI / 2;
  
  
   context.lineWidth = 5;
   context.strokeStyle = '#ad2323';
   context.shadowOffsetX = 0;
   context.shadowOffsetY = 0;
   context.shadowBlur = 10;
   context.shadowColor = '#656565';
  
  
   function animate(percent) {
       context.clearRect(0, 0, canvas.width, canvas.height);
       context.beginPath();
       context.arc(x, y, radius, startAngle, endAngle * percent, counterClockwise);
       context.stroke();
       curPerc++;
       if (curPerc < endPercent) {
           requestAnimationFrame(function () {
               animate(curPerc / 100)
           });
       }
   }
   

  
   animate();

}