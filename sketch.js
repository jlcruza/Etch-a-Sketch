const parentDiv = document.querySelector('#tilesArea');
parentDiv.style.height = parentDiv.offsetWidth + 'px';
parentDiv.style.width = parentDiv.getBoundingClientRect().height + 'px';

let amount = 10;
let size = ((parentDiv.getBoundingClientRect().width / amount) - (amount - 5)) + 'px';

for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.classList.add('lastTiles');
    div.style.width = size;
    div.style.height = size;
    parentDiv.appendChild(div);

    for (let j = 1; j < amount; j++) {
        const div2 = document.createElement('div');
        div2.classList.add('tiles');
        div2.style.width = size;
        div2.style.height = size;
        parentDiv.appendChild(div2);
    }
}