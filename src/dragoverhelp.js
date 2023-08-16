import danger from "./danger"

export function dragOverH(e, dBox) {
	const first = e.target.parentElement.hasAttribute("draggable")
		? +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[1]
		: +e.target.dataset.dragTableField.split(",")[1]

	if (e.target.parentElement.hasAttribute("draggable")) {
		e.target.parentElement.classList.add("shipBanned")
		return
	}

	if (dBox.classList.contains("dBoxFour")) {
		if (dBox.dataset.chunk) {
			if (dBox.dataset.chunk === "0") {
				if (first < 7) {
					if (danger(e, dBox, dBox.dataset.chunk) !== null) {
						e.target.classList.add("drag-over")
						e.target.parentElement.children[first + 1].classList.add("drag-over")
						e.target.parentElement.children[first + 2].classList.add("drag-over")
						e.target.parentElement.children[first + 3].classList.add("drag-over")
					}
				}
			}

			if (dBox.dataset.chunk === "1") {
				if (first < 8 && first > 0) {
					if (danger(e, dBox, dBox.dataset.chunk) !== null) {
						e.target.parentElement.children[first - 1].classList.add("drag-over")
						e.target.parentElement.children[first].classList.add("drag-over")
						e.target.parentElement.children[first + 1].classList.add("drag-over")
						e.target.parentElement.children[first + 2].classList.add("drag-over")
					}
				}
			}

			if (dBox.dataset.chunk === "2") {
				if (first < 9 && first > 1) {
					if (danger(e, dBox, dBox.dataset.chunk) !== null) {
						e.target.parentElement.children[first - 2].classList.add("drag-over")
						e.target.parentElement.children[first - 1].classList.add("drag-over")
						e.target.parentElement.children[first].classList.add("drag-over")
						e.target.parentElement.children[first + 1].classList.add("drag-over")
					}
				}
			}

			if (dBox.dataset.chunk === "3") {
				if (first < 10 && first > 2) {
					if (danger(e, dBox, dBox.dataset.chunk) !== null) {
						e.target.parentElement.children[first - 3].classList.add("drag-over")
						e.target.parentElement.children[first - 2].classList.add("drag-over")
						e.target.parentElement.children[first - 1].classList.add("drag-over")
						e.target.parentElement.children[first].classList.add("drag-over")
					}
				}
			}
		}
	}

	if (dBox.classList.contains("dBoxThree1")) {
		if (dBox.dataset.chunk) {
			if (dBox.dataset.chunk === "0") {
				if (first < 8) {
					e.target.classList.add("drag-over")
					e.target.parentElement.children[first + 1].classList.add("drag-over")
					e.target.parentElement.children[first + 2].classList.add("drag-over")
				}
			}

			if (dBox.dataset.chunk === "1") {
				if (first < 9 && first > 0) {
					e.target.parentElement.children[first - 1].classList.add("drag-over")
					e.target.parentElement.children[first].classList.add("drag-over")
					e.target.parentElement.children[first + 1].classList.add("drag-over")
				}
			}

			if (dBox.dataset.chunk === "2") {
				if (first < 10 && first > 1) {
					e.target.parentElement.children[first - 2].classList.add("drag-over")
					e.target.parentElement.children[first - 1].classList.add("drag-over")
					e.target.parentElement.children[first].classList.add("drag-over")
				}
			}
		}
	}
}

export function dragOverV(e, dBox) {
	const rowNum = +e.target.dataset.dragTableField.split(",")[0]
	const colNum = +e.target.dataset.dragTableField.split(",")[1]
	const twin = e.target.parentElement.parentElement.children

	if (dBox.classList.contains("dBoxFour")) {
		if (dBox.dataset.chunk) {
			if (dBox.dataset.chunk === "0") {
				if (rowNum < 7) {
					if (danger(e, dBox, dBox.dataset.chunk) !== null) {
						twin[rowNum].children[colNum].classList.add("drag-over")
						twin[rowNum + 1].children[colNum].classList.add("drag-over")
						twin[rowNum + 2].children[colNum].classList.add("drag-over")
						twin[rowNum + 3].children[colNum].classList.add("drag-over")
					}
				}
			}
			if (dBox.dataset.chunk === "1") {
				if (rowNum < 8 && rowNum > 0) {
					if (danger(e, dBox, dBox.dataset.chunk) !== null) {
						twin[rowNum - 1].children[colNum].classList.add("drag-over")
						twin[rowNum].children[colNum].classList.add("drag-over")
						twin[rowNum + 1].children[colNum].classList.add("drag-over")
						twin[rowNum + 2].children[colNum].classList.add("drag-over")
					}
				}
			}
			if (dBox.dataset.chunk === "2") {
				if (rowNum < 9 && rowNum > 1) {
					if (danger(e, dBox, dBox.dataset.chunk) !== null) {
						twin[rowNum - 2].children[colNum].classList.add("drag-over")
						twin[rowNum - 1].children[colNum].classList.add("drag-over")
						twin[rowNum].children[colNum].classList.add("drag-over")
						twin[rowNum + 1].children[colNum].classList.add("drag-over")
					}
				}
			}
			if (dBox.dataset.chunk === "3") {
				if (rowNum < 10 && rowNum > 2) {
					if (danger(e, dBox, dBox.dataset.chunk) !== null) {
						twin[rowNum - 3].children[colNum].classList.add("drag-over")
						twin[rowNum - 2].children[colNum].classList.add("drag-over")
						twin[rowNum - 1].children[colNum].classList.add("drag-over")
						twin[rowNum].children[colNum].classList.add("drag-over")
					}
				}
			}
		}
	}

	if (dBox.classList.contains("dBoxThree1")) {
		if (dBox.dataset.chunk) {
			if (dBox.dataset.chunk === "0") {
				if (rowNum < 8) {
					twin[rowNum].children[colNum].classList.add("drag-over")
					twin[rowNum + 1].children[colNum].classList.add("drag-over")
					twin[rowNum + 2].children[colNum].classList.add("drag-over")
				}
			}
			if (dBox.dataset.chunk === "1") {
				if (rowNum < 9 && rowNum > 0) {
					twin[rowNum - 1].children[colNum].classList.add("drag-over")
					twin[rowNum].children[colNum].classList.add("drag-over")
					twin[rowNum + 1].children[colNum].classList.add("drag-over")
				}
			}
			if (dBox.dataset.chunk === "2") {
				if (rowNum < 10 && rowNum > 1) {
					twin[rowNum - 2].children[colNum].classList.add("drag-over")
					twin[rowNum - 1].children[colNum].classList.add("drag-over")
					twin[rowNum].children[colNum].classList.add("drag-over")
				}
			}
		}
	}
}
