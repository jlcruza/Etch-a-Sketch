const parentDiv = document.querySelector('#tilesArea');
let sqr = parentDiv.offsetWidth;
parentDiv.style.height = sqr + 'px';
parentDiv.style.width = sqr + 'px';

let color = 'Gray';

const newBtn = document.querySelector('#newButton');
newBtn.addEventListener('click', createPanel);

const resetBtn = document.querySelector('#resetButton');
resetBtn.addEventListener('click', resetPanel);

const red = document.querySelector('#redButton');
red.style.backgroundColor = '#FF0000';
red.addEventListener('click', setColor);

const blue = document.querySelector('#blueButton');
blue.style.backgroundColor = '#0000ff';
blue.addEventListener('click', setColor);

const green = document.querySelector('#greenButton');
green.style.backgroundColor = '#00ff00';
green.addEventListener('click', setColor);

const yellow = document.querySelector('#yellowButton');
yellow.style.backgroundColor = '#ffff00';
yellow.addEventListener('click', setColor);

const pink = document.querySelector('#pinkButton');
pink.style.backgroundColor = '#ff0066';
pink.addEventListener('click', setColor);

const gray = document.querySelector('#grayButton');
gray.style.backgroundColor = 'Gray';
gray.addEventListener('click', setColor);

const black = document.querySelector('#blackButton');
black.style.backgroundColor = '#000000';
black.addEventListener('click', setColor);

const random = document.querySelector('#randomButton');
random.style.backgroundColor = '#fffffff';
random.addEventListener('click', setColor);

createPanel();

function paintDiv(e) {
    e.target.style.backgroundColor = color;
}

function setColor(e) {
    color = e.target.style.backgroundColor;
}

function createPanel() {

    let amount = 16.0;
    while(parentDiv.firstChild){
        parentDiv.removeChild(parentDiv.firstChild);
    }

    amtText = document.getElementById('gridNumber').value;

    if(amtText == ''){
        amtText = 16
    }
    else if (!isNaN(amtText)) {
        amount = Number(amtText);
    }
    else{
        amount = 16;
    }

    let size = ((sqr / amount) - 2) + 'px';

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
}

function resetPanel() {
    const divs = document.querySelectorAll('#tilesArea div');
    divs.forEach(function(div) {
        div.style.backgroundColor = 'Transparent';
    });
}