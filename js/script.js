


let date = new Date('Jun 12 2022 00:00:00');
function counts() {
   let now = new Date();
   gap = date - now;


   let hour = Math.floor(gap / 1000 / 60 / 60);
   let minute = Math.floor(gap / 1000 / 60) % 60;
   let second = Math.floor(gap / 1000) % 60;
   let millisecond = Math.floor(gap) % 100;


   document.getElementById('item-day').innerText = hour;
   document.getElementById('item-hour').innerText = minute;
   document.getElementById('item-minute').innerText = second;
   document.getElementById('item-second').innerText = millisecond;

}

counts();
setInterval(counts, 80);




