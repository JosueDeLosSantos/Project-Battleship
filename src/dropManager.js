import shipToggle from "./shipToggle"

export function dBoxFourDrop(e, coordinate, agent) {

	if(!agent.classList.contains("v")){
		if (agent.dataset.dboxdiv === "0") {
			if (coordinate < 7) {
				e.target.parentElement.children[coordinate].classList.remove("drag-over")
				e.target.parentElement.children[coordinate + 1].classList.remove("drag-over")
				e.target.parentElement.children[coordinate + 2].classList.remove("drag-over")
				e.target.parentElement.children[coordinate + 3].classList.remove("drag-over")
				e.target.parentElement.children[coordinate].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = e.target.parentElement.children[coordinate];
				dBoxFour.addEventListener("click", () => {shipToggle(tag)})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox4")
					dBoxFour.appendChild(dBoxFourBox)
				}
				e.target.parentElement.children[coordinate].appendChild(dBoxFour)
				e.target.parentElement.children[coordinate + 1].classList.add("busy")
				e.target.parentElement.children[coordinate + 2].classList.add("busy")
				e.target.parentElement.children[coordinate + 3].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "1") {
			if (coordinate < 8 && coordinate > 0) {
				e.target.parentElement.children[coordinate - 1].classList.remove("drag-over")
				e.target.parentElement.children[coordinate].classList.remove("drag-over")
				e.target.parentElement.children[coordinate + 1].classList.remove("drag-over")
				e.target.parentElement.children[coordinate + 2].classList.remove("drag-over")
				e.target.parentElement.children[coordinate - 1].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = e.target.parentElement.children[coordinate - 1];
				dBoxFour.addEventListener("click", () => {shipToggle(tag)})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox4")
					dBoxFour.appendChild(dBoxFourBox)
				}
				e.target.parentElement.children[coordinate - 1].appendChild(dBoxFour)
				e.target.parentElement.children[coordinate].classList.add("busy")
				e.target.parentElement.children[coordinate + 1].classList.add("busy")
				e.target.parentElement.children[coordinate + 2].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "2") {
			if (coordinate < 9 && coordinate > 1) {
				e.target.parentElement.children[coordinate - 2].classList.remove("drag-over")
				e.target.parentElement.children[coordinate - 1].classList.remove("drag-over")
				e.target.parentElement.children[coordinate].classList.remove("drag-over")
				e.target.parentElement.children[coordinate + 1].classList.remove("drag-over")
				e.target.parentElement.children[coordinate - 2].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = e.target.parentElement.children[coordinate - 2];
				dBoxFour.addEventListener("click", () => {shipToggle(tag)})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox4")
					dBoxFour.appendChild(dBoxFourBox)
				}
				e.target.parentElement.children[coordinate - 2].appendChild(dBoxFour)
				e.target.parentElement.children[coordinate - 1].classList.add("busy")
				e.target.parentElement.children[coordinate].classList.add("busy")
				e.target.parentElement.children[coordinate + 1].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "3") {
			if (coordinate < 10 && coordinate > 2) {
				e.target.parentElement.children[coordinate - 3].classList.remove("drag-over")
				e.target.parentElement.children[coordinate - 2].classList.remove("drag-over")
				e.target.parentElement.children[coordinate - 1].classList.remove("drag-over")
				e.target.parentElement.children[coordinate].classList.remove("drag-over")
				e.target.parentElement.children[coordinate - 3].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = e.target.parentElement.children[coordinate - 3];
				dBoxFour.addEventListener("click", () => {shipToggle(tag)})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox4")
					dBoxFour.appendChild(dBoxFourBox)
				}
				e.target.parentElement.children[coordinate - 3].appendChild(dBoxFour)
				e.target.parentElement.children[coordinate - 2].classList.add("busy")
				e.target.parentElement.children[coordinate - 1].classList.add("busy")
				e.target.parentElement.children[coordinate].classList.add("busy")
			}
		}
	} 
	
	if(agent.classList.contains("v")){
		const rowNum = +e.target.dataset.dragTableField.split(",")[0]
		const colNum = +e.target.dataset.dragTableField.split(",")[1]
		const twin = e.target.parentElement.parentElement.children

		if (agent.dataset.dboxdiv === "0") {
			if (rowNum < 7) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")
				twin[rowNum + 2].children[colNum].classList.remove("drag-over")
				twin[rowNum + 3].children[colNum].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxFour = document.createElement("div")
				const tag = twin[rowNum].children[colNum];
				dBoxFour.addEventListener("click", () => {shipToggle(tag)})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.classList.add("v4")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox4")
					dBoxFourBox.classList.add("v")
					dBoxFour.appendChild(dBoxFourBox)
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
				const tag = twin[rowNum - 1].children[colNum];
				dBoxFour.addEventListener("click", () => {shipToggle(tag)})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.classList.add("v4")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox4")
					dBoxFourBox.classList.add("v")
					dBoxFour.appendChild(dBoxFourBox)
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
				const tag = twin[rowNum - 2].children[colNum];
				dBoxFour.addEventListener("click", () => {shipToggle(tag)})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.classList.add("v4")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox4")
					dBoxFourBox.classList.add("v")
					dBoxFour.appendChild(dBoxFourBox)
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
				const tag = twin[rowNum - 3].children[colNum];
				dBoxFour.addEventListener("click", () => {shipToggle(tag)})
				dBoxFour.classList.add("dBoxFour")
				dBoxFour.classList.add("v4")
				dBoxFour.style.border = "none"
				dBoxFour.draggable = true
				for (let i = 0; i < 4; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox4")
					dBoxFourBox.classList.add("v")
					dBoxFour.appendChild(dBoxFourBox)
				}
				twin[rowNum - 3].children[colNum].appendChild(dBoxFour)
				twin[rowNum - 2].children[colNum].classList.add("busy")
				twin[rowNum - 1].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}
}

export function dBoxThree1Drop(e, coordinate, agent) {
	if(!agent.classList.contains("v")){
		if (agent.dataset.dboxdiv === "0") {
			if (coordinate < 8) {
				e.target.parentElement.children[coordinate].classList.remove("drag-over")
				e.target.parentElement.children[coordinate + 1].classList.remove("drag-over")
				e.target.parentElement.children[coordinate + 2].classList.remove("drag-over")
				e.target.parentElement.children[coordinate].classList.add("busy")
				const dBoxThree1 = document.createElement("div")
				const tag = e.target.parentElement.children[coordinate];
				dBoxThree1.addEventListener("click", () => {shipToggle(tag)})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox3")
					dBoxThree1.appendChild(dBoxFourBox)
				}
				e.target.parentElement.children[coordinate].appendChild(dBoxThree1)
				e.target.parentElement.children[coordinate + 1].classList.add("busy")
				e.target.parentElement.children[coordinate + 2].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "1") {
			if (coordinate < 9 && coordinate > 0) {
				e.target.parentElement.children[coordinate - 1].classList.remove("drag-over")
				e.target.parentElement.children[coordinate].classList.remove("drag-over")
				e.target.parentElement.children[coordinate + 1].classList.remove("drag-over")
				e.target.parentElement.children[coordinate - 1].classList.add("busy")
				const dBoxThree1 = document.createElement("div")
				const tag = e.target.parentElement.children[coordinate - 1];
				dBoxThree1.addEventListener("click", () => {shipToggle(tag)})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox3")
					dBoxThree1.appendChild(dBoxFourBox)
				}
				e.target.parentElement.children[coordinate - 1].appendChild(dBoxThree1)
				e.target.parentElement.children[coordinate].classList.add("busy")
				e.target.parentElement.children[coordinate + 1].classList.add("busy")
			}
		}
		if (agent.dataset.dboxdiv === "2") {
			if (coordinate < 10 && coordinate > 1) {
				e.target.parentElement.children[coordinate - 2].classList.remove("drag-over")
				e.target.parentElement.children[coordinate - 1].classList.remove("drag-over")
				e.target.parentElement.children[coordinate].classList.remove("drag-over")
				e.target.parentElement.children[coordinate - 2].classList.add("busy")
				const dBoxThree1 = document.createElement("div")
				const tag = e.target.parentElement.children[coordinate - 2];
				dBoxThree1.addEventListener("click", () => {shipToggle(tag)})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox3")
					dBoxThree1.appendChild(dBoxFourBox)
				}
				e.target.parentElement.children[coordinate - 2].appendChild(dBoxThree1)
				e.target.parentElement.children[coordinate - 1].classList.add("busy")
				e.target.parentElement.children[coordinate].classList.add("busy")
			}
		}
	} 

	if(agent.classList.contains("v")){
		const rowNum = +e.target.dataset.dragTableField.split(",")[0]
		const colNum = +e.target.dataset.dragTableField.split(",")[1]
		const twin = e.target.parentElement.parentElement.children

		if (agent.dataset.dboxdiv === "0") {
			if (rowNum < 8) {
				twin[rowNum].children[colNum].classList.remove("drag-over")
				twin[rowNum + 1].children[colNum].classList.remove("drag-over")
				twin[rowNum + 2].children[colNum].classList.remove("drag-over")

				twin[rowNum].children[colNum].classList.add("busy")
				const dBoxThree1 = document.createElement("div")
				const tag = twin[rowNum].children[colNum];
				dBoxThree1.addEventListener("click", () => {shipToggle(tag)})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.classList.add("v3")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox3")
					dBoxFourBox.classList.add("v")
					dBoxThree1.appendChild(dBoxFourBox)
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
				const tag = twin[rowNum - 1].children[colNum];
				dBoxThree1.addEventListener("click", () => {shipToggle(tag)})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.classList.add("v3")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox3")
					dBoxFourBox.classList.add("v")
					dBoxThree1.appendChild(dBoxFourBox)
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
				const tag = twin[rowNum - 2].children[colNum];
				dBoxThree1.addEventListener("click", () => {shipToggle(tag)})
				dBoxThree1.classList.add("dBoxThree1")
				dBoxThree1.classList.add("v3")
				dBoxThree1.style.border = "none"
				dBoxThree1.draggable = true
				for (let i = 0; i < 3; i += 1) {
					const dBoxFourBox = document.createElement("div")
					dBoxFourBox.dataset.dboxdiv = `${i}`
					dBoxFourBox.classList.add("dBox3")
					dBoxFourBox.classList.add("v")
					dBoxThree1.appendChild(dBoxFourBox)
				}
				twin[rowNum - 2].children[colNum].appendChild(dBoxThree1)
				twin[rowNum - 1].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum].classList.add("busy")
			}
		}
	}
}