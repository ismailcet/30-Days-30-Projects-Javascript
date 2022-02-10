function playAudio(e){
    let key=document.querySelector(`.key[data-key='${e.keyCode}']`);
    let audio=document.querySelector(`audio[data-key='${e.keyCode}']`)
    if(!audio) return;//Stop function
    audio.currentTime=0;  
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown',playAudio);
const keys=document.querySelectorAll('.key')
keys.forEach(key=>key.addEventListener('transitionend',removeTrans));

function removeTrans(e){
    if(e.propertyName=='transform'){
        this.classList.remove('playing');
    }
}



