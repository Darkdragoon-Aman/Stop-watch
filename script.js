var hr = 00;
var min = 00;
var sec = 00;
var count = 00;

function start(){
    timer = true;
    stopwatch();

}

function stop(){
    timer = false;
    
}

function reset(){
    timer=false;
    hr = 00;
    min = 00;
    sec = 00;
    count = 00;
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;
    
}

function stopwatch(){
    if (timer==true){
        count = count+1;
    
        if (count==100){
            sec = sec+1;
            count=0;
        }

        if (sec==60){
           min =min+1;
            sec=0;
        }

        if (min==60){
            hr = hr+1;
            min=0;
        }
        document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("count").innerHTML = count;

        setTimeout( "stopwatch()", 10);
    }

}
