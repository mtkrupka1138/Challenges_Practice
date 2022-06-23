



   
  
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


const sun = document.getElementById("sun")
sun.setAttribute("width", "64")
sun.setAttribute("height", "64")

function init() {
    window.requestAnimationFrame(draw)
}

function draw(percent) {
       let x = 150;
   let y = 150;
   let radius = 40;
   const endPercent = 101;
   let curPerc = 0;
   let startAngle = 0;
   let endAngle = Math.PI * 2;

    const ctx = document.getElementById('canvas').getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300); // clear canvas
//     ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
//   ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
   ctx.translate(150, 150);
     const time = new Date();
     ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.drawImage(sun, -15, -15, 10, 10);
    ctx.save();
    ctx.restore()
    ctx.restore();

    ctx.beginPath();
    ctx.arc(x, y, 105, startAngle, endAngle, false);
       ctx.stroke();
    //    curPerc++;
    //    if (curPerc < endPercent) {
    //        requestAnimationFrame(function () {
    //            draw(curPerc / 100)
    //        });
    //    }
    window.requestAnimationFrame(draw)
}

init();