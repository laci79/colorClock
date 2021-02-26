function colorClock() {
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    if(hours < 10) {
        hours = '0' + hours;
    }
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds <10) {
        seconds = '0' + seconds;
    }
    
    let clockFace = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerHTML = clockFace;
    

    setTimeout(function() {
        colorClock();
    }, 1000);

    let hexColor = '#' + hours + minutes + seconds;
    document.body.style.background = hexColor;
}

colorClock();
