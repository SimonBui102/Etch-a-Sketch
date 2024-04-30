const container=document.querySelector(".container");
let size=0

const button = document.querySelector("button");

button.addEventListener("click",()=>{
    if(size >0){
        resetGrid()
        size=0;
    }
    while(size <=0 || size >100){
        size=prompt("Select a grid size from 1 to 100");
    }
    gridSize();

});

function gridSize(){
    for(let i =0; i<size;i++){

        let cellContainer= document.createElement("div");
        cellContainer.setAttribute("class","cell-container")

        for(let j=0; j<size; j++){
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.addEventListener("mousemove",()=>{
                cell.style.backgroundColor=`rgb(`+randomRGB(255) 
                + `,` + randomRGB(255) + `,` + randomRGB(255) + `)`;

            })
            cellContainer.appendChild(cell);

        }


        container.appendChild(cellContainer);

    }
}

function resetGrid(){

    const cellContainers= document.querySelectorAll(".cell-container");

    cellContainers.forEach((cellContainer)=>{
        container.removeChild(cellContainer);

    });



}

function randomRGB(num){

    return Math.floor(Math.random()*num);

}