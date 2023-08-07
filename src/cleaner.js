export default function cleaner(tag) {
	if (tag.children[0].classList.contains("dBoxFour")) {
		if (!tag.children[0].classList.contains("v4")) {
			tag.classList.remove("busy")
			tag.nextSibling.classList.remove("busy")
			tag.nextSibling.nextSibling.classList.remove("busy")
			tag.nextSibling.nextSibling.nextSibling.classList.remove("busy")
		} else {
            const colNum = +tag.dataset.dragTableField.split(",")[0]
			const col2 = tag.parentElement.parentElement.children[colNum + 1].children[colNum]
			const col3 = tag.parentElement.parentElement.children[colNum + 2].children[colNum]
			const col4 = tag.parentElement.parentElement.children[colNum + 3].children[colNum]
            tag.classList.remove("busy")
            col2.classList.remove("busy")
            col3.classList.remove("busy")
            col4.classList.remove("busy")
        }
	}
}