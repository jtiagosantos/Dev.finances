const changeColors = (span, button, header, cardUI, cardtotal, modal) => {
    document.querySelector('.span').style.backgroundColor = span;
    document.querySelector('.button').style.backgroundColor = button;
    document.querySelector('header').style.backgroundColor = header;
    document.querySelectorAll('.card').forEach(card => card.style.backgroundColor = cardUI);
    document.querySelector('.card.total').style.backgroundColor = cardtotal;
    document.querySelector('.modal').style.backgroundColor = modal;
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
        changeColors("#141414", "#fff", "#141414", "#fff", "#757277", "#141414");
        addClasses();
    }else {
        changeColors("#fff", "#141414", "#7e0cc0", "rgba(248, 128, 218, 0.486)", "#410474", "#410474");
        removeClasses();
    }

})