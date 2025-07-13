const main = document.querySelector('main');

const button = document.createElement('button');
button.textContent = 'Set Grid Size';
main.appendChild(button);

const container = document.createElement('div');
container.classList.add('container');
let limit = 10;

createGrid(limit);

function createGrid(size) {

    for (let i = 0; i < size; i++) {
        let column = document.createElement('div');
        
        // Create 4 rows, each with 4 columns
        for (let j = 0; j < size; j++) {
            let row = document.createElement('div');
            row.classList.add("div-item","opacity");
            column.appendChild(row);
        }   
        
        container.appendChild(column);
    }

    main.appendChild(container);

}

container.addEventListener('mouseover', (event) => {
        let cell = event.target;
        if (cell.classList.contains("div-item")){
            cell.style.backgroundColor = getRandomColor();
        }
    }
)



button.addEventListener('click', () => {
        
    createGrid(getGridSize());
    }
)

function getGridSize() {

    let isValid = false;
    while (!isValid) {
        let getGridSize = prompt("Enter the number of squares per side (max 100):");
        if (getGridSize === null) {
            return; // User cancelled
        }
        getGridSize = parseInt(getGridSize);
        if (isNaN(getGridSize) || getGridSize <= 0 || getGridSize > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            container.textContent = ''; // Clear the container
            return getGridSize;
        }
    }

}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
