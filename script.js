let mainElement = document.querySelector('main');
let but = document.querySelector(".link");
but.onclick = showMessage;

function showMessage(event) {
mainElement.prepend(event.currentTarget.tagName);
};

let arr = ['one', 'two', 'free'];
//arr.forEach(item => {p = document.createElement('p'); p.innerHTML = item; mainElement.prepend(p)});
arr.forEach(item => mainElement.insertAdjacentHTML('beforeend', `<p>${item}</p>`));
