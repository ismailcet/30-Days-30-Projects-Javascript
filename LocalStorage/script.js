const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse((localStorage.getItem('items'))) || [];



function addItem(e){
    e.preventDefault();
    let text=this.querySelector('[name=item]').value;
    const item={
        text,
        done:false
    };
    console.log(item)
    items.push(item);
    popItem(items,itemsList);
    localStorage.setItem('items',JSON.stringify(items));
    this.reset();
}

function popItem(plates=[],plateList){
    plateList.innerHTML=plates.map((plate,i)=>{
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

function submitDone(e){

    if(e.target.matches('input')){
        let el=e.target;
        const index=el.dataset.index;
        items[index].done=!items[index].done;
        popItem(items,itemsList)
        localStorage.setItem('items',JSON.stringify(items));
    }
    
}


addItems.addEventListener('submit',addItem);
itemsList.addEventListener('click',submitDone);

popItem(items,itemsList);