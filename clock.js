let analogClock = setInterval(analog, 1000);
function analog () {
  const hoursHand = new Date().getHours() % 12;
  const minsHand = new Date().getMinutes();
  const secsHand = new Date().getSeconds();
  
 // for hour hand.
 document.getElementById("hourHand").style.transform = `rotate(${30 * hoursHand}deg)`;

 // for minutes hand.
 document.getElementById("minHand").style.transform = `rotate(${6 * minsHand}deg)`;

 // for seconds hand.
 document.getElementById("secHand").style.transform = `rotate(${6 * secsHand}deg)`;
}

let digitalClock = setInterval(digital, 1000);
function digital () {
  const myTime = new Date();

// for Digital hour, minutes and seconds.
document.getElementById('readHour').innerHTML = String(myTime.getHours() % 12).padStart(2,0);
document.getElementById('readMins').innerHTML = String(myTime.getMinutes()).padStart(2,0);
document.getElementById('readSecs').innerHTML = String(myTime.getSeconds()).padStart(2,0);

// for digital weekday.
const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]; 
document.getElementById('weekday').innerHTML = weekDay[myTime.getDay()];

// for digital date.
switch (myTime.getDate()) {
  case 1:
  case 21:
  case 31: 
    document.getElementById('day').innerHTML = myTime.getDate() + "st";
    break;
  case 2:
  case 22:
    document.getElementById('day').innerHTML = myTime.getDate() + "nd";
    break;
  case 3:
  case 23:
    document.getElementById('day').innerHTML = myTime.getDate() + "rd";
    break;
  default:
    document.getElementById('day').innerHTML = myTime.getDate() + "th";
    break;
} 

// for digital months.
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.getElementById('month').innerHTML = monthName[myTime.getMonth()];

// for digital year.
document.getElementById('year').innerHTML = myTime.getFullYear();
}