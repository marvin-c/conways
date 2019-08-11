const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours (cellRow, cellColumn, board) {
  let numOfNeighbours = []
  let idx = 3
  let cRow = 0
  let cCol = 0
  if (cellRow === 0 || cellColumn === 0) {
    idx = 2
    cRow = 0
    cCol = 0
  } else {
    idx = 3
    cRow = cellRow - 1
    cCol = cellColumn - 1
  }
  for (let row = cRow; row < idx; row++) {
    for (let col = cCol; col < idx; col++) {
      if (cellRow != row || cellColumn != col) {
          numOfNeighbours.push(board[row][col])
      }
    }
  }
  return numOfNeighbours
}
module.exports = getNeighbours
