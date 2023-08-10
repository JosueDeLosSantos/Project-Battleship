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
			if (rowNum< 7) {
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
	}
}