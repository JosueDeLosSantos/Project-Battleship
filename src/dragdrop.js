
function dropTable(){
    const grids = document.querySelector(".grids");
    const dropTableContainer = document.createElement("div");
    dropTableContainer.classList.add("dropTableContainer");
    const dropIndex1 = document.createElement("table");
    dropIndex1.classList.add("dropIndex1");
    const rowIndex1 = document.createElement("tr");
    rowIndex1.classList.add("rowIndex1");
    for (let i = 1; i < 11; i += 1) {
      const tdIndex1 = document.createElement("td");
      tdIndex1.dataset.columnIndex = `${i}`;
      tdIndex1.textContent = `${i}`;
      rowIndex1.appendChild(tdIndex1);
    }
  
    const playerContainer2 = document.createElement("div");
    playerContainer2.classList.add("playerContainer2");
    const dropTableIndex2 = document.createElement("table");
    dropTableIndex2.classList.add("dropTableIndex2");
    for (let i = 1; i < 11; i += 1) {
      const trColumn1 = document.createElement("tr");
      const tdColumn1 = document.createElement("td");
      tdColumn1.dataset.rowIndex = `${i}`;
      tdColumn1.textContent = `${i}`;
      dropTableIndex2.appendChild(trColumn1);
      trColumn1.appendChild(tdColumn1);
    }
  
    // Create the dropTable grid
    const dTable = document.createElement("table");
    dTable.classList.add("dTable");
    dTable.dataset.grab = "none";
  
    dropTableContainer.appendChild(dropIndex1);
    dropIndex1.appendChild(rowIndex1);
    dropTableContainer.appendChild(playerContainer2);
    playerContainer2.appendChild(dropTableIndex2);
    playerContainer2.appendChild(dTable);
    grids.appendChild(dropTableContainer);
  
    for (let i = 0; i < 10; i += 1) {
      const gridRow = document.createElement("tr");
      gridRow.dataset.dragTableRow = `${i}`;
      dTable.appendChild(gridRow);
      for (let j = 0; j < 10; j += 1) {
        const gridField = document.createElement("td");
        gridField.dataset.dragTableField = `${[i]},${[j]}`;
  
        const gridRowSelector = document.querySelector(`[data-drag-table-row = "${i}"]`);
        gridRowSelector.appendChild(gridField);
      }
    }
    // Add event listeners to all fields
    const dropFields = document.querySelectorAll("[data-drag-table-field]");
    dropFields.forEach(field => {
      field.addEventListener("dragend", dragEnd);
      field.addEventListener("dragover", dragOver);
      field.addEventListener("dragleave", dragLeave);
      field.addEventListener("drop", drop);
    })
}
  
function dragStart(e) {
    /* e.dataTransfer.setData('text/html', e.target.outerHTML);
    e.dataTransfer.effectAllowed = 'none';
    const transparentImage = new Image();
    e.dataTransfer.setDragImage(transparentImage, 0, 0); */
    e.dataTransfer.setData('text/plain', e.target.classList[1]);
    const dTable = document.querySelector(".dTable")
    let ex = e.x;
    let ey = e.y;

    // x-249 y-215
    if(e.target.classList[0] === "dBoxFour"){
        if(ex > 248) ex = 248;
        if(ex < 134) ex = 134;
        if(ey > 214) ey = 214;
        if(ey < 188) ey = 188;

        const elementAtCoordinates = document.elementFromPoint(ex, ey);

        if (elementAtCoordinates.dataset.dboxdiv === "0") {
        dTable.dataset.grab = "0";
        }
        if (elementAtCoordinates.dataset.dboxdiv === "1") {
        dTable.dataset.grab = "1";
        }
        if (elementAtCoordinates.dataset.dboxdiv === "2") {
        dTable.dataset.grab = "2";
        }
        if (elementAtCoordinates.dataset.dboxdiv === "3") {
        dTable.dataset.grab = "3";
        }
    }

    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);

    e.target.addEventListener("dragend", dragEnd);
}
  
function dragEnd() {
    const dBoxFour = document.querySelector(".dBoxFour");
    const dTable = document.querySelector(".dTable")
    if (dBoxFour.classList.contains("hide")) {
      if (!dTable.classList.contains("dBox4")) {
        dBoxFour.classList.remove("hide")
      }
    }
    
    console.log("drag ended")
    // e.target.removeEventListener("dragend", dragEnd);
}
  
function dragOver(e) {
    e.preventDefault();

    const dTable = document.querySelector(".dTable")
    const coordinate = e.target.dataset.dragTableField.split(",");

    if (dTable.dataset.grab === "0"){
        if(+coordinate[1] < 7){
        e.target.parentElement.children[+coordinate[1]].classList.add('drag-over')
        e.target.parentElement.children[+coordinate[1] + 1].classList.add('drag-over')
        e.target.parentElement.children[+coordinate[1] + 2].classList.add('drag-over')
        e.target.parentElement.children[+coordinate[1] + 3].classList.add('drag-over')
        }
    }
}
  
function dragLeave(e) {
  
    const dTable = document.querySelector(".dTable")
    const coordinate = e.target.dataset.dragTableField.split(",");
  
    if (dTable.dataset.grab === "0"){
      if(+coordinate[1] < 7){
        e.target.parentElement.children[+coordinate[1]].classList.remove('drag-over')
        e.target.parentElement.children[+coordinate[1] + 1].classList.remove('drag-over')
        e.target.parentElement.children[+coordinate[1] + 2].classList.remove('drag-over')
        e.target.parentElement.children[+coordinate[1] + 3].classList.remove('drag-over')
      }
    }
}
  
function drop(e) {
  
    const selectedClass = e.dataTransfer.getData('text/plain');
    
     const dTable = document.querySelector(".dTable")
    
    
    if (e.target.classList.contains("drag-over")) {
      if (selectedClass === "dBox4"){
        if (!dTable.classList.contains("dBox4")){
          dTable.classList.add(selectedClass)
        }
      }
    }
  
    const coordinate = e.target.dataset.dragTableField.split(",");
    if (dTable.dataset.grab === "0"){
      if (dTable.classList.contains("dBox4")){
        dBoxFourDrop(e, coordinate)
      }
    }
    e.target.classList.remove('drag-over');
}
  
function dBoxFourDrop(e, coordinate){
    if(+coordinate[1] < 7){
      e.target.parentElement.children[+coordinate[1]].classList.remove('drag-over')
      e.target.parentElement.children[+coordinate[1] + 1].classList.remove('drag-over')
      e.target.parentElement.children[+coordinate[1] + 2].classList.remove('drag-over')
      e.target.parentElement.children[+coordinate[1] + 3].classList.remove('drag-over')
      e.target.parentElement.children[+coordinate[1]].classList.add('notSunk')
      e.target.parentElement.children[+coordinate[1] + 1].classList.add('notSunk')
      e.target.parentElement.children[+coordinate[1] + 2].classList.add('notSunk')
      e.target.parentElement.children[+coordinate[1] + 3].classList.add('notSunk')
      e.target.parentElement.children[+coordinate[1]].dataset.dbox4 = 0;
      e.target.parentElement.children[+coordinate[1] + 1].dataset.dbox4 = 1;
      e.target.parentElement.children[+coordinate[1] + 2].dataset.dbox4 = 2;
      e.target.parentElement.children[+coordinate[1] + 3].dataset.dbox4 = 3;
    }
}
  
  
function draggableShips() {
    const grids = document.querySelector(".grids");
    const dBox = document.createElement("div");
    dBox.classList.add("dBox");
    grids.appendChild(dBox);
  
    const firstContainer = document.createElement("div");
    firstContainer.classList.add("firstContainer");
    const dBoxFour = document.createElement("div");
    dBoxFour.classList.add("dBoxFour");
    dBoxFour.classList.add("dBox4");
    dBoxFour.draggable = true;
    for(let i = 0; i < 4; i += 1){
      const dBoxFourBox = document.createElement("div")
      dBoxFourBox.dataset.dboxdiv = `${i}`;
      dBoxFour.appendChild(dBoxFourBox);
    }
    dBoxFour.addEventListener("dragstart", dragStart)
    
    firstContainer.appendChild(dBoxFour);
    dBox.appendChild(firstContainer);
    
    const secondContainer = document.createElement("div");
    secondContainer.classList.add("secondContainer");
    const dBoxThree1 = document.createElement("div");
    dBoxThree1.classList.add("dBoxThree1");
    dBox.appendChild(secondContainer);
    secondContainer.appendChild(dBoxThree1);
    const dBoxThree2 = document.createElement("div");
    dBoxThree2.classList.add("dBoxThree2");
    dBox.appendChild(secondContainer);
    secondContainer.appendChild(dBoxThree2);
  
    const thirdContainer = document.createElement("div");
    thirdContainer.classList.add("thirdContainer");
    const dBoxTwo1 = document.createElement("div");
    dBoxTwo1.classList.add("dBoxTwo1");
    dBox.appendChild(thirdContainer);
    thirdContainer.appendChild(dBoxTwo1);
    const dBoxTwo2 = document.createElement("div");
    dBoxTwo2.classList.add("dBoxTwo2");
    dBox.appendChild(thirdContainer);
    thirdContainer.appendChild(dBoxTwo2);
    const dBoxTwo3 = document.createElement("div");
    dBoxTwo3.classList.add("dBoxTwo3");
    dBox.appendChild(thirdContainer);
    thirdContainer.appendChild(dBoxTwo3);
  
    const fourthContainer = document.createElement("div");
    fourthContainer.classList.add("fourthContainer");
    const dBoxOne1 = document.createElement("div");
    dBoxOne1.classList.add("dBoxOne1");
    dBox.appendChild(fourthContainer);
    fourthContainer.appendChild(dBoxOne1);
    const dBoxOne2 = document.createElement("div");
    dBoxOne2.classList.add("dBoxOne2");
    dBox.appendChild(fourthContainer);
    fourthContainer.appendChild(dBoxOne2);
    const dBoxOne3 = document.createElement("div");
    dBoxOne3.classList.add("dBoxOne3");
    dBox.appendChild(fourthContainer);
    fourthContainer.appendChild(dBoxOne3);
    const dBoxOne4 = document.createElement("div");
    dBoxOne4.classList.add("dBoxOne4");
    dBox.appendChild(fourthContainer);
    fourthContainer.appendChild(dBoxOne4);
}
  
export default function dragDrop(){
    /* grids.removeChild(playerGridContainer);
    grids.removeChild(opponentGridContainer);
    grids.removeChild(playButtonContainer); */
    const playerGridContainer = document.querySelector(".playerGridContainer")
    const opponentGridContainer = document.querySelector(".opponentGridContainer")
    const playButtonContainer = document.querySelector(".playButtonContainer")
    const title1 = document.querySelector(".title1");
    const title2 = document.querySelector(".title2");
    playerGridContainer.classList.add("hide");
    opponentGridContainer.classList.add("hide");
    playButtonContainer.classList.add("hide");
    draggableShips() 
    dropTable()
    title1.innerText = "Your ships";
    title2.innerText = "Your grid";
}