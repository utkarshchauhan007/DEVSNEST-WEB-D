setInterval(() => {
    d = new Date() ;
    htime = d.getHours() ;
    mtime = d.getMinutes() ;
    stime = d.getSeconds() ;
    hrotation = 30*htime+mtime/2-180 ;
    mrotation = 6*mtime-180;
    srotation = 6*stime-180 ;

    hour.style.transform = `rotate(${hrotation}deg)` ;
    minute.style.transform = `rotate(${mrotation}deg)` ;
    second.style.transform = `rotate(${srotation}deg)` ;

}, 1000);