const secondHand=document.querySelector('.second-hand');
const minHand=document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');
function getDate(){
    const date =new Date();
    
    const second=date.getSeconds();
    const secondDegree=((second / 60) * 360 +90);
    secondHand.style.transform=`rotate(${secondDegree}deg)`;
   

    const min=date.getMinutes();
    const abc=((second/60)*6 +90);
    console.log(abc);
    const minDegree=((min / 60) *360) +((second/60)*6 +90);
    minHand.style.transform=`rotate(${minDegree}deg)`;

    const hour=date.getHours();
    const hourDegree=((hour / 12) *360)+((min / 60) *30 + 90);
    hourHand.style.transform=`rotate(${hourDegree}deg)`;
}

setInterval(getDate,1000);