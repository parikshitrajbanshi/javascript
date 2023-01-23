let title = document.getElementById('tittle-id');
title.innerText = 'hello';

let cont = document.getElementById('fruit-container');
// cont.innerHTML = '';

let fruitimgArr = ['img/apple.jpg','img/orange.jpg'];
let fruitnameArr = ['apple','orange'];

for(let i = 0; i<fruitnameArr.length; i++){
    cont.innerHTML = cont.innerHTML + `
    <div class="fruit">
    <div class="fruit-image">
        <img src="${fruitimgArr[i]}" alt="apple">
    </div>
    <div class="fruit-name">
        ${fruitnameArr[i]}
    </div>
</div>`;
}


let selectcontainer = document.getElementById('select-container');
let countryArr = [
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal',
    'nepal'
];
for (let i = 0; i<countryArr.length; i++){
    selectcontainer.innerHTML = selectcontainer.innerHTML  + `<option>${countryArr[i]}</optiion>`
}

