export default function dragLeaveHelp(e, dBox) {
	let rowNum = null
	let colNum = null
	let twin = null

	if (e.target.parentElement.hasAttribute("draggable")) {
		rowNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[0]
		colNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[1]
		twin = e.target.parentElement.parentElement.parentElement.children
	} else {
		rowNum = e.target.dataset.dragTableField
			? +e.target.dataset.dragTableField.split(",")[0]
			: +e.target.parentElement.dataset.dragTableField.split(",")[0]

		colNum = e.target.dataset.dragTableField
			? +e.target.dataset.dragTableField.split(",")[1]
			: +e.target.parentElement.dataset.dragTableField.split(",")[1]

		twin = e.target.dataset.dragTableField
			? e.target.parentElement.parentElement.children
			: e.target.parentElement.parentElement.parentElement.children
	}

	if (
		dBox.classList.contains("dBoxFour") &&
		!e.target.parentElement.hasAttribute("draggable") &&
		!dBox.classList.contains("v4")
	) {
		if (dBox.dataset.chunk) {
			if (dBox.dataset.chunk === "0") {
				if (colNum < 7) {
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum + 1].classList.remove("drag-over")
					twin[rowNum].children[colNum + 2].classList.remove("drag-over")
					twin[rowNum].children[colNum + 3].classList.remove("drag-over")
				}
			}

			if (dBox.dataset.chunk === "1") {
				if (colNum < 8 && colNum > 0) {
					twin[rowNum].children[colNum - 1].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum + 1].classList.remove("drag-over")
					twin[rowNum].children[colNum + 2].classList.remove("drag-over")
				}
			}

			if (dBox.dataset.chunk === "2") {
				if (colNum < 9 && colNum > 1) {
					twin[rowNum].children[colNum - 2].classList.remove("drag-over")
					twin[rowNum].children[colNum - 1].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum + 1].classList.remove("drag-over")
				}
			}

			if (dBox.dataset.chunk === "3") {
				if (colNum < 10 && colNum > 2) {
					twin[rowNum].children[colNum - 3].classList.remove("drag-over")
					twin[rowNum].children[colNum - 2].classList.remove("drag-over")
					twin[rowNum].children[colNum - 1].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
				}
			}
		}
	} else if (
		dBox.classList.contains("dBoxFour") &&
		!e.target.parentElement.hasAttribute("draggable") &&
		dBox.classList.contains("v4")
	) {
		if (dBox.dataset.chunk) {
			if (dBox.dataset.chunk === "0") {
				if (rowNum < 7) {
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum + 1].children[colNum].classList.remove("drag-over")
					twin[rowNum + 2].children[colNum].classList.remove("drag-over")
					twin[rowNum + 3].children[colNum].classList.remove("drag-over")
				}
			}
			if (dBox.dataset.chunk === "1") {
				if (rowNum < 8 && rowNum > 0) {
					twin[rowNum - 1].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum + 1].children[colNum].classList.remove("drag-over")
					twin[rowNum + 2].children[colNum].classList.remove("drag-over")
				}
			}
			if (dBox.dataset.chunk === "2") {
				if (rowNum < 9 && rowNum > 1) {
					twin[rowNum - 2].children[colNum].classList.remove("drag-over")
					twin[rowNum - 1].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum + 1].children[colNum].classList.remove("drag-over")
				}
			}
			if (dBox.dataset.chunk === "3") {
				if (rowNum < 10 && rowNum > 2) {
					twin[rowNum - 3].children[colNum].classList.remove("drag-over")
					twin[rowNum - 2].children[colNum].classList.remove("drag-over")
					twin[rowNum - 1].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
				}
			}
		}
	}

	if (
		(dBox.classList.contains("dBoxThree1") || dBox.classList.contains("dBoxThree2")) &&
		!e.target.parentElement.hasAttribute("draggable") &&
		!dBox.classList.contains("v3")
	) {
		if (dBox.dataset.chunk) {
			if (dBox.dataset.chunk === "0") {
				if (colNum < 8) {
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum + 1].classList.remove("drag-over")
					twin[rowNum].children[colNum + 2].classList.remove("drag-over")
				}
			}

			if (dBox.dataset.chunk === "1") {
				if (colNum < 9 && colNum > 0) {
					twin[rowNum].children[colNum - 1].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum + 1].classList.remove("drag-over")
				}
			}

			if (dBox.dataset.chunk === "2") {
				if (colNum < 10 && colNum > 1) {
					twin[rowNum].children[colNum - 2].classList.remove("drag-over")
					twin[rowNum].children[colNum - 1].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
				}
			}
		}
	} else if (
		(dBox.classList.contains("dBoxThree1") || dBox.classList.contains("dBoxThree2")) &&
		!e.target.parentElement.hasAttribute("draggable") &&
		dBox.classList.contains("v3")
	) {
		if (dBox.dataset.chunk) {
			if (dBox.dataset.chunk === "0") {
				if (rowNum < 8) {
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum + 1].children[colNum].classList.remove("drag-over")
					twin[rowNum + 2].children[colNum].classList.remove("drag-over")
				}
			}
			if (dBox.dataset.chunk === "1") {
				if (rowNum < 9 && rowNum > 0) {
					twin[rowNum - 1].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum + 1].children[colNum].classList.remove("drag-over")
				}
			}
			if (dBox.dataset.chunk === "2") {
				if (rowNum < 10 && rowNum > 1) {
					twin[rowNum - 2].children[colNum].classList.remove("drag-over")
					twin[rowNum - 1].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
				}
			}
		}
	}

	if (
		(dBox.classList.contains("dBoxTwo1") ||
			dBox.classList.contains("dBoxTwo2") ||
			dBox.classList.contains("dBoxTwo3")) &&
		!e.target.parentElement.hasAttribute("draggable") &&
		!dBox.classList.contains("v2")
	) {
		if (dBox.dataset.chunk) {
			if (dBox.dataset.chunk === "0") {
				if (colNum < 9) {
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum + 1].classList.remove("drag-over")
				}
			}

			if (dBox.dataset.chunk === "1") {
				if (colNum < 10 && colNum > 0) {
					twin[rowNum].children[colNum - 1].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
				}
			}
		}
	} else if (
		(dBox.classList.contains("dBoxTwo1") ||
			dBox.classList.contains("dBoxTwo2") ||
			dBox.classList.contains("dBoxTwo3")) &&
		!e.target.parentElement.hasAttribute("draggable") &&
		dBox.classList.contains("v2")
	) {
		if (dBox.dataset.chunk) {
			if (dBox.dataset.chunk === "0") {
				if (rowNum < 9) {
					twin[rowNum].children[colNum].classList.remove("drag-over")
					twin[rowNum + 1].children[colNum].classList.remove("drag-over")
				}
			}
			if (dBox.dataset.chunk === "1") {
				if (rowNum < 10 && rowNum > 0) {
					twin[rowNum - 1].children[colNum].classList.remove("drag-over")
					twin[rowNum].children[colNum].classList.remove("drag-over")
				}
			}
		}
	}
}
