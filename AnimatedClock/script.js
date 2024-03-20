function clock(){
  const now = new Date();

  const canvas =  document.getElementById('canvas');
   const ctx = canvas.getContext('2d');

  // Canvas Setup for Clock
   ctx.save(); // save the state
   ctx.clearRect(0,0,500,500);  
   ctx.translate(250,250); // get the clock in center
   ctx.rotate(-Math.PI / 2)// roteate clock -90deg
 
  // setDefault styles 
  ctx.strokeStyle = '#000000';
  ctx.fillStyle  = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Draw Clock face

  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = '#800000';
   ctx.arc(0,0,142,0,Math.PI * 2 ,true);
   ctx.stroke();
   ctx.fill();
   ctx.restore();
   
   // Draw Hour marks
   ctx.save();
   for(let i = 0; i < 12; i++){
    ctx.beginPath();
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
   
   }
   ctx.restore();

   // Draw minutes Marks
   ctx.save();

   ctx.lineWidth = 4;
   for(let i = 0; i < 60; i++){
     if(i % 5 !== 0){
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
   
    
    ctx.rotate(Math.PI/30);
   
   }
   ctx.restore();


   // Get the time now

   const hr = now.getHours() % 12;
   const min = now.getMinutes();
   const sec = now.getSeconds();

  //  console.log(hr + " " + min + " "  + sec);

    // Draw hour Hand

    ctx.save();
    ctx.rotate((Math.PI/6) * hr + (Math.PI/360) * min + (Math.PI/ 21600) * sec);
    ctx.strokeStyle = '#800000';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20,0);
    ctx.lineTo(80,0);
    ctx.stroke();
    ctx.restore();
     
   // Draw min Hand 
   ctx.save();
   ctx.rotate((Math.PI/30) * min + (Math.PI/1800) * sec);
   ctx.strokeStyle = '#800000';
   ctx.lineWidth = 8;
   ctx.beginPath();
   ctx.moveTo(-15,0);
   ctx.lineTo(80,0);
   ctx.stroke();
   ctx.restore();
  
   // Draw second Hand
   ctx.save();
   ctx.rotate((sec * Math.PI/30));
   ctx.strokeStyle = '#FF7F50';
   ctx.fillStyle = '#FF7F50'
   ctx.lineWidth = 4;
   ctx.beginPath();
   ctx.moveTo(-25,0);
   ctx.lineTo(100,0);
   ctx.stroke();
   ctx.beginPath();
   ctx.arc(0,0,10,0,Math.PI * 2 ,true);
   ctx.fill();
   ctx.restore();
  

   ctx.restore();// restore
   
   requestAnimationFrame(clock);
  }


requestAnimationFrame(clock);

// To Save the Image 

document.getElementById('save-btn').addEventListener('click',()=>{
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'Clock.png';
  link.href = dataURL;
  link.click();
})