

function createBoard (size) {
  let board = [];
  for (let x=0; x != size; x++) {
    let row = []; 
    for (let y=0; y != size; y++) {
      row.push(0)
    }
    board.push(row)
  }
  return board
}
module.exports = createBoard
