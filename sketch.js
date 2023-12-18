const container=document.querySelector('.container')

function createGrid(x) {
let gridSize=(x*x);
for(let i=0;i<gridSize;i++){
    let gridDiv =document.createElement('div');
    gridDiv.className='box';
    container.appendChild(gridDiv);
}
container.style.gridTemplateColumns= `repeat(${x},1fr)`
container.style.gridTemplateRows= `repeat(${x},1fr)`
};
createGrid(8);

