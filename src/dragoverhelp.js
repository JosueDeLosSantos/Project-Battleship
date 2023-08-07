export function dragOverH(e, dBoxFour) {
    const first = +e.target.dataset.dragTableField.split(",")[1]

	if (dBoxFour.dataset.chunk) {
		if (dBoxFour.dataset.chunk === "0") {
			if (first < 7) {
				e.target.classList.add("drag-over")
				e.target.parentElement.children[first + 1].classList.add("drag-over")
				e.target.parentElement.children[first + 2].classList.add("drag-over")
				e.target.parentElement.children[first + 3].classList.add("drag-over")
			}
		}

		if (dBoxFour.dataset.chunk === "1") {
			if (first < 8 && first > 0) {
				e.target.parentElement.children[first - 1].classList.add("drag-over")
				e.target.parentElement.children[first].classList.add("drag-over")
				e.target.parentElement.children[first + 1].classList.add("drag-over")
				e.target.parentElement.children[first + 2].classList.add("drag-over")
			}
		}

		if (dBoxFour.dataset.chunk === "2") {
			if (first < 9 && first > 1) {
				e.target.parentElement.children[first - 2].classList.add("drag-over")
				e.target.parentElement.children[first - 1].classList.add("drag-over")
				e.target.parentElement.children[first].classList.add("drag-over")
				e.target.parentElement.children[first + 1].classList.add("drag-over")
			}
		}

		if (dBoxFour.dataset.chunk === "3") {
			if (first < 10 && first > 2) {
				e.target.parentElement.children[first - 3].classList.add("drag-over")
				e.target.parentElement.children[first - 2].classList.add("drag-over")
				e.target.parentElement.children[first - 1].classList.add("drag-over")
				e.target.parentElement.children[first].classList.add("drag-over")
			}
		}
	}
}

export function dragOverV(e, dBoxFour) {
	const rowNum = +e.target.dataset.dragTableField.split(",")[0]
	const colNum = +e.target.dataset.dragTableField.split(",")[1]
    const twin = e.target.parentElement.parentElement.children

    if (dBoxFour.dataset.chunk) {
        if (dBoxFour.dataset.chunk === "0") {
			if (rowNum < 7) {
				twin[rowNum].children[colNum].classList.add("drag-over")
				twin[rowNum + 1].children[colNum].classList.add("drag-over")
				twin[rowNum + 2].children[colNum].classList.add("drag-over")
				twin[rowNum + 3].children[colNum].classList.add("drag-over")
			}
		}
    }
}
