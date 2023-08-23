import shipToggle from "./shipToggle"

export function dBoxFourDrop(e, agent) {
	let rowNum = null
	let colNum = null
	let twin = null

	if (e.target.parentElement.hasAttribute("draggable")) {
		rowNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[0]
		colNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[1]		
		twin = e.target.parentElement.parentElement.parentElement.children
	} else {
		rowNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[0]:
		+e.target.parentElement.dataset.dragTableField.split(",")[0]

		colNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[1]:
		+e.target.parentElement.dataset.dragTableField.split(",")[1]

		twin = e.target.dataset.dragTableField ?
		e.target.parentElement.parentElement.children:
		e.target.parentElement.parentElement.parentElement.children
	}

	if (!agent.classList.contains("v")) {
		if (agent.dataset.dboxdiv === "0") {
			if (colNum < 7) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum + 1].classList.remove("drag-over")
				twin[rowNum].children[colNum + 2].classList.remove("drag-over")
				twin[rowNum].children[colNum + 3].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxFour.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox4")
					dBoxFour.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxFour)
				twin[rowNum].children[colNum + 1].classList.add("busy")
				twin[rowNum].children[colNum + 2].classList.add("busy")
				twin[rowNum].children[colNum + 3].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "1") {
			if (colNum < 8 && colNum > 0) {
				twin[rowNum].children[colNum - 1].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum + 1].classList.remove("drag-over")
				twin[rowNum].children[colNum + 2].classList.remove("drag-over")

				twin[rowNum].children[colNum - 1].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = twin[rowNum].children[colNum - 1]
				dBoxFour.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox4")
					dBoxFour.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum - 1].appendChild(dBoxFour)
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum + 1].classList.add("busy")
				twin[rowNum].children[colNum + 2].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "2") {
			if (colNum < 9 && colNum > 1) {
				twin[rowNum].children[colNum - 2].classList.remove("drag-over")
				twin[rowNum].children[colNum - 1].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum + 1].classList.remove("drag-over")

				twin[rowNum].children[colNum - 2].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = twin[rowNum].children[colNum - 2]
				dBoxFour.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox4")
					dBoxFour.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum - 2].appendChild(dBoxFour)
				twin[rowNum].children[colNum - 1].classList.add("busy")
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum + 1].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "3") {
			if (colNum < 10 && colNum > 2) {
				twin[rowNum].children[colNum - 3].classList.remove("drag-over")
				twin[rowNum].children[colNum - 2].classList.remove("drag-over")
				twin[rowNum].children[colNum - 1].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")

				twin[rowNum].children[colNum - 3].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = twin[rowNum].children[colNum - 3]
				dBoxFour.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox4")
					dBoxFour.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum - 3].appendChild(dBoxFour)
				twin[rowNum].children[colNum - 2].classList.add("busy")
				twin[rowNum].children[colNum - 1].classList.add("busy")
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}

	if (agent.classList.contains("v")) {

		if (agent.dataset.dboxdiv === "0") {
			if (rowNum < 7) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")
				twin[rowNum + 2].children[colNum].classList.remove("drag-over")
				twin[rowNum + 3].children[colNum].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxFour.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.classList.add("v4")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox4")
					dBoxbox.classList.add("v")
					dBoxFour.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxFour)
				twin[rowNum + 1].children[colNum].classList.add("busy")
				twin[rowNum + 2].children[colNum].classList.add("busy")
				twin[rowNum + 3].children[colNum].classList.add("busy")
			}
		}

		if (agent.dataset.dboxdiv === "1") {
			if (rowNum < 8 && rowNum > 0) {
				twin[rowNum - 1].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")
				twin[rowNum + 2].children[colNum].classList.remove("drag-over")

				twin[rowNum - 1].children[colNum].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = twin[rowNum - 1].children[colNum]
				dBoxFour.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.classList.add("v4")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox4")
					dBoxbox.classList.add("v")
					dBoxFour.appendChild(dBoxbox)
				}
				twin[rowNum - 1].children[colNum].appendChild(dBoxFour)
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum + 1].children[colNum].classList.add("busy")
				twin[rowNum + 2].children[colNum].classList.add("busy")
			}
		}

		if (agent.dataset.dboxdiv === "2") {
			if (rowNum < 9 && rowNum > 1) {
				twin[rowNum - 2].children[colNum].classList.remove("drag-over")
				twin[rowNum - 1].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")

				twin[rowNum - 2].children[colNum].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = twin[rowNum - 2].children[colNum]
				dBoxFour.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.classList.add("v4")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox4")
					dBoxbox.classList.add("v")
					dBoxFour.appendChild(dBoxbox)
				}
				twin[rowNum - 2].children[colNum].appendChild(dBoxFour)
				twin[rowNum - 1].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum + 1].children[colNum].classList.add("busy")
			}
		}

		if (agent.dataset.dboxdiv === "3") {
			if (rowNum < 10 && rowNum > 2) {
				twin[rowNum - 3].children[colNum].classList.remove("drag-over")
				twin[rowNum - 2].children[colNum].classList.remove("drag-over")
				twin[rowNum - 1].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")

				twin[rowNum - 3].children[colNum].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = twin[rowNum - 3].children[colNum]
				dBoxFour.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.classList.add("v4")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox4")
					dBoxbox.classList.add("v")
					dBoxFour.appendChild(dBoxbox)
				}
				twin[rowNum - 3].children[colNum].appendChild(dBoxFour)
				twin[rowNum - 2].children[colNum].classList.add("busy")
				twin[rowNum - 1].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}
}

export function dBoxThree1Drop(e, agent) {
	let rowNum = null
	let colNum = null
	let twin = null

	if (e.target.parentElement.hasAttribute("draggable")) {
		rowNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[0]
		colNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[1]
		twin = e.target.parentElement.parentElement.parentElement.children
	} else {
		rowNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[0]:
		+e.target.parentElement.dataset.dragTableField.split(",")[0]

		colNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[1]:
		+e.target.parentElement.dataset.dragTableField.split(",")[1]

		twin = e.target.dataset.dragTableField ?
		e.target.parentElement.parentElement.children:
		e.target.parentElement.parentElement.parentElement.children
	}

	if (!agent.classList.contains("v")) {
		if (agent.dataset.dboxdiv === "0") {
			if (colNum < 8) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum + 1].classList.remove("drag-over")
				twin[rowNum].children[colNum + 2].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxThree1 = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxThree1.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3")
					dBoxThree1.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxThree1)
				twin[rowNum].children[colNum + 1].classList.add("busy")
				twin[rowNum].children[colNum + 2].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "1") {
			if (colNum < 9 && colNum > 0) {
				twin[rowNum].children[colNum - 1].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum + 1].classList.remove("drag-over")
				
				twin[rowNum].children[colNum - 1].classList.add("busy")
				const dBoxThree1 = document.createElement("div")
				const tag = twin[rowNum].children[colNum - 1]
				dBoxThree1.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3")
					dBoxThree1.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum - 1].appendChild(dBoxThree1)
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum + 1].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "2") {
			if (colNum < 10 && colNum > 1) {
				twin[rowNum].children[colNum - 2].classList.remove("drag-over")
				twin[rowNum].children[colNum - 1].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")

				twin[rowNum].children[colNum - 2].classList.add("busy")
				const dBoxThree1 = document.createElement("div")
				const tag = twin[rowNum].children[colNum - 2]
				dBoxThree1.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3")
					dBoxThree1.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum - 2].appendChild(dBoxThree1)
				twin[rowNum].children[colNum - 1].classList.add("busy")
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}

	if (agent.classList.contains("v")) {
		if (agent.dataset.dboxdiv === "0") {
			if (rowNum < 8) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")
				twin[rowNum + 2].children[colNum].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxThree1 = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxThree1.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.classList.add("v3")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3")
					dBoxbox.classList.add("v")
					dBoxThree1.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxThree1)
				twin[rowNum + 1].children[colNum].classList.add("busy")
				twin[rowNum + 2].children[colNum].classList.add("busy")
			}
		}

		if (agent.dataset.dboxdiv === "1") {
			if (rowNum < 9 && rowNum > 0) {
				twin[rowNum - 1].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")

				twin[rowNum - 1].children[colNum].classList.add("busy")
				const dBoxThree1 = document.createElement("div")
				const tag = twin[rowNum - 1].children[colNum]
				dBoxThree1.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.classList.add("v3")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3")
					dBoxbox.classList.add("v")
					dBoxThree1.appendChild(dBoxbox)
				}
				twin[rowNum - 1].children[colNum].appendChild(dBoxThree1)
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum + 1].children[colNum].classList.add("busy")
			}
		}

		if (agent.dataset.dboxdiv === "2") {
			if (rowNum < 10 && rowNum > 1) {
				twin[rowNum - 2].children[colNum].classList.remove("drag-over")
				twin[rowNum - 1].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")

				twin[rowNum - 2].children[colNum].classList.add("busy")
				const dBoxThree1 = document.createElement("div")
				const tag = twin[rowNum - 2].children[colNum]
				dBoxThree1.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.classList.add("v3")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3")
					dBoxbox.classList.add("v")
					dBoxThree1.appendChild(dBoxbox)
				}
				twin[rowNum - 2].children[colNum].appendChild(dBoxThree1)
				twin[rowNum - 1].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}
}

export function dBoxThree2Drop(e, agent) {
	let rowNum = null
	let colNum = null
	let twin = null

	if (e.target.parentElement.hasAttribute("draggable")) {
		rowNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[0]
		colNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[1]
		twin = e.target.parentElement.parentElement.parentElement.children
	} else {
		rowNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[0]:
		+e.target.parentElement.dataset.dragTableField.split(",")[0]

		colNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[1]:
		+e.target.parentElement.dataset.dragTableField.split(",")[1]

		twin = e.target.dataset.dragTableField ?
		e.target.parentElement.parentElement.children:
		e.target.parentElement.parentElement.parentElement.children
	}

	if (!agent.classList.contains("v")) {
		if (agent.dataset.dboxdiv === "0") {
			if (colNum < 8) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum + 1].classList.remove("drag-over")
				twin[rowNum].children[colNum + 2].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxThree2 = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxThree2.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree2.classList.add("dBoxThree2")
				dBoxThree2.style.border = "none"
				dBoxThree2.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3B")
					dBoxThree2.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxThree2)
				twin[rowNum].children[colNum + 1].classList.add("busy")
				twin[rowNum].children[colNum + 2].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "1") {
			if (colNum < 9 && colNum > 0) {
				twin[rowNum].children[colNum - 1].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum + 1].classList.remove("drag-over")
				
				twin[rowNum].children[colNum - 1].classList.add("busy")
				const dBoxThree2 = document.createElement("div")
				const tag = twin[rowNum].children[colNum - 1]
				dBoxThree2.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree2.classList.add("dBoxThree2")
				dBoxThree2.style.border = "none"
				dBoxThree2.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3B")
					dBoxThree2.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum - 1].appendChild(dBoxThree2)
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum + 1].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "2") {
			if (colNum < 10 && colNum > 1) {
				twin[rowNum].children[colNum - 2].classList.remove("drag-over")
				twin[rowNum].children[colNum - 1].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")

				twin[rowNum].children[colNum - 2].classList.add("busy")
				const dBoxThree2 = document.createElement("div")
				const tag = twin[rowNum].children[colNum - 2]
				dBoxThree2.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree2.classList.add("dBoxThree2")
				dBoxThree2.style.border = "none"
				dBoxThree2.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3B")
					dBoxThree2.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum - 2].appendChild(dBoxThree2)
				twin[rowNum].children[colNum - 1].classList.add("busy")
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}

	if (agent.classList.contains("v")) {
		if (agent.dataset.dboxdiv === "0") {
			if (rowNum < 8) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")
				twin[rowNum + 2].children[colNum].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxThree2 = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxThree2.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree2.classList.add("dBoxThree2")
				dBoxThree2.classList.add("v3")
				dBoxThree2.style.border = "none"
				dBoxThree2.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3B")
					dBoxbox.classList.add("v")
					dBoxThree2.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxThree2)
				twin[rowNum + 1].children[colNum].classList.add("busy")
				twin[rowNum + 2].children[colNum].classList.add("busy")
			}
		}

		if (agent.dataset.dboxdiv === "1") {
			if (rowNum < 9 && rowNum > 0) {
				twin[rowNum - 1].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")

				twin[rowNum - 1].children[colNum].classList.add("busy")
				const dBoxThree2 = document.createElement("div")
				const tag = twin[rowNum - 1].children[colNum]
				dBoxThree2.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree2.classList.add("dBoxThree2")
				dBoxThree2.classList.add("v3")
				dBoxThree2.style.border = "none"
				dBoxThree2.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3B")
					dBoxbox.classList.add("v")
					dBoxThree2.appendChild(dBoxbox)
				}
				twin[rowNum - 1].children[colNum].appendChild(dBoxThree2)
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum + 1].children[colNum].classList.add("busy")
			}
		}

		if (agent.dataset.dboxdiv === "2") {
			if (rowNum < 10 && rowNum > 1) {
				twin[rowNum - 2].children[colNum].classList.remove("drag-over")
				twin[rowNum - 1].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")

				twin[rowNum - 2].children[colNum].classList.add("busy")
				const dBoxThree2 = document.createElement("div")
				const tag = twin[rowNum - 2].children[colNum]
				dBoxThree2.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxThree2.classList.add("dBoxThree2")
				dBoxThree2.classList.add("v3")
				dBoxThree2.style.border = "none"
				dBoxThree2.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox3B")
					dBoxbox.classList.add("v")
					dBoxThree2.appendChild(dBoxbox)
				}
				twin[rowNum - 2].children[colNum].appendChild(dBoxThree2)
				twin[rowNum - 1].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}
}

export function dBoxTwo1Drop(e, agent) {
	let rowNum = null
	let colNum = null
	let twin = null

	if (e.target.parentElement.hasAttribute("draggable")) {
		rowNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[0]
		colNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[1]
		twin = e.target.parentElement.parentElement.parentElement.children
	} else {
		rowNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[0]:
		+e.target.parentElement.dataset.dragTableField.split(",")[0]

		colNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[1]:
		+e.target.parentElement.dataset.dragTableField.split(",")[1]

		twin = e.target.dataset.dragTableField ?
		e.target.parentElement.parentElement.children:
		e.target.parentElement.parentElement.parentElement.children
	}

	if (!agent.classList.contains("v")) {
		if (agent.dataset.dboxdiv === "0") {
			if (colNum < 9) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum + 1].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxTwo1 = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxTwo1.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo1.classList.add("dBoxTwo1")
				dBoxTwo1.style.border = "none"
				dBoxTwo1.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2")
					dBoxTwo1.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxTwo1)
				twin[rowNum].children[colNum + 1].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "1") {
			if (colNum < 10 && colNum > 0) {
				twin[rowNum].children[colNum - 1].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")
				
				twin[rowNum].children[colNum - 1].classList.add("busy")
				const dBoxTwo1 = document.createElement("div")
				const tag = twin[rowNum].children[colNum - 1]
				dBoxTwo1.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo1.classList.add("dBoxTwo1")
				dBoxTwo1.style.border = "none"
				dBoxTwo1.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2")
					dBoxTwo1.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum - 1].appendChild(dBoxTwo1)
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}

	if (agent.classList.contains("v")) {
		if (agent.dataset.dboxdiv === "0") {
			if (rowNum < 9) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxTwo1 = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxTwo1.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo1.classList.add("dBoxTwo1")
				dBoxTwo1.classList.add("v2")
				dBoxTwo1.style.border = "none"
				dBoxTwo1.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2")
					dBoxbox.classList.add("v")
					dBoxTwo1.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxTwo1)
				twin[rowNum + 1].children[colNum].classList.add("busy")
			}
		}

		if (agent.dataset.dboxdiv === "1") {
			if (rowNum < 10 && rowNum > 0) {
				twin[rowNum - 1].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")

				twin[rowNum - 1].children[colNum].classList.add("busy")
				const dBoxTwo1 = document.createElement("div")
				const tag = twin[rowNum - 1].children[colNum]
				dBoxTwo1.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo1.classList.add("dBoxTwo1")
				dBoxTwo1.classList.add("v2")
				dBoxTwo1.style.border = "none"
				dBoxTwo1.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2")
					dBoxbox.classList.add("v")
					dBoxTwo1.appendChild(dBoxbox)
				}
				twin[rowNum - 1].children[colNum].appendChild(dBoxTwo1)
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}
}

export function dBoxTwo2Drop(e, agent) {
	let rowNum = null
	let colNum = null
	let twin = null

	if (e.target.parentElement.hasAttribute("draggable")) {
		rowNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[0]
		colNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[1]
		twin = e.target.parentElement.parentElement.parentElement.children
	} else {
		rowNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[0]:
		+e.target.parentElement.dataset.dragTableField.split(",")[0]

		colNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[1]:
		+e.target.parentElement.dataset.dragTableField.split(",")[1]

		twin = e.target.dataset.dragTableField ?
		e.target.parentElement.parentElement.children:
		e.target.parentElement.parentElement.parentElement.children
	}

	if (!agent.classList.contains("v")) {
		if (agent.dataset.dboxdiv === "0") {
			if (colNum < 9) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum + 1].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxTwo2 = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxTwo2.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo2.classList.add("dBoxTwo2")
				dBoxTwo2.style.border = "none"
				dBoxTwo2.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2B")
					dBoxTwo2.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxTwo2)
				twin[rowNum].children[colNum + 1].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "1") {
			if (colNum < 10 && colNum > 0) {
				twin[rowNum].children[colNum - 1].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")
				
				twin[rowNum].children[colNum - 1].classList.add("busy")
				const dBoxTwo2 = document.createElement("div")
				const tag = twin[rowNum].children[colNum - 1]
				dBoxTwo2.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo2.classList.add("dBoxTwo2")
				dBoxTwo2.style.border = "none"
				dBoxTwo2.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2B")
					dBoxTwo2.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum - 1].appendChild(dBoxTwo2)
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}

	if (agent.classList.contains("v")) {
		if (agent.dataset.dboxdiv === "0") {
			if (rowNum < 9) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxTwo2 = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxTwo2.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo2.classList.add("dBoxTwo2")
				dBoxTwo2.classList.add("v2")
				dBoxTwo2.style.border = "none"
				dBoxTwo2.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2B")
					dBoxbox.classList.add("v")
					dBoxTwo2.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxTwo2)
				twin[rowNum + 1].children[colNum].classList.add("busy")
			}
		}

		if (agent.dataset.dboxdiv === "1") {
			if (rowNum < 10 && rowNum > 0) {
				twin[rowNum - 1].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")

				twin[rowNum - 1].children[colNum].classList.add("busy")
				const dBoxTwo2 = document.createElement("div")
				const tag = twin[rowNum - 1].children[colNum]
				dBoxTwo2.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo2.classList.add("dBoxTwo2")
				dBoxTwo2.classList.add("v2")
				dBoxTwo2.style.border = "none"
				dBoxTwo2.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2B")
					dBoxbox.classList.add("v")
					dBoxTwo2.appendChild(dBoxbox)
				}
				twin[rowNum - 1].children[colNum].appendChild(dBoxTwo2)
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}
}

export function dBoxTwo3Drop(e, agent) {
	let rowNum = null
	let colNum = null
	let twin = null

	if (e.target.parentElement.hasAttribute("draggable")) {
		rowNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[0]
		colNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[1]
		twin = e.target.parentElement.parentElement.parentElement.children
	} else {
		rowNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[0]:
		+e.target.parentElement.dataset.dragTableField.split(",")[0]

		colNum = e.target.dataset.dragTableField ? 
		+e.target.dataset.dragTableField.split(",")[1]:
		+e.target.parentElement.dataset.dragTableField.split(",")[1]

		twin = e.target.dataset.dragTableField ?
		e.target.parentElement.parentElement.children:
		e.target.parentElement.parentElement.parentElement.children
	}

	if (!agent.classList.contains("v")) {
		if (agent.dataset.dboxdiv === "0") {
			if (colNum < 9) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum + 1].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxTwo3 = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxTwo3.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo3.classList.add("dBoxTwo3")
				dBoxTwo3.style.border = "none"
				dBoxTwo3.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2C")
					dBoxTwo3.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxTwo3)
				twin[rowNum].children[colNum + 1].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "1") {
			if (colNum < 10 && colNum > 0) {
				twin[rowNum].children[colNum - 1].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")
				
				twin[rowNum].children[colNum - 1].classList.add("busy")
				const dBoxTwo3 = document.createElement("div")
				const tag = twin[rowNum].children[colNum - 1]
				dBoxTwo3.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo3.classList.add("dBoxTwo3")
				dBoxTwo3.style.border = "none"
				dBoxTwo3.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2C")
					dBoxTwo3.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum - 1].appendChild(dBoxTwo3)
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}

	if (agent.classList.contains("v")) {
		if (agent.dataset.dboxdiv === "0") {
			if (rowNum < 9) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxTwo3 = document.createElement("div")
				const tag = twin[rowNum].children[colNum]
				dBoxTwo3.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo3.classList.add("dBoxTwo3")
				dBoxTwo3.classList.add("v2")
				dBoxTwo3.style.border = "none"
				dBoxTwo3.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2C")
					dBoxbox.classList.add("v")
					dBoxTwo3.appendChild(dBoxbox)
				}
				twin[rowNum].children[colNum].appendChild(dBoxTwo3)
				twin[rowNum + 1].children[colNum].classList.add("busy")
			}
		}

		if (agent.dataset.dboxdiv === "1") {
			if (rowNum < 10 && rowNum > 0) {
				twin[rowNum - 1].children[colNum].classList.remove("drag-over")
				twin[rowNum].children[colNum].classList.remove("drag-over")

				twin[rowNum - 1].children[colNum].classList.add("busy")
				const dBoxTwo3 = document.createElement("div")
				const tag = twin[rowNum - 1].children[colNum]
				dBoxTwo3.addEventListener("click", () => {
					shipToggle(tag)
				})
				dBoxTwo3.classList.add("dBoxTwo3")
				dBoxTwo3.classList.add("v2")
				dBoxTwo3.style.border = "none"
				dBoxTwo3.draggable = true
				for (let i = 0; i < 2; i += 1) {
					const dBoxbox = document.createElement("div")
					dBoxbox.dataset.dboxdiv = `${i}`
					dBoxbox.classList.add("dBox2C")
					dBoxbox.classList.add("v")
					dBoxTwo3.appendChild(dBoxbox)
				}
				twin[rowNum - 1].children[colNum].appendChild(dBoxTwo3)
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}
}