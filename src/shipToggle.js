export default function shipToggle(tag) {
	const rowNum = +tag.dataset.dragTableField.split(",")[0]
	const colNum2 = +tag.dataset.dragTableField.split(",")[1]
	const twin = tag.parentElement.parentElement.children

	if (tag.children[0].classList.contains("dBoxFour")) {
		if (!tag.children[0].classList.contains("v4")) {
			if (
				+tag.dataset.dragTableField.split(",")[0] < 7 &&
				+tag.dataset.dragTableField.split(",")[1] < 7
			) {
				// next condition "if there is a ship in its way it can't work"
				tag.children[0].classList.toggle("v4")
				const tagchildren = [...tag.children[0].children]
				tagchildren.forEach((el) => {
					el.classList.add("v")
				})
				twin[rowNum].children[colNum2 + 1].classList.remove("busy")
				twin[rowNum].children[colNum2 + 2].classList.remove("busy")
				twin[rowNum].children[colNum2 + 3].classList.remove("busy")

				twin[rowNum + 1].children[colNum2].classList.add("busy")
				twin[rowNum + 2].children[colNum2].classList.add("busy")
				twin[rowNum + 3].children[colNum2].classList.add("busy")
			} else {
				tag.children[0].classList.replace("dBoxFour", "dBoxFourError")
				setTimeout(() => {
					tag.children[0].classList.replace("dBoxFourError", "dBoxFour")
				}, 300)
			}
		} else if (tag.children[0].classList.contains("v4")) {
			if (+tag.dataset.dragTableField.split(",")[0] < 7 &&
			+tag.dataset.dragTableField.split(",")[1] < 7) {
				tag.children[0].classList.toggle("v4")
				const tagchildren = [...tag.children[0].children]
				tagchildren.forEach((el) => {
					el.classList.remove("v")
				})
				twin[rowNum].children[colNum2 + 1].classList.add("busy")
				twin[rowNum].children[colNum2 + 2].classList.add("busy")
				twin[rowNum].children[colNum2 + 3].classList.add("busy")

				twin[rowNum + 1].children[colNum2].classList.remove("busy")
				twin[rowNum + 2].children[colNum2].classList.remove("busy")
				twin[rowNum + 3].children[colNum2].classList.remove("busy")
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
			if (+tag.dataset.dragTableField.split(",")[0] < 8 &&
			+tag.dataset.dragTableField.split(",")[1] < 8) {
				tag.children[0].classList.toggle("v3")
				const tagchildren = [...tag.children[0].children]
				tagchildren.forEach((el) => {
					el.classList.add("v")
				})
				twin[rowNum].children[colNum2 + 1].classList.remove("busy")
				twin[rowNum].children[colNum2 + 2].classList.remove("busy")

				twin[rowNum + 1].children[colNum2].classList.add("busy")
				twin[rowNum + 2].children[colNum2].classList.add("busy")
			} else {
				tag.children[0].classList.replace("dBoxThree1", "dBoxThree1Error")
				setTimeout(() => {
					tag.children[0].classList.replace("dBoxThree1Error", "dBoxThree1")
				}, 300)
			}
		} else if (tag.children[0].classList.contains("v3")) {
			if (+tag.dataset.dragTableField.split(",")[0] < 8 &&
			+tag.dataset.dragTableField.split(",")[1] < 8) {
				tag.children[0].classList.toggle("v3")
				const tagchildren = [...tag.children[0].children]
				tagchildren.forEach((el) => {
					el.classList.remove("v")
				})
				twin[rowNum].children[colNum2 + 1].classList.add("busy")
				twin[rowNum].children[colNum2 + 2].classList.add("busy")

				twin[rowNum + 1].children[colNum2].classList.remove("busy")
				twin[rowNum + 2].children[colNum2].classList.remove("busy")
			} else {
				tag.children[0].classList.replace("dBoxThree1", "dBoxThree1Error")
				setTimeout(() => {
					tag.children[0].classList.replace("dBoxThree1Error", "dBoxThree1")
				}, 300)
			}
		}
	}
}
