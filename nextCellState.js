const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState (cellState, neighbourCount) {
  if (cellState) {
    if (neighbourCount < 2) {
      if (isUnderPopulated(neighbourCount)) return false
    } else if (neighbourCount === 2 || neighbourCount === 3) {
      return true
    } else if (neighbourCount > 3) {
      if (isOverPopulated(neighbourCount)) return false
    }
  } else {
    return isRessurectable(neighbourCount)
  }
}

module.exports = nextCellState
