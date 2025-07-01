const main = document.querySelector('main');

const container = document.createElement('div');
container.classList.add('container');

let limit = 16;

for (let i = 0; i < limit; i++) {
    const div = document.createElement('div');
    div.textContent = `${i}`;
    div.classList.add('div');
    container.appendChild(div);
}

main.appendChild(container);