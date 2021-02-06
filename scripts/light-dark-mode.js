const changeColors = (span, button, header, cardtotal, modal, formh2, small) => {
    document.querySelector('.span').style.backgroundColor = span;
    document.querySelector('.button').style.backgroundColor = button;
    document.querySelector('header').style.backgroundColor = header;
    document.querySelector('.card.total').style.backgroundColor = cardtotal;
    document.querySelector('.modal').style.backgroundColor = modal;
    document.querySelector('.modal').querySelector('h2').style.color = formh2;
    document.querySelector('.modal').querySelector('small').style.color = small;
}

const addClasses = () => {
    document.querySelector('.body').classList.add('dark-mode');
    document.querySelector('.modal-overlay').querySelector('.button').classList.add('dark-mode');
    document.querySelector('.modal-overlay').querySelector('button').classList.add('dark-mode');
    document.querySelector('#transaction').querySelector('a').classList.add('dark-mode');
}

const removeClasses = () => {
    document.querySelector('.body').classList.remove('dark-mode');
    document.querySelector('.modal-overlay').querySelector('.button').classList.remove('dark-mode');
    document.querySelector('.modal-overlay').querySelector('button').classList.remove('dark-mode');
    document.querySelector('#transaction').querySelector('a').classList.remove('dark-mode');
}

let buttonElement = document.querySelector('.switch');

buttonElement.addEventListener('click', () => {
    let switchElement = document.querySelector('.span');
    switchElement.classList.toggle('dark');

    if(switchElement.classList.value === 'span dark'){
        changeColors("#141414", "#fff", "#141414", "#757277", "#141414", "#FFFFFF", "#FFFFFF");
        addClasses();
    }else {
        changeColors("#fff", "#141414", "#2D4A22", "#49AA26", "#F0F2f5", "#808080", "#000000");
        removeClasses();
    }

})