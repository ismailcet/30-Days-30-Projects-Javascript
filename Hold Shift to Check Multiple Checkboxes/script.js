const checkBoxes=document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function changeBox(e){
    let inBetween=false;
    if(e.shiftKey && this.checked){
        checkBoxes.forEach(checkBox=>{
            console.log(checkBox);
            if(checkBox === this || checkBox ===lastChecked){
                inBetween = !inBetween;
                  console.log('Starting to check the inbetween')         
            }
            if(inBetween){
                checkBox.checked=true;
            }
        });
    }
    lastChecked = this;
}

checkBoxes.forEach(element=>element.addEventListener('click',changeBox));