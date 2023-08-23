export default function chunkChecker(chunk) {
	const rowNum = +chunk.parentElement.dataset.dragTableField.split(",")[0]
	const colNum = +chunk.parentElement.dataset.dragTableField.split(",")[1]
	const twin = chunk.parentElement.parentElement.parentElement.children

	if (chunk.classList.contains("dBoxFour")) {
		if (!chunk.classList.contains("v4")) {
			if (twin[rowNum].children[colNum].classList.contains("busy")) {
				twin[rowNum].children[colNum].classList.remove("busy")
			}
			if (twin[rowNum].children[colNum + 1].classList.contains("busy")) {
				twin[rowNum].children[colNum + 1].classList.remove("busy")
			}
			if (twin[rowNum].children[colNum + 2].classList.contains("busy")) {
				twin[rowNum].children[colNum + 2].classList.remove("busy")
			}
			if (twin[rowNum].children[colNum + 3].classList.contains("busy")) {
				twin[rowNum].children[colNum + 3].classList.remove("busy")
			}
		} else {
			if (twin[rowNum].children[colNum].classList.contains("busy")) {
				twin[rowNum].children[colNum].classList.remove("busy")
			}
			if (twin[rowNum + 1].children[colNum].classList.contains("busy")) {
				twin[rowNum + 1].children[colNum].classList.remove("busy")
			}
			if (twin[rowNum + 2].children[colNum].classList.contains("busy")) {
				twin[rowNum + 2].children[colNum].classList.remove("busy")
			}
			if (twin[rowNum + 3].children[colNum].classList.contains("busy")) {
				twin[rowNum + 3].children[colNum].classList.remove("busy")
			}
		}
	}

	if (chunk.classList.contains("dBoxThree1") || chunk.classList.contains("dBoxThree2")) {
		if (!chunk.classList.contains("v3")) {
			if (twin[rowNum].children[colNum].classList.contains("busy")) {
				twin[rowNum].children[colNum].classList.remove("busy")
			}
			if (twin[rowNum].children[colNum + 1].classList.contains("busy")) {
				twin[rowNum].children[colNum + 1].classList.remove("busy")
			}
			if (twin[rowNum].children[colNum + 2].classList.contains("busy")) {
				twin[rowNum].children[colNum + 2].classList.remove("busy")
			}
		} else {
			if (twin[rowNum].children[colNum].classList.contains("busy")) {
				twin[rowNum].children[colNum].classList.remove("busy")
			}
			if (twin[rowNum + 1].children[colNum].classList.contains("busy")) {
				twin[rowNum + 1].children[colNum].classList.remove("busy")
			}
			if (twin[rowNum + 2].children[colNum].classList.contains("busy")) {
				twin[rowNum + 2].children[colNum].classList.remove("busy")
			}
		}
	}

	if (
		chunk.classList.contains("dBoxTwo1") ||
		chunk.classList.contains("dBoxTwo2") ||
		chunk.classList.contains("dBoxTwo3")
	) {
		if (!chunk.classList.contains("v2")) {
			if (twin[rowNum].children[colNum].classList.contains("busy")) {
				twin[rowNum].children[colNum].classList.remove("busy")
			}
			if (twin[rowNum].children[colNum + 1].classList.contains("busy")) {
				twin[rowNum].children[colNum + 1].classList.remove("busy")
			}
		} else {
			if (twin[rowNum].children[colNum].classList.contains("busy")) {
				twin[rowNum].children[colNum].classList.remove("busy")
			}
			if (twin[rowNum + 1].children[colNum].classList.contains("busy")) {
				twin[rowNum + 1].children[colNum].classList.remove("busy")
			}
		}
	}
}
