var countdownTimer = '';
var upgradeTime = 1800; // total sec row from the table
var seconds = upgradeTime;
var speed = 50; //interval speed

function timer() 
{
    seconds         = ((seconds * 1000) - speed) / 1000; //get new value for seconds
    var days        = Math.floor(seconds/24/60/60);
    var hoursLeft   = Math.floor((seconds) - (days*86400));
    var hours       = Math.floor(hoursLeft/3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    var minutes     = Math.floor(minutesLeft/60);
    var remainingSeconds = (seconds % 60).toFixed(0);

    
    if(seconds <= 0){ stopTimer(); return; } //sets a flag here for final call
    
    document.getElementById('timer1').innerHTML =  pad(hours) + " : " +pad(minutes) + " : " + pad(remainingSeconds);

    setTimeout('timer()', speed);
}

function stopTimer(){
    clearTimeout(countdownTimer);
    console.log("IT HAS BEEN DONE");
    document.getElementById('timer1').innerHTML = "00 : 00 : 00"
}

function pad(n) 
{
    return (n < 10 ? "0" + n : n);
}

clearTimeout(countdownTimer)
countdownTimer = setTimeout('timer()', speed);

$(document).ready(function() {

    $("#only_num").keydown(function(event) {
    
      // Разрешаем: backspace, delete, tab и escape
      if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
        // Разрешаем: Ctrl+A
        (event.keyCode == 65 && event.ctrlKey === true) ||
        // Разрешаем: home, end, влево, вправо
        (event.keyCode >= 35 && event.keyCode <= 39)) {
        // Ничего не делаем
        return;
      } else {
        // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
          event.preventDefault();
        }
      }
    });
  });
