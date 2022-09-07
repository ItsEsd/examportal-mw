/* M A S T R O W A L L */
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function countdown() {
    var ttime = parseInt(document.getElementById('tmili').value);
    var secs = ttime/1000;
     var minss = secs/60;
     var hours = Math.floor(minss/60);
     var mins = Math.round(((minss/60) - hours)*60);
   var totaldur = minss*60;
    display = document.querySelector('#timeleft');
    startTimer(totaldur, display);
};

//////////// CALCULATOR
	//function that display value
    function dis(val)
    {
        document.getElementById("result").value+=val
    }
    
    //function that evaluates the digit and return result
    function solve()
    {
        let x = document.getElementById("result").value
        let y = eval(x)
        document.getElementById("result").value = y
    }
    
    //function that clear the display
    function clr()
    {
        document.getElementById("result").value = ""
    }