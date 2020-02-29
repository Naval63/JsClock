const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegress = ((seconds/60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegress}deg)`;

    const mins = now.getMinutes();
    const minsDegress = ((mins/60) * 360) +90;
    minsHand.style.transform = `rotate(${minsDegress}deg)`;

    const hours = now.getHours();
    const hoursDegress = ((hours/12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegress}deg)`;
}
setInterval(setDate, 1000);