export default function cleaner(tag) {
	if (tag.children[0].classList.contains("dBoxFour")) {
		if (!tag.children[0].classList.contains("v4")) {
			tag.classList.remove("busy")
			tag.nextSibling.classList.remove("busy")
			tag.nextSibling.nextSibling.classList.remove("busy")
			tag.nextSibling.nextSibling.nextSibling.classList.remove("busy")
		} else {
			const rowNum = +tag.dataset.dragTableField.split(",")[0]
			const colNum = +tag.dataset.dragTableField.split(",")[1]
			const twin = tag.parentElement.parentElement.children
			twin[rowNum].children[colNum].classList.remove("busy")
			twin[rowNum + 1].children[colNum].classList.remove("busy")
			twin[rowNum + 2].children[colNum].classList.remove("busy")
			twin[rowNum + 3].children[colNum].classList.remove("busy")
		}
	}

	if (tag.children[0].classList.contains("dBoxThree1")) {
		if (!tag.children[0].classList.contains("v3")) {
			tag.classList.remove("busy")
			tag.nextSibling.classList.remove("busy")
			tag.nextSibling.nextSibling.classList.remove("busy")
		} else {
			const rowNum = +tag.dataset.dragTableField.split(",")[0]
			const colNum = +tag.dataset.dragTableField.split(",")[1]
			const twin = tag.parentElement.parentElement.children
			twin[rowNum].children[colNum].classList.remove("busy")
			twin[rowNum + 1].children[colNum].classList.remove("busy")
			twin[rowNum + 2].children[colNum].classList.remove("busy")
		}
	}
}
