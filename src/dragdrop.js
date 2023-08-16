import cleaner from "./cleaner"
import dragOverHelp from "./dragoverhelp"
import dragLeaveHelp from "./dragleavehelp"
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
		field.addEventListener("dragover", dragOver)
		field.addEventListener("dragleave", dragLeave)
		field.addEventListener("drop", drop)
	})
}

function dragStart(e) {
	const elementAtCoordinates = document.elementFromPoint(e.x, e.y)

	if (elementAtCoordinates.dataset.dboxdiv) {
		e.target.dataset.chunk = elementAtCoordinates.dataset.dboxdiv
	}

	e.dataTransfer.setData("text/html", elementAtCoordinates.outerHTML)

	setTimeout(() => {
		e.target.addEventListener("dragend", dragEnd)
	}, 0)

	setTimeout(() => {
		if (e.target.parentElement.dataset.dragTableField) {
			cleaner(e.target, "remove")
		}
		if (!e.target.classList.contains("dBox4")) {
			e.target.classList.toggle("hide")
		}
	}, 0)
}

function dragEnd() {
	const dBoxFour = document.querySelector(".dBoxFour")
	if (dBoxFour.classList.contains("hide")) {
		dBoxFour.classList.remove("hide")
		if (dBoxFour.dataset.chunk) dBoxFour.removeAttribute("data-chunk")
		if (dBoxFour.parentElement.dataset.dragTableField) {
			cleaner(dBoxFour, "add")
		}
	}
	const dBoxThree1 = document.querySelector(".dBoxThree1")
	if (dBoxThree1.classList.contains("hide")) {
		dBoxThree1.classList.remove("hide")
		if (dBoxThree1.dataset.chunk) dBoxThree1.removeAttribute("data-chunk")
		if (dBoxThree1.parentElement.dataset.dragTableField) {
			cleaner(dBoxThree1, "add")
		}
	}
}

function dragOver(e) {
	e.preventDefault()

	const dBoxFour = document.querySelector(".dBoxFour")
	dragOverHelp(e, dBoxFour)
	const dBoxThree1 = document.querySelector(".dBoxThree1")
	dragOverHelp(e, dBoxThree1)
}

function dragLeave(e) {
	e.preventDefault()

	const dBoxFour = document.querySelector(".dBoxFour")
	dragLeaveHelp(e, dBoxFour)
	const dBoxThree1 = document.querySelector(".dBoxThree1")
	dragLeaveHelp(e, dBoxThree1)
}

function drop(e) {
	const data = e.dataTransfer.getData("text/html")
	const parser = new DOMParser()
	const doc = parser.parseFromString(data, "text/html")
	const agent = doc.children[0].children[1].children[0]

	if (e.target.classList.contains("drag-over")) {
		if (agent.classList.contains("dBox4")) {
			const chunk = document.querySelector("[data-chunk]")
			// if (!chunk.parentElement.classList.contains("relDiv")) cleaner(chunk.parentElement)
			chunk.parentElement.removeChild(chunk)
			dropManager.dBoxFourDrop(e, agent)
			const dBoxFour = document.querySelector(".dBoxFour")
			dBoxFour.addEventListener("dragstart", dragStart)
		}

		if (agent.classList.contains("dBox3")) {
			const chunk = document.querySelector("[data-chunk]")
			// if (!chunk.parentElement.classList.contains("relDiv3")) cleaner(chunk.parentElement)
			chunk.parentElement.removeChild(chunk)
			dropManager.dBoxThree1Drop(e, agent)
			const dBoxThree1 = document.querySelector(".dBoxThree1")
			dBoxThree1.addEventListener("dragstart", dragStart)
		}
	}
}

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
	const secondContainerDiv = document.createElement("div")
	secondContainerDiv.classList.add("relDiv3")
	const dBoxThree1 = document.createElement("div")
	dBoxThree1.classList.add("dBoxThree1")
	dBoxThree1.draggable = true
	for (let i = 0; i < 3; i += 1) {
		const dBoxThree1Box = document.createElement("div")
		dBoxThree1Box.dataset.dboxdiv = `${i}`
		dBoxThree1Box.classList.add("dBox3")
		dBoxThree1.appendChild(dBoxThree1Box)
	}
	dBoxThree1.addEventListener("dragstart", dragStart)

	secondContainer.appendChild(secondContainerDiv)
	secondContainerDiv.appendChild(dBoxThree1)
	dBox.appendChild(secondContainer)

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
