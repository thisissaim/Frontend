

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];



  const  giveaway = document.querySelector(".giveaway");
  const  deadline = document.querySelector(".deadline");
  const  format = document.querySelectorAll(".deadline-format h4");
  console.log(format);

  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  // months are ZERO index based;
  const futureDate = new Date(tempYear, tempMonth, tempDay +2, 11, 30, 0);


const year = futureDate.getFullYear();//returne year from futture date 
const hours = futureDate.getHours();//returne year from futture date 
const minutes = futureDate.getMinutes();//returne year from futture date 
const date = futureDate.getDate();

let weekday = futureDate.getDay();
weekday = weekdays[weekday];
let month = futureDate.getMonth();
month = months[month];



giveaway.textContent= `Giveaway ends on ${weekday}, ${date} ${month},${year} ${hours}:${minutes} `;

const futureTime = futureDate.getTime();
function getRemaindngTime() {

  const today = new Date().getTime();
  const t = futureDate - today;

  //1s=1000ms
  
  //values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  //calc all values
  
  let days = t/oneDay;

  days = Math.floor(days);
  let hours = Math.floor((t%oneDay)/oneHour);//to geth hour of only that day
  let minutes = Math.floor((t%oneHour)/oneMinute);
  let seconds = Math.floor((t%oneMinute)/1000);
  
  //set values array
  const values = [days , hours , minutes , seconds];

  function addZero(item)//if less than 10 days minutes etc left add zero
  {
    if(item<10)
    {
      return item = `0${item}`;
    }
    return item;
  }
  
  format.forEach(function(format , index){
    format.innerHTML = addZero(values[index]);
  });
  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h3 class="expired">Sorry, This Giveaway has expired</h4>`;
  }
  
}

//countdown
let countdown = setInterval(getRemaindngTime , 1000);//call every sec


 getRemaindngTime();