var sec =0;
var min=0;
setInterval(() => {
    sec++;
    if(sec<10){
      document.getElementById("counter").innerHTML=min+':0'+sec;
      } else {
        document.getElementById("counter").innerHTML=min+':'+sec;
        if(sec==10){
            min=min+sec/10;
           // console.log(min);
            sec = sec%10;
            //console.log(sec);
            document.getElementById("counter").innerHTML=min+":"+sec;
        }
    }

}, 500);
