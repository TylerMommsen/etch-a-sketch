const mainGridContainer = document.querySelector('.main-grid-container');

function createGrid(size) {
    for (i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex';
        row.style.justifyContent = 'cemter';
        row.style.alignItems = 'center';
        mainGridContainer.appendChild(row);
        for (j = 0; j < size; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.style.width = (mainGridContainer.clientWidth / size) + 'px';
            gridSquare.style.height = (mainGridContainer.clientHeight / size) + 'px';
            gridSquare.style.border = '1px Solid Black';
            gridSquare.style.boxSizing = 'border-box';
            gridSquare.style.backgroundColor = 'white';
            row.appendChild(gridSquare);
        }
    }
    hover();
}

function hover() {
    const rows = document.querySelectorAll('.row');

    for (i = 0; i < rows.length; i++) {
        let squares = rows[i].children;
        for (j = 0; j < squares.length; j++) {
            squares[j].addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = 'black';
            });

            squares[j].addEventListener('mouseleave', (e) => {
                e.target.style.backgroundColor = 'white';
            });
        }
    }
}


function clearGrid() {
    const rows = document.querySelectorAll('.row');
    for (i = 0; i < rows.length; i++) {
        rows[i].remove();
    }
}

const resizeButton = document.querySelector('#resize-grid-button');
resizeButton.addEventListener('click', () => {
    let userInput = prompt('Enter a new size for the grid: ');
    clearGrid();
    createGrid(userInput);
});

createGrid(16);