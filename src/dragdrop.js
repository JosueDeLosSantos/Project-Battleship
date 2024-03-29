import cleaner from "./cleaner"
import dragOverHelp from "./dragoverhelp"
import dragLeaveHelp from "./dragleavehelp"
import * as dropManager from "./dropManager"
import chunkChecker from "./chunkChecker"
import * as logic from "./logic"
// eslint-disable-next-line import/no-cycle
import * as DOM from "./DOM"
import customiseIcon from "./icons/swipe.svg"
import customiseIcon2 from "./icons/swipe2.svg"

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

let dsClass = null

function dragStart(e) {
	let elementAtCoordinates = document.elementFromPoint(e.x, e.y)
	if (elementAtCoordinates.dataset.dboxdiv) {
		e.target.dataset.chunk = elementAtCoordinates.dataset.dboxdiv
		const temp = elementAtCoordinates.parentElement
		dsClass = temp
	}

	if (!e.target.hasAttribute("data-dboxdiv")) {
		e.dataTransfer.setData("text/html", elementAtCoordinates.outerHTML)

		setTimeout(() => {
			e.target.addEventListener("dragend", dragEnd)
		}, 0)

		setTimeout(() => {
			if (e.target.parentElement.dataset.dragTableField) {
				cleaner(e.target, "remove")
			}
			if (
				!e.target.classList.contains("dBox4") &&
				!e.target.classList.contains("dBox3") &&
				!e.target.classList.contains("dBox3B") &&
				!e.target.classList.contains("dBox2") &&
				!e.target.classList.contains("dBox2B") &&
				!e.target.classList.contains("dBox2C") &&
				!e.target.classList.contains("dBox1") &&
				!e.target.classList.contains("dBox1B") &&
				!e.target.classList.contains("dBox1C") &&
				!e.target.classList.contains("dBox1D")
			) {
				e.target.classList.add("hide")
			}
		}, 0)
	} else if (e.target.hasAttribute("data-dboxdiv")) {
		elementAtCoordinates = e.target.dataset.dboxdiv
		e.target.parentElement.dataset.chunk = elementAtCoordinates
		const temp = e.target.parentElement
		dsClass = temp

		e.dataTransfer.setData("text/html", e.target.outerHTML)

		setTimeout(() => {
			e.target.parentElement.addEventListener("dragend", dragEnd)
		}, 0)

		setTimeout(() => {
			if (e.target.parentElement.parentElement.dataset.dragTableField) {
				cleaner(e.target.parentElement, "remove")
			}
			if (
				!e.target.parentElement.classList.contains("dBox4") &&
				!e.target.parentElement.classList.contains("dBox3") &&
				!e.target.parentElement.classList.contains("dBox3B") &&
				!e.target.parentElement.classList.contains("dBox2") &&
				!e.target.parentElement.classList.contains("dBox2B") &&
				!e.target.parentElement.classList.contains("dBox2C") &&
				!e.target.parentElement.classList.contains("dBox1") &&
				!e.target.parentElement.classList.contains("dBox1B") &&
				!e.target.parentElement.classList.contains("dBox1C") &&
				!e.target.parentElement.classList.contains("dBox1D")
			) {
				e.target.parentElement.classList.add("hide")
			}
		}, 0)
	}
}

function dragEnd() {
	bugFixer()
	const playerGrid = document.querySelector(".playerGrid")
	if (playerGrid.classList.contains("waiting")) {
		playerGrid.classList.remove("waiting")
	}
}

function dragOver(e) {
	e.preventDefault()
	dragOverHelp(e, dsClass)
}

function dragLeave(e) {
	e.preventDefault()
	dragLeaveHelp(e, dsClass)
}

function drop(e) {
	const data = e.dataTransfer.getData("text/html")
	const parser = new DOMParser()
	const doc = parser.parseFromString(data, "text/html")
	const agent = doc.children[0].children[1].children[0]

	if (agent.classList.contains("Apple-interchange-newline")) {
		bugFixer()
		return
	}

	if (e.target.classList.contains("drag-over")) {
		if (agent.classList.contains("dBox4")) {
			const chunk = document.querySelector(".dBoxFour")
			if (chunk.parentElement.dataset.dragTableField) chunkChecker(chunk)
			if (chunk.parentElement.childNodes[0]) chunk.parentElement.removeChild(chunk)
			dropManager.dBoxFourDrop(e, agent)
			const dBoxFour = document.querySelector(".dBoxFour")
			dBoxFour.addEventListener("dragstart", dragStart)
		}

		if (agent.classList.contains("dBox3")) {
			const chunk = document.querySelector(".dBoxThree1")
			if (chunk.parentElement.dataset.dragTableField) chunkChecker(chunk)
			if (chunk.parentElement.childNodes[0]) chunk.parentElement.removeChild(chunk)
			dropManager.dBoxThree1Drop(e, agent)
			const dBoxThree1 = document.querySelector(".dBoxThree1")
			dBoxThree1.addEventListener("dragstart", dragStart)
		}

		if (agent.classList.contains("dBox3B")) {
			const chunk = document.querySelector(".dBoxThree2")
			if (chunk.parentElement.dataset.dragTableField) chunkChecker(chunk)
			if (chunk.parentElement.childNodes[0]) chunk.parentElement.removeChild(chunk)
			dropManager.dBoxThree2Drop(e, agent)
			const dBoxThree2 = document.querySelector(".dBoxThree2")
			dBoxThree2.addEventListener("dragstart", dragStart)
		}

		if (agent.classList.contains("dBox2")) {
			const chunk = document.querySelector(".dBoxTwo1")
			if (chunk.parentElement.dataset.dragTableField) chunkChecker(chunk)
			if (chunk.parentElement.childNodes[0]) chunk.parentElement.removeChild(chunk)
			dropManager.dBoxTwo1Drop(e, agent)
			const dBoxTwo1 = document.querySelector(".dBoxTwo1")
			dBoxTwo1.addEventListener("dragstart", dragStart)
		}

		if (agent.classList.contains("dBox2B")) {
			const chunk = document.querySelector(".dBoxTwo2")
			if (chunk.parentElement.dataset.dragTableField) chunkChecker(chunk)
			if (chunk.parentElement.childNodes[0]) chunk.parentElement.removeChild(chunk)
			dropManager.dBoxTwo2Drop(e, agent)
			const dBoxTwo2 = document.querySelector(".dBoxTwo2")
			dBoxTwo2.addEventListener("dragstart", dragStart)
		}

		if (agent.classList.contains("dBox2C")) {
			const chunk = document.querySelector(".dBoxTwo3")
			if (chunk.parentElement.dataset.dragTableField) chunkChecker(chunk)
			if (chunk.parentElement.childNodes[0]) chunk.parentElement.removeChild(chunk)
			dropManager.dBoxTwo3Drop(e, agent)
			const dBoxTwo3 = document.querySelector(".dBoxTwo3")
			dBoxTwo3.addEventListener("dragstart", dragStart)
		}

		if (agent.classList.contains("dBox1")) {
			const chunk = document.querySelector(".dBoxOne1")
			if (chunk.parentElement.dataset.dragTableField) chunkChecker(chunk)
			if (chunk.parentElement.childNodes[0]) chunk.parentElement.removeChild(chunk)
			dropManager.dBoxOne1Drop(e)
			const dBoxOne1 = document.querySelector(".dBoxOne1")
			dBoxOne1.addEventListener("dragstart", dragStart)
		}

		if (agent.classList.contains("dBox1B")) {
			const chunk = document.querySelector(".dBoxOne2")
			if (chunk.parentElement.dataset.dragTableField) chunkChecker(chunk)
			if (chunk.parentElement.childNodes[0]) chunk.parentElement.removeChild(chunk)
			dropManager.dBoxOne2Drop(e)
			const dBoxOne2 = document.querySelector(".dBoxOne2")
			dBoxOne2.addEventListener("dragstart", dragStart)
		}

		if (agent.classList.contains("dBox1C")) {
			const chunk = document.querySelector(".dBoxOne3")
			if (chunk.parentElement.dataset.dragTableField) chunkChecker(chunk)
			if (chunk.parentElement.childNodes[0]) chunk.parentElement.removeChild(chunk)
			dropManager.dBoxOne3Drop(e)
			const dBoxOne3 = document.querySelector(".dBoxOne3")
			dBoxOne3.addEventListener("dragstart", dragStart)
		}

		if (agent.classList.contains("dBox1D")) {
			const chunk = document.querySelector(".dBoxOne4")
			if (chunk.parentElement.dataset.dragTableField) chunkChecker(chunk)
			if (chunk.parentElement.childNodes[0]) chunk.parentElement.removeChild(chunk)
			dropManager.dBoxOne4Drop(e)
			const dBoxOne4 = document.querySelector(".dBoxOne4")
			dBoxOne4.addEventListener("dragstart", dragStart)
		}
	}

	if (isdBoxEmpty()) {
		const ships = shipParser()
		const newPlayerBoard = logic.dgGameboard(ships)
		DOM.playerBoardFunction(newPlayerBoard)
		const playerGrid = document.querySelector(".playerGrid")
		playerGrid.classList.add("waiting")
		goBack()
	}
}

function bugFixer() {
	const dTable = document.querySelector(".dTable")
	const playerGrid = document.querySelector(".playerGrid")

	if (playerGrid.classList.contains("waiting")) return
	// the condition above avoided a bug
	const tchildren = [...dTable.children]
	tchildren.forEach((el) => {
		const tgrandchildren = [...el.children]
		tgrandchildren.forEach((elChildren) => {
			if (elChildren.classList.contains("drag-over")) elChildren.classList.remove("drag-over")
			if (elChildren.childNodes[0] && !elChildren.classList.contains("busy")) {
				cleaner(elChildren.childNodes[0], "add")
			}
			if (elChildren.childNodes[0] && elChildren.childNodes[0].classList.contains("hide")) {
				elChildren.childNodes[0].classList.remove("hide")
			}
		})
	})
	const hide = document.querySelectorAll(".hide")
	const hideList = [...hide]
	if (hideList[3]) hideList[3].classList.remove("hide")
}

function draggableShips() {
	const grids = document.querySelector(".grids")
	const dBox = document.createElement("div")
	dBox.classList.add("dBox")
	grids.appendChild(dBox)
	// ship length 4
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
	// first ship length 3
	const secondContainer = document.createElement("div")
	secondContainer.classList.add("secondContainer")
	const secondContainerDiv = document.createElement("div")
	secondContainerDiv.classList.add("relDiv3")
	const dBoxThree1 = document.createElement("div")
	dBoxThree1.classList.add("dBoxThree1")
	dBoxThree1.draggable = true
	for (let i = 0; i < 3; i += 1) {
		const dBoxThree = document.createElement("div")
		dBoxThree.dataset.dboxdiv = `${i}`
		dBoxThree.classList.add("dBox3")
		dBoxThree1.appendChild(dBoxThree)
	}
	dBoxThree1.addEventListener("dragstart", dragStart)
	secondContainer.appendChild(secondContainerDiv)
	secondContainerDiv.appendChild(dBoxThree1)
	dBox.appendChild(secondContainer)
	// second ship length 3
	const secondContainerDiv2 = document.createElement("div")
	secondContainerDiv2.classList.add("relDiv3B")
	const dBoxThree2 = document.createElement("div")
	dBoxThree2.classList.add("dBoxThree2")
	dBoxThree2.draggable = true
	for (let i = 0; i < 3; i += 1) {
		const dBoxThree = document.createElement("div")
		dBoxThree.dataset.dboxdiv = `${i}`
		dBoxThree.classList.add("dBox3B")
		dBoxThree2.appendChild(dBoxThree)
	}
	dBoxThree2.addEventListener("dragstart", dragStart)
	secondContainer.appendChild(secondContainerDiv2)
	secondContainerDiv2.appendChild(dBoxThree2)
	// first ship length 2
	const thirdContainer = document.createElement("div")
	thirdContainer.classList.add("thirdContainer")
	const thirdContainerDiv = document.createElement("div")
	thirdContainerDiv.classList.add("relDiv2")
	const dBoxTwo1 = document.createElement("div")
	dBoxTwo1.classList.add("dBoxTwo1")
	dBoxTwo1.draggable = true
	for (let i = 0; i < 2; i += 1) {
		const dBoxTwo = document.createElement("div")
		dBoxTwo.dataset.dboxdiv = `${i}`
		dBoxTwo.classList.add("dBox2")
		dBoxTwo1.appendChild(dBoxTwo)
	}
	dBoxTwo1.addEventListener("dragstart", dragStart)
	thirdContainer.appendChild(thirdContainerDiv)
	thirdContainerDiv.appendChild(dBoxTwo1)
	dBox.appendChild(thirdContainer)
	// second ship length 2
	const thirdContainerDivB = document.createElement("div")
	thirdContainerDivB.classList.add("relDiv2B")
	const dBoxTwo2 = document.createElement("div")
	dBoxTwo2.classList.add("dBoxTwo2")
	dBoxTwo2.draggable = true
	for (let i = 0; i < 2; i += 1) {
		const dBoxTwo = document.createElement("div")
		dBoxTwo.dataset.dboxdiv = `${i}`
		dBoxTwo.classList.add("dBox2B")
		dBoxTwo2.appendChild(dBoxTwo)
	}
	dBoxTwo2.addEventListener("dragstart", dragStart)
	thirdContainer.appendChild(thirdContainerDivB)
	thirdContainerDivB.appendChild(dBoxTwo2)
	// third ship length 2
	const thirdContainerDivC = document.createElement("div")
	thirdContainerDivC.classList.add("relDiv2C")
	const dBoxTwo3 = document.createElement("div")
	dBoxTwo3.classList.add("dBoxTwo3")
	dBoxTwo3.draggable = true
	for (let i = 0; i < 2; i += 1) {
		const dBoxTwo = document.createElement("div")
		dBoxTwo.dataset.dboxdiv = `${i}`
		dBoxTwo.classList.add("dBox2C")
		dBoxTwo3.appendChild(dBoxTwo)
	}
	dBoxTwo3.addEventListener("dragstart", dragStart)
	thirdContainer.appendChild(thirdContainerDivC)
	thirdContainerDivC.appendChild(dBoxTwo3)
	// first ship length 1
	const fourthContainer = document.createElement("div")
	fourthContainer.classList.add("fourthContainer")
	const fourthContainerDiv = document.createElement("div")
	fourthContainerDiv.classList.add("relDiv1")
	const dBoxOne1 = document.createElement("div")
	dBoxOne1.classList.add("dBoxOne1")
	dBoxOne1.draggable = true
	const one = document.createElement("div")
	one.dataset.dboxdiv = "0"
	one.classList.add("dBox1")
	dBoxOne1.appendChild(one)
	dBoxOne1.addEventListener("dragstart", dragStart)
	fourthContainer.appendChild(fourthContainerDiv)
	fourthContainerDiv.appendChild(dBoxOne1)
	dBox.appendChild(fourthContainer)
	// second ship length 1
	const fourthContainerDiv1 = document.createElement("div")
	fourthContainerDiv1.classList.add("relDiv1B")
	const dBoxOne2 = document.createElement("div")
	dBoxOne2.classList.add("dBoxOne2")
	dBoxOne2.draggable = true
	const two = document.createElement("div")
	two.dataset.dboxdiv = "0"
	two.classList.add("dBox1B")
	dBoxOne2.appendChild(two)
	dBoxOne2.addEventListener("dragstart", dragStart)
	fourthContainer.appendChild(fourthContainerDiv1)
	fourthContainerDiv1.appendChild(dBoxOne2)
	// third ship length 1
	const fourthContainerDiv2 = document.createElement("div")
	fourthContainerDiv2.classList.add("relDiv1C")
	const dBoxOne3 = document.createElement("div")
	dBoxOne3.classList.add("dBoxOne3")
	dBoxOne3.draggable = true
	const Three = document.createElement("div")
	Three.dataset.dboxdiv = "0"
	Three.classList.add("dBox1C")
	dBoxOne3.appendChild(Three)
	dBoxOne3.addEventListener("dragstart", dragStart)
	fourthContainer.appendChild(fourthContainerDiv2)
	fourthContainerDiv2.appendChild(dBoxOne3)
	// forth ship length 1
	const fourthContainerDiv3 = document.createElement("div")
	fourthContainerDiv3.classList.add("relDiv1D")
	const dBoxOne4 = document.createElement("div")
	dBoxOne4.classList.add("dBoxOne4")
	dBoxOne4.draggable = true
	const Four = document.createElement("div")
	Four.dataset.dboxdiv = "0"
	Four.classList.add("dBox1D")
	dBoxOne4.appendChild(Four)
	dBoxOne4.addEventListener("dragstart", dragStart)
	fourthContainer.appendChild(fourthContainerDiv3)
	fourthContainerDiv3.appendChild(dBoxOne4)
}

function isdBoxEmpty() {
	let answer = null
	const relDiv = document.querySelector(".relDiv")
	const relDiv3 = document.querySelector(".relDiv3")
	const relDiv3B = document.querySelector(".relDiv3B")
	const relDiv2 = document.querySelector(".relDiv2")
	const relDiv2B = document.querySelector(".relDiv2B")
	const relDiv2C = document.querySelector(".relDiv2C")
	const relDiv1 = document.querySelector(".relDiv1")
	const relDiv1B = document.querySelector(".relDiv1B")
	const relDiv1C = document.querySelector(".relDiv1C")
	const relDiv1D = document.querySelector(".relDiv1D")
	if (
		relDiv.children.length === 0 &&
		relDiv3.children.length === 0 &&
		relDiv3B.children.length === 0 &&
		relDiv2.children.length === 0 &&
		relDiv2B.children.length === 0 &&
		relDiv2C.children.length === 0 &&
		relDiv1.children.length === 0 &&
		relDiv1B.children.length === 0 &&
		relDiv1C.children.length === 0 &&
		relDiv1D.children.length === 0
	) {
		answer = true
	} else {
		answer = false
	}
	return answer
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

	const oldGridOption1Icon = document.querySelector(".gridOption1Icon")
	oldGridOption1Icon.addEventListener("click", goBack)

	const gridOption2 = document.querySelector(".gridOption2")
	const oldGridOption2Icon = document.querySelector(".gridOption2Icon")
	gridOption2.removeChild(oldGridOption2Icon)
	const gridOption2Icon = new Image()
	gridOption2Icon.classList.add("newGridOption2Icon")
	gridOption2Icon.src = customiseIcon2
	gridOption2.appendChild(gridOption2Icon)

	title1.innerText = "Your ships"
	title2.innerText = "Your grid"
}

function goBack() {
	const dBox = document.querySelector(".dBox")
	dBox.parentElement.removeChild(dBox)
	const dropTableContainer = document.querySelector(".dropTableContainer")
	dropTableContainer.parentElement.removeChild(dropTableContainer)
	const playerGridContainer = document.querySelector(".playerGridContainer")
	playerGridContainer.classList.remove("hide")
	const opponentGridContainer = document.querySelector(".opponentGridContainer")
	opponentGridContainer.classList.remove("hide")
	const playButtonContainer = document.querySelector(".playButtonContainer")
	playButtonContainer.classList.remove("hide")
	const newGridOption2Icon = document.querySelector(".newGridOption2Icon")
	newGridOption2Icon.parentElement.removeChild(newGridOption2Icon)
	const title1 = document.querySelector(".title1")
	const title2 = document.querySelector(".title2")
	title1.innerText = "Your grid"
	title2.innerText = "Opponent's grid"

	const gridOption2 = document.querySelector(".gridOption2")
	const gridOption2Icon = new Image()
	gridOption2Icon.classList.add("gridOption2Icon")
	gridOption2Icon.setAttribute("title", "customize positions")
	gridOption2Icon.src = customiseIcon
	gridOption2Icon.addEventListener("click", dragDrop)
	gridOption2.appendChild(gridOption2Icon)
}

// parses all ships on the drop table
function shipParser() {
	const shipList = []
	const dTable = document.querySelector(".dTable")
	for (let i = 0; i < 10; i += 1) {
		for (let j = 0; j < 10; j += 1) {
			if (dTable.children[0].children[0].children) {
				const ship = dTable.children[i].children[j].children[0]
				let selectedShip = null
				if (ship !== undefined) {
					if (ship.classList.contains("dBoxFour")) {
						if (!ship.classList.contains("v4")) {
							selectedShip = [
								[i, j],
								[i, j + 1],
								[i, j + 2],
								[i, j + 3],
							]
						} else {
							selectedShip = [
								[i, j],
								[i + 1, j],
								[i + 2, j],
								[i + 3, j],
							]
						}
						shipList.push(selectedShip)
					}

					if (ship.classList.contains("dBoxThree1")) {
						if (!ship.classList.contains("v3")) {
							selectedShip = [
								[i, j],
								[i, j + 1],
								[i, j + 2],
							]
						} else {
							selectedShip = [
								[i, j],
								[i + 1, j],
								[i + 2, j],
							]
						}
						shipList.push(selectedShip)
					}

					if (ship.classList.contains("dBoxThree2")) {
						if (!ship.classList.contains("v3")) {
							selectedShip = [
								[i, j],
								[i, j + 1],
								[i, j + 2],
							]
						} else {
							selectedShip = [
								[i, j],
								[i + 1, j],
								[i + 2, j],
							]
						}
						shipList.push(selectedShip)
					}

					if (ship.classList.contains("dBoxTwo1")) {
						if (!ship.classList.contains("v2")) {
							selectedShip = [
								[i, j],
								[i, j + 1],
							]
						} else {
							selectedShip = [
								[i, j],
								[i + 1, j],
							]
						}
						shipList.push(selectedShip)
					}

					if (ship.classList.contains("dBoxTwo2")) {
						if (!ship.classList.contains("v2")) {
							selectedShip = [
								[i, j],
								[i, j + 1],
							]
						} else {
							selectedShip = [
								[i, j],
								[i + 1, j],
							]
						}
						shipList.push(selectedShip)
					}

					if (ship.classList.contains("dBoxTwo3")) {
						if (!ship.classList.contains("v2")) {
							selectedShip = [
								[i, j],
								[i, j + 1],
							]
						} else {
							selectedShip = [
								[i, j],
								[i + 1, j],
							]
						}
						shipList.push(selectedShip)
					}

					if (ship.classList.contains("dBoxOne1")) {
						selectedShip = [[i, j]]
						shipList.push(selectedShip)
					}
					if (ship.classList.contains("dBoxOne2")) {
						selectedShip = [[i, j]]
						shipList.push(selectedShip)
					}
					if (ship.classList.contains("dBoxOne3")) {
						selectedShip = [[i, j]]
						shipList.push(selectedShip)
					}
					if (ship.classList.contains("dBoxOne4")) {
						selectedShip = [[i, j]]
						shipList.push(selectedShip)
					}
				}
			}
		}
	}
	// Sort the array in descending order
	const result = shipList.sort((a, b) => b.length - a.length)
	return result
}
