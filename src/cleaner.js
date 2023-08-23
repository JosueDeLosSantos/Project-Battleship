export default function cleaner(tag, action) {
	const rowNum = +tag.parentElement.dataset.dragTableField.split(",")[0]
	const colNum = +tag.parentElement.dataset.dragTableField.split(",")[1]
	const twin = tag.parentElement.parentElement.parentElement.children

	if (tag.classList.contains("dBoxFour")) {
		if (action === "remove") {
			if (!tag.classList.contains("v4")) {
				twin[rowNum].children[colNum].classList.remove("busy")
				twin[rowNum].children[colNum + 1].classList.remove("busy")
				twin[rowNum].children[colNum + 2].classList.remove("busy")
				twin[rowNum].children[colNum + 3].classList.remove("busy")
			} else {
				twin[rowNum].children[colNum].classList.remove("busy")
				twin[rowNum + 1].children[colNum].classList.remove("busy")
				twin[rowNum + 2].children[colNum].classList.remove("busy")
				twin[rowNum + 3].children[colNum].classList.remove("busy")
			}
		}

		if (action === "add") {
			if (!tag.classList.contains("v4")) {
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum + 1].classList.add("busy")
				twin[rowNum].children[colNum + 2].classList.add("busy")
				twin[rowNum].children[colNum + 3].classList.add("busy")
			} else {
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum + 1].children[colNum].classList.add("busy")
				twin[rowNum + 2].children[colNum].classList.add("busy")
				twin[rowNum + 3].children[colNum].classList.add("busy")
			}
		}
	}

	if (tag.classList.contains("dBoxThree1") || tag.classList.contains("dBoxThree2")) {
		if (action === "remove") {
			if (!tag.classList.contains("v3")) {
				twin[rowNum].children[colNum].classList.remove("busy")
				twin[rowNum].children[colNum + 1].classList.remove("busy")
				twin[rowNum].children[colNum + 2].classList.remove("busy")
			} else {
				twin[rowNum].children[colNum].classList.remove("busy")
				twin[rowNum + 1].children[colNum].classList.remove("busy")
				twin[rowNum + 2].children[colNum].classList.remove("busy")
			}
		}

		if (action === "add") {
			if (!tag.classList.contains("v3")) {
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum + 1].classList.add("busy")
				twin[rowNum].children[colNum + 2].classList.add("busy")
			} else {
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum + 1].children[colNum].classList.add("busy")
				twin[rowNum + 2].children[colNum].classList.add("busy")
			}
		}
	}

	if (
		tag.classList.contains("dBoxTwo1") ||
		tag.classList.contains("dBoxTwo2") ||
		tag.classList.contains("dBoxTwo3")
	) {
		if (action === "remove") {
			if (!tag.classList.contains("v2")) {
				twin[rowNum].children[colNum].classList.remove("busy")
				twin[rowNum].children[colNum + 1].classList.remove("busy")
			} else {
				twin[rowNum].children[colNum].classList.remove("busy")
				twin[rowNum + 1].children[colNum].classList.remove("busy")
			}
		}

		if (action === "add") {
			if (!tag.classList.contains("v2")) {
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum].children[colNum + 1].classList.add("busy")
			} else {
				twin[rowNum].children[colNum].classList.add("busy")
				twin[rowNum + 1].children[colNum].classList.add("busy")
			}
		}
	}
}
