const getNeighbours = require('./getNeighbours')

function countAliveNeighbours (cellRow, cellColumn, board) {
  
  let aliveNeighbours = 0
  let last = board.length -1
      if (cellRow === 0 && cellColumn === 0) {
        for (let cell=0; cell < 2; cell++) {
          if (board[0][1]) {
            aliveNeighbours++
          } else if (board[1][0]) {
            aliveNeighbours++
          } else if (board[1][1]) {
            aliveNeighbours++
          }
        }
      } else if (cellRow === 0 && cellColumn === last)  {
        for (let cell=0; cell < 2; cell++) {
          if (board[0][last-1]) {
            aliveNeighbours++
          } else if (board[1][last]) {
            aliveNeighbours++
          }
        }
      } else if (cellRow === last && cellColumn === 0) {
        for (let cell=0; cell < 2; cell++) {  
          if (board[last-1][0]) {
            aliveNeighbours++
          } else if (board[last][1]) {
            aliveNeighbours++
          }
        }
      } else if (cellRow === last && cellRow === last) {
        for (let cell=0; cell < 2; cell++) {
          if (board[last-1][last]) {
            aliveNeighbours++
          } else if (board[last][last-1]) {
            aliveNeighbours++
          }
        }
      } else {
        let cR = 0
        let cC = 0
        if (cellRow != 0) cR = cellRow-1
        
        if (cellColumn != 0) cC = cellColumn-1

        for (let cRow = cR; cRow < 3; cRow++) {
          for (let cCol = cC ; cCol <3; cCol++) {
            if (cRow != cellRow || cCol != cellColumn) {
              if (board[cRow][cCol]) aliveNeighbours++
            }
          }
        }

      }
  return aliveNeighbours
}
module.exports = countAliveNeighbours
