export default function shipToggle(tag) {
	if (tag.children[0].classList.contains("dBoxFour")) {
		if (!tag.children[0].classList.contains("v4")) {
			if (+tag.dataset.dragTableField.split(",")[0] < 7) {
				tag.children[0].classList.toggle("v4")
				const tagchildren = [...tag.children[0].children]
				tagchildren.forEach((el) => {
					el.classList.add("v")
				})
				tag.nextSibling.classList.remove("busy")
				tag.nextSibling.nextSibling.classList.remove("busy")
				tag.nextSibling.nextSibling.nextSibling.classList.remove("busy")

				const colNum = +tag.dataset.dragTableField.split(",")[0]
				const col2 = tag.parentElement.parentElement.children[colNum + 1].children[colNum]
				const col3 = tag.parentElement.parentElement.children[colNum + 2].children[colNum]
				const col4 = tag.parentElement.parentElement.children[colNum + 3].children[colNum]
				col2.classList.add("busy")
				col3.classList.add("busy")
				col4.classList.add("busy")
			} else {
				tag.children[0].classList.replace("dBoxFour", "dBoxFourError")
				setTimeout(() => {
					tag.children[0].classList.replace("dBoxFourError", "dBoxFour")
				}, 300)
			}
		} else if (tag.children[0].classList.contains("v4")) {
			if (+tag.dataset.dragTableField.split(",")[1] < 7) {
				tag.children[0].classList.toggle("v4")
				const tagchildren = [...tag.children[0].children]
				tagchildren.forEach((el) => {
					el.classList.remove("v")
				})
				tag.nextSibling.classList.add("busy")
				tag.nextSibling.nextSibling.classList.add("busy")
				tag.nextSibling.nextSibling.nextSibling.classList.add("busy")

				const colNum = +tag.dataset.dragTableField.split(",")[0]
				const col2 = tag.parentElement.parentElement.children[colNum + 1].children[colNum]
				const col3 = tag.parentElement.parentElement.children[colNum + 2].children[colNum]
				const col4 = tag.parentElement.parentElement.children[colNum + 3].children[colNum]
				col2.classList.remove("busy")
				col3.classList.remove("busy")
				col4.classList.remove("busy")
			} else {
				tag.children[0].classList.replace("dBoxFour", "dBoxFourError")
				setTimeout(() => {
					tag.children[0].classList.replace("dBoxFourError", "dBoxFour")
				}, 300)
			}
		}
	}

	if (tag.children[0].classList.contains("dBoxThree1")) {
		if (!tag.children[0].classList.contains("v3")) {
			if (+tag.dataset.dragTableField.split(",")[0] < 8) {
				tag.children[0].classList.toggle("v3")
				const tagchildren = [...tag.children[0].children]
				tagchildren.forEach((el) => {
					el.classList.add("v")
				})
				tag.nextSibling.classList.remove("busy")
				tag.nextSibling.nextSibling.classList.remove("busy")

				const colNum = +tag.dataset.dragTableField.split(",")[0]
				const col2 = tag.parentElement.parentElement.children[colNum + 1].children[colNum]
				const col3 = tag.parentElement.parentElement.children[colNum + 2].children[colNum]
				col2.classList.add("busy")
				col3.classList.add("busy")
			} else {
				tag.children[0].classList.replace("dBoxThree1", "dBoxThree1Error")
				setTimeout(() => {
					tag.children[0].classList.replace("dBoxThree1Error", "dBoxThree1")
				}, 300)
			}
		} else if (tag.children[0].classList.contains("v3")) {
			if (+tag.dataset.dragTableField.split(",")[1] < 8) {
				tag.children[0].classList.toggle("v3")
				const tagchildren = [...tag.children[0].children]
				tagchildren.forEach((el) => {
					el.classList.remove("v")
				})
				tag.nextSibling.classList.add("busy")
				tag.nextSibling.nextSibling.classList.add("busy")

				const colNum = +tag.dataset.dragTableField.split(",")[0]
				const col2 = tag.parentElement.parentElement.children[colNum + 1].children[colNum]
				const col3 = tag.parentElement.parentElement.children[colNum + 2].children[colNum]
				col2.classList.remove("busy")
				col3.classList.remove("busy")
			} else {
				tag.children[0].classList.replace("dBoxThree1", "dBoxThree1Error")
				setTimeout(() => {
					tag.children[0].classList.replace("dBoxThree1Error", "dBoxThree1")
				}, 300)
			}
		}
	}
}
