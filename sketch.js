const parentDiv = document.querySelector('#tilesArea');
let sqr = parentDiv.offsetWidth;
parentDiv.style.height = sqr + 'px';
parentDiv.style.width = sqr + 'px';

let amount = 5.0;
let size = ((sqr / amount)) + 'px';

for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.classList.add('tiles');
    div.classList.add('lastTiles');
    div.style.width = size;
    div.style.height = size;
    div.addEventListener('mouseenter', paintDiv);
    parentDiv.appendChild(div);

    for (let j = 1; j < amount; j++) {
        const div2 = document.createElement('div');
        div2.classList.add('tiles');
        div2.style.width = size;
        div2.style.height = size;
        div2.addEventListener('mouseenter', paintDiv);
        parentDiv.appendChild(div2);
    }

}

function paintDiv(e) {
    e.target.style.backgroundColor = 'Gray';
}