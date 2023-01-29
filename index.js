let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const movePiece = (startStack, endStack) => {
  stacks[endStack].push(stacks[startStack].pop())
}

const isLegal = (startStack, endStack) => {
  if (stacks[startStack].at(-1) < stacks[endStack].at(-1) || typeof stacks[endStack][0] === "undefined") {
    return true
  } else {
    return false
  }
}

const checkForWin = () => {
  if (stacks.c[0] === 4 && stacks.c[3] === 1) {
    return true
  } else {
    return false
  }
}

const setUpUI = () => {
  const towers = document.querySelectorAll('[data-tower]')
  towers.forEach(tower => {
    tower.addEventListener('click', (event) => {
      event.stopPropagation()
      selectTower(event.target)
    } )
  })
}

setUpUI()

const selectTower = (clickedTower) => {
  console.log(clickedTower)
  const towerPosition = clickedTower.getAttribute('data-tower')
  console.log(towerPosition)
  pickUpStone(towerPosition)
}

const pickUpStone = (towerPosition) => {
  const clickedTower = document.querySelector(`[data-tower = '${towerPosition}']`)
  console.log(clickedTower)
  console.log(clickedTower.children)
  clickedTower.removeChild(clickedTower.lastChild)
}

















// let stone = null

// const towerSelect = (element) => {
//   let selection = element.getAttribute('data-tower')
//   if (!selection) {
//     selection = element.parentElement.getAttribute('data-tower')
//   }
//   console.log(selection)
// }

// const stoneSelect = (element) => {
//   const selection = element.getAttribute('data-size')
//   console.log(selection)
//   const selectedStone = document.querySelector(`[data-size = '${selection}']`)
//   console.log(selectedStone)
//   // stone = selectedStone.remove()
//   // console.log(stone)
// }

// to make towers and stones clickable...
// const main = document.querySelector('main')
// const towers = main.querySelectorAll('.tower')

// towers.forEach(tower => {
//   tower.addEventListener('click', (e) => startStackSelect(e.target))
// });
// const stones = main.querySelectorAll('.stone')

// stones.forEach(stone => {
//   stone.addEventListener('click', (e) => {
//     e.stopPropagation()
//     stoneSelect(e.target)
//   })
// });
//
















// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

// const stone = null

// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.

// const selectRow = (row) => {
//   const currentRow = row.getAttribute("data-row")
//   console.log("Yay, we clicked an item", row)
//   console.log("Here is the stone's id: ", row.id)
//   console.log("Here is the stone's data-size: ", currentRow)
//   pickUpStone(row.id)
// } 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...

// const pickUpStone = (rowID) => {
//   const selectedRow = document.getElementById(rowID);
//   stone = selectedRow.removeChild(selectedRow.lastChild);
//   console.log(stone)
// }

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

// const dropStone = (rowID, stone) => {
//   document.getElementById(rowID).appendChild(stone)
//   stone = null
// }

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

