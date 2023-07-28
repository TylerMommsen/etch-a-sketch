const mainGridContainer = document.querySelector('.main-grid-container');

function createGrid(size) {
    for (i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row'+(i+1));
        row.style.display = 'flex';
        row.style.justifyContent = 'cemter';
        row.style.alignItems = 'center';
        mainGridContainer.appendChild(row);
        for (j = 0; j < size; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.style.width = '48px';
            gridSquare.style.height = '48px';
            gridSquare.style.border = '1px Solid Black';
            gridSquare.style.backgroundColor = 'white';
            row.appendChild(gridSquare);
        }
    }
}

createGrid(16);