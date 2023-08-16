export default function danger(e, dBox, chunk) {

    let rowNum = null;
	let colNum = null;
	let twin = null;

	if (e.target.parentElement.hasAttribute("draggable")) {
		rowNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[0]
		colNum = +e.target.parentElement.parentElement.dataset.dragTableField.split(",")[1]
		twin = e.target.parentElement.parentElement.parentElement.children
	} else {
		rowNum = +e.target.dataset.dragTableField.split(",")[0]
		colNum = +e.target.dataset.dragTableField.split(",")[1]
		twin = e.target.parentElement.parentElement.children
	}

    if (dBox.classList.contains("dBoxFour") && !dBox.classList.contains("v4")){
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

                if (rowNum === 0 && colNum < 7 && colNum > 1) {
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
                    twin[rowNum + 1].children[colNum + 3].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum < 7 && colNum > 1) {
					if (twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 3].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 9 && rowNum > 0 && colNum === 1) {
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

                if (rowNum < 9 && rowNum > 0 && colNum === 7) {
					if (twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 0 && colNum === 1) {
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

                if (rowNum === 0 && colNum === 7) {
					if (twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum === 1) {
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

                if (rowNum === 9 && colNum === 7) {
					if (twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy")){
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

                if (rowNum === 0 && colNum < 8 && colNum > 2) {
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
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum < 8 && colNum > 2) {
					if (twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 9 && rowNum > 0 && colNum === 2) {
					if (twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 9 && rowNum > 0 && colNum === 8) {
					if (twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 0 && colNum === 2) {
					if (twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 2].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 0 && colNum === 8) {
					if (twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum === 2) {
					if (twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 2].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum === 8) {
					if (twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy")){
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

                if (rowNum === 0 && colNum < 9 && colNum > 3) {
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
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum < 9 && colNum > 3) {
					if (twin[rowNum].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 9 && rowNum > 0 && colNum === 3) {
					if (twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 9 && rowNum > 0 && colNum === 9) {
					if (twin[rowNum].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 0 && colNum === 3) {
					if (twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 0 && colNum === 9) {
					if (twin[rowNum].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum === 3) {
					if (twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum === 9) {
					if (twin[rowNum].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 4].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 3].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 2].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy")){
                        return null
                    }
				}
			} 
		}
	} else if (dBox.classList.contains("dBoxFour") && dBox.classList.contains("v4")) {
        if (chunk) {
            if (chunk === "0") {
                if (rowNum < 6 && rowNum > 0 && colNum < 9 && colNum > 0) {
					if (twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 6 && rowNum > 0 && colNum === 0) {
					if (twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 6 && rowNum > 0 && colNum === 9) {
					if (twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 0 && colNum < 9 && colNum > 0) {
					if (twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 6 && colNum < 9 && colNum > 0) {
					if (twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 0 &&  colNum === 0) {
					if (twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 0 &&  colNum === 9) {
					if (twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 4].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 6 &&  colNum === 0) {
					if (twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 6 &&  colNum === 9) {
					if (twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}
            }

            if (chunk === "1") {
				if (rowNum < 7 && rowNum > 1 && colNum < 9 && colNum > 0) {
					if (twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum - 1].classList.contains("busy")
                    ){
                        return null
                    }
				}

                if (rowNum === 1 && colNum < 9 && colNum > 0) {
					if (twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum - 1].classList.contains("busy")
                    ){
                        return null
                    }
				}

                if (rowNum === 7 && colNum < 9 && colNum > 0) {
					if (twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 7 && rowNum > 1 && colNum === 9) {
					if (twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum - 1].classList.contains("busy")
                    ){
                        return null
                    }
				}

                if (rowNum < 7 && rowNum > 1 && colNum === 0) {
					if (twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 1 && colNum === 0) {
					if (twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum + 1].classList.contains("busy")
                    ){
                        return null
                    }
				}

                if (rowNum === 1 && colNum === 9) {
					if (twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 3].children[colNum - 1].classList.contains("busy")
                    ){
                        return null
                    }
				}

                if (rowNum === 7 && colNum === 0) {
					if (twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 7 && colNum === 9) {
					if (twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}
			}

            if (chunk === "2") {
				if (rowNum < 8 && rowNum > 2 && colNum < 9 && colNum > 0) {
					if (twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 2 && colNum < 9 && colNum > 0) {
					if (twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 8 && colNum < 9 && colNum > 0) {
					if (twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 8 && rowNum > 2 && colNum === 0) {
					if (twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 8 && rowNum > 2 && colNum === 9) {
					if (twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 2 && colNum === 0) {
					if (twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 2 && colNum === 9) {
					if (twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 2].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 8 && colNum === 0) {
					if (twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 8 && colNum === 9) {
					if (twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}
			}

            if (chunk === "3") {
				if (rowNum < 9 && rowNum > 3 && colNum < 9 && colNum > 0) {
					if (twin[rowNum - 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 4].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 4].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy")
                    ){
                        return null
                    }
				}

                if (rowNum === 3 && colNum < 9 && colNum > 0) {
					if (twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum < 9 && colNum > 0) {
					if (twin[rowNum - 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 4].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 4].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 9 && rowNum > 3 && colNum === 0) {
					if (twin[rowNum - 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 4].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum < 9 && rowNum > 3 && colNum === 9) {
					if (twin[rowNum - 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 4].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 3 && colNum === 0) {
					if (twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 3 && colNum === 9) {
					if (twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum + 1].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum === 0) {
					if (twin[rowNum - 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 4].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum + 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum + 1].classList.contains("busy")){
                        return null
                    }
				}

                if (rowNum === 9 && colNum === 9) {
					if (twin[rowNum - 4].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum].classList.contains("busy") ||
                    twin[rowNum].children[colNum].classList.contains("busy") ||
                    twin[rowNum - 4].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 3].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 2].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum - 1].children[colNum - 1].classList.contains("busy") ||
                    twin[rowNum].children[colNum - 1].classList.contains("busy")){
                        return null
                    }
				}
			}
        }
    }
}