const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate(){
    // Data fields
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90; // offset by 90 due to intial transform

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60) * 360) + 90;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90;

    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(seconds); // for construction purposes
}

setInterval(setDate,1000);