const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard (currentBoard) {
  let newBoard = currentBoard
  let blank = true
  for (let row = 0; row < currentBoard.length; row++) {
    for (let col = 0; col < currentBoard.length; col++) {
      if (currentBoard[row][col]) blank = false
      let result = countAliveNeighbours(row, col, currentBoard)
      newBoard[row][col] = nextCellState(currentBoard[row][col], result)
    }
  }
  
  if (!blank) return newBoard
}

module.exports = nextBoard
