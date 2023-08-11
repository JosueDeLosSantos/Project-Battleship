export function dangerH(e, dBox, chunk) {

    const rowNum = +e.target.dataset.dragTableField.split(",")[0]
	const colNum = +e.target.dataset.dragTableField.split(",")[1]
	const twin = e.target.parentElement.parentElement.children

    if (dBox.classList.contains("dBoxFour")){
		if (chunk) {
			if (chunk === "0") {
				if (rowNum < 9 && rowNum > 0 && colNum < 6 && colNum > 0) {
					if (twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 4].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 4].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 4].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 0 && colNum < 6 && colNum > 0) {
                    if (twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 4].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 4].classList.contains("busy")){
                        return null
                    }
                }

                if (rowNum === 9 && colNum < 6 && colNum > 0) {
                    if (twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 4].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 4].classList.contains("busy")){
                        return null
                    }
                }

                if (rowNum < 9 && rowNum > 0 && colNum === 0) {
                    if (twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 4].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 4].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 4].classList.contains("busy")){
                        return null
                    }
                }

                if (rowNum < 9 && rowNum > 0 && colNum === 6) {
					if (twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 3].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 0 && colNum === 0) {
                    if (twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 4].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 4].classList.contains("busy")){
                        return null
                    }
                }

                if (rowNum === 9 && colNum === 0) {
                    if (twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 4].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 4].classList.contains("busy")){
                        return null
                    }
                }

                if (rowNum === 0 && colNum === 6) {
					if (twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 3].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum === 6) {
					if (twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 3].classList.contains("busy")){
                        return null
                    }
				}
			}
	
 			if (chunk === "1") {
				if (rowNum < 9 && rowNum > 0 && colNum < 7 && colNum > 1) {
					if (twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 3].classList.contains("busy")
                    ){
                        return null
                    }
				}
			}
	
			if (chunk === "2") {
				if (rowNum < 9 && rowNum > 0 && colNum < 8 && colNum > 2) {
					if (twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy")
                    ){
                        return null
                    }
				}
			}
	
			if (chunk === "3") {
				if (rowNum < 9 && rowNum > 0 && colNum < 9 && colNum > 3) {
					if (twin[rowNum].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy")
                    ){
                        return null
                    }
				}
			} 
		}
	}
}