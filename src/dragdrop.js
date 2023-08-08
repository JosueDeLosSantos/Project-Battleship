import cleaner from "./cleaner"
import * as doHelp from "./dragoverhelp"
import * as dlHelp from "./dragleavehelp"
import * as dropManager from "./dropManager"


function dropTable() {
	const grids = document.querySelector(".grids")
	const dropTableContainer = document.createElement("div")
	dropTableContainer.classList.add("dropTableContainer")
	const dropIndex1 = document.createElement("table")
	dropIndex1.classList.add("dropIndex1")
	const rowIndex1 = document.createElement("tr")
	rowIndex1.classList.add("rowIndex1")
	for (let i = 1; i < 11; i += 1) {
		const tdIndex1 = document.createElement("td")
		tdIndex1.dataset.columnIndex = `${i}`
		tdIndex1.textContent = `${i}`
		rowIndex1.appendChild(tdIndex1)
	}

	const playerContainer2 = document.createElement("div")
	playerContainer2.classList.add("playerContainer2")
	const dropTableIndex2 = document.createElement("table")
	dropTableIndex2.classList.add("dropTableIndex2")
	for (let i = 1; i < 11; i += 1) {
		const trColumn1 = document.createElement("tr")
		const tdColumn1 = document.createElement("td")
		tdColumn1.dataset.rowIndex = `${i}`
		tdColumn1.textContent = `${i}`
		dropTableIndex2.appendChild(trColumn1)
		trColumn1.appendChild(tdColumn1)
	}

	// Create the dropTable grid
	const dTable = document.createElement("table")
	dTable.classList.add("dTable")
	dTable.dataset.grab = "none"

	dropTableContainer.appendChild(dropIndex1)
	dropIndex1.appendChild(rowIndex1)
	dropTableContainer.appendChild(playerContainer2)
	playerContainer2.appendChild(dropTableIndex2)
	playerContainer2.appendChild(dTable)
	grids.appendChild(dropTableContainer)

	for (let i = 0; i < 10; i += 1) {
		const gridRow = document.createElement("tr")
		gridRow.dataset.dragTableRow = `${i}`
		dTable.appendChild(gridRow)
		for (let j = 0; j < 10; j += 1) {
			const gridField = document.createElement("td")
			gridField.style.position = "relative"
			gridField.dataset.dragTableField = `${[i]},${[j]}`

			const gridRowSelector = document.querySelector(`[data-drag-table-row = "${i}"]`)
			gridRowSelector.appendChild(gridField)
		}
	}
	// Add event listeners to all fields
	const dropFields = document.querySelectorAll("[data-drag-table-field]")
	dropFields.forEach((field) => {
		// field.addEventListener("dragenter", dragEnter)
		field.addEventListener("dragover", dragOver)
		field.addEventListener("dragleave", dragLeave)
		field.addEventListener("drop", drop)
	})
}

function dragStart(e) {
	const elementAtCoordinates = document.elementFromPoint(e.x, e.y)
	e.dataTransfer.setData("text/html", elementAtCoordinates.outerHTML)

	if (elementAtCoordinates.dataset.dboxdiv) {
		e.target.dataset.chunk = elementAtCoordinates.dataset.dboxdiv
	}

	console.log(e.target)

	setTimeout(() => {
		e.target.addEventListener("dragend", dragEnd)
	}, 0)

	setTimeout(() => {
		e.target.classList.add("hide")
	}, 0)
}

/* function dragEnter(e) {
	console.log(e)
} */

function dragEnd() {
	const dBoxFour = document.querySelector(".dBoxFour")
	const dTable = document.querySelector(".dTable")
	if (dBoxFour.classList.contains("hide")) {
		if (!dTable.classList.contains("dBox4")) {
			dBoxFour.classList.remove("hide")
		}
	}

	console.log("drag ended")
}

function dragOver(e) {
	e.preventDefault()
	

	const dBoxFour = document.querySelector(".dBoxFour")

	if (!dBoxFour.classList.contains("v4")) {
		doHelp.dragOverH(e, dBoxFour)	
	} else {
		doHelp.dragOverV(e, dBoxFour)
	}
}

function dragLeave(e) {
	e.preventDefault()

	const dBoxFour = document.querySelector(".dBoxFour")
	
	if (!dBoxFour.classList.contains("v4")) {
		dlHelp.dragLeaveH(e, dBoxFour)	
	} else {
		dlHelp.dragLeaveV(e, dBoxFour)
	}
}

function drop(e) {
	const data = e.dataTransfer.getData("text/html")
	const parser = new DOMParser()
	const doc = parser.parseFromString(data, "text/html")
	const agent = doc.children[0].children[1].children[0]

	const hor = +e.target.dataset.dragTableField.split(",")[1]
	if (e.target.classList.contains("drag-over")) {
		if (agent.classList.contains("dBox4")) {
			dropManager.dBoxFourDrop(e, hor, agent)
			const chunk = document.querySelector("[data-chunk]")
			if(!chunk.parentElement.classList.contains("relDiv")) cleaner(chunk.parentElement)
			chunk.parentElement.removeChild(chunk)
			const dBoxFour = document.querySelector(".dBoxFour")
			dBoxFour.addEventListener("dragstart", dragStart)
		}
	}
}

/* function dragStartFour(e) {
	e.target.parentElement.parentElement.dataset.grab = e.target.dataset.dbox4
	e.target.parentElement.parentElement.classList.add("dBox4")
	e.dataTransfer.setData("text/html", e.target.parentElement.parentElement.outerHTML)

	const dBoxFour = document.querySelector(".dBoxFour")
	dBoxFour.dataset.chunk = e.target.dataset.dbox4

	// Change all fields back to their original state
	const dbox4All = document.querySelectorAll("[data-dbox4]")
	dbox4All.forEach((el) => {
		el.classList.remove("notSunk")
		el.removeAttribute("data-dbox4")
	})

	// Remove drop event listeners listeners to all fields temporarily
	const dropFields = document.querySelectorAll("[data-drag-table-field]")
	dropFields.forEach((field) => {
		field.removeEventListener("drop", drop)
		field.addEventListener("drop", drop2)
	})
} */

/* function dragEnd2() {
	const dBoxFour = document.querySelector(".dBoxFour")
	const dTable = document.querySelector(".dTable")
	if (dBoxFour.classList.contains("hide")) {
		if (dTable.classList.contains("dBox4")) {
			dBoxFour.classList.remove("hide")
		}
	}

	console.log("drag ended")
} */

/* function drop2(e) {
	const data = e.dataTransfer.getData("text/html")
	const parser = new DOMParser()
	const doc = parser.parseFromString(data, "text/html")
	const agent = doc.children[0].children[1].children[0]
	const hor = +e.target.dataset.dragTableField.split(",")[1]

	const dTable = document.querySelector(".dTable")

	if (e.target.classList.contains("drag-over")) {
		if (dTable.classList.contains("dBox4")) {
			dBoxFourDrop(e, hor, agent.dataset.grab)

			// Remove drop event listeners listeners to all fields temporarily
			const dropFields = document.querySelectorAll("[data-drag-table-field]")
			dropFields.forEach((field) => {
				field.removeEventListener("drop", drop2)
				field.addEventListener("drop", drop)
			})
		}
		const chunk = document.querySelector("[data-chunk]")
		chunk.removeAttribute("data-chunk")
	}
} */

function draggableShips() {
	const grids = document.querySelector(".grids")
	const dBox = document.createElement("div")
	dBox.classList.add("dBox")
	grids.appendChild(dBox)

	const firstContainer = document.createElement("div")
	firstContainer.classList.add("firstContainer")
	const firstContainerdiv = document.createElement("div")
	firstContainerdiv.classList.add("relDiv")
	const dBoxFour = document.createElement("div")
	dBoxFour.classList.add("dBoxFour")
	dBoxFour.draggable = true
	for (let i = 0; i < 4; i += 1) {
		const dBoxFourBox = document.createElement("div")
		dBoxFourBox.dataset.dboxdiv = `${i}`
		dBoxFourBox.classList.add("dBox4")
		dBoxFour.appendChild(dBoxFourBox)
	}
	dBoxFour.addEventListener("dragstart", dragStart)

	firstContainer.appendChild(firstContainerdiv)
	firstContainerdiv.appendChild(dBoxFour)
	dBox.appendChild(firstContainer)

	const secondContainer = document.createElement("div")
	secondContainer.classList.add("secondContainer")
	const dBoxThree1 = document.createElement("div")
	dBoxThree1.classList.add("dBoxThree1")
	dBox.appendChild(secondContainer)
	secondContainer.appendChild(dBoxThree1)
	const dBoxThree2 = document.createElement("div")
	dBoxThree2.classList.add("dBoxThree2")
	dBox.appendChild(secondContainer)
	secondContainer.appendChild(dBoxThree2)

	const thirdContainer = document.createElement("div")
	thirdContainer.classList.add("thirdContainer")
	const dBoxTwo1 = document.createElement("div")
	dBoxTwo1.classList.add("dBoxTwo1")
	dBox.appendChild(thirdContainer)
	thirdContainer.appendChild(dBoxTwo1)
	const dBoxTwo2 = document.createElement("div")
	dBoxTwo2.classList.add("dBoxTwo2")
	dBox.appendChild(thirdContainer)
	thirdContainer.appendChild(dBoxTwo2)
	const dBoxTwo3 = document.createElement("div")
	dBoxTwo3.classList.add("dBoxTwo3")
	dBox.appendChild(thirdContainer)
	thirdContainer.appendChild(dBoxTwo3)

	const fourthContainer = document.createElement("div")
	fourthContainer.classList.add("fourthContainer")
	const dBoxOne1 = document.createElement("div")
	dBoxOne1.classList.add("dBoxOne1")
	dBox.appendChild(fourthContainer)
	fourthContainer.appendChild(dBoxOne1)
	const dBoxOne2 = document.createElement("div")
	dBoxOne2.classList.add("dBoxOne2")
	dBox.appendChild(fourthContainer)
	fourthContainer.appendChild(dBoxOne2)
	const dBoxOne3 = document.createElement("div")
	dBoxOne3.classList.add("dBoxOne3")
	dBox.appendChild(fourthContainer)
	fourthContainer.appendChild(dBoxOne3)
	const dBoxOne4 = document.createElement("div")
	dBoxOne4.classList.add("dBoxOne4")
	dBox.appendChild(fourthContainer)
	fourthContainer.appendChild(dBoxOne4)
}

export default function dragDrop() {
	const playerGridContainer = document.querySelector(".playerGridContainer")
	const opponentGridContainer = document.querySelector(".opponentGridContainer")
	const playButtonContainer = document.querySelector(".playButtonContainer")
	const title1 = document.querySelector(".title1")
	const title2 = document.querySelector(".title2")
	playerGridContainer.classList.add("hide")
	opponentGridContainer.classList.add("hide")
	playButtonContainer.classList.add("hide")
	draggableShips()
	dropTable()
	title1.innerText = "Your ships"
	title2.innerText = "Your grid"
}
