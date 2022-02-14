const controls=document.querySelectorAll('.controls input');

function showVariables(){
    const sufflex=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + sufflex);
}

controls.forEach(element =>{
    element.addEventListener('change',showVariables);
    element.addEventListener('mousemove',showVariables)
});