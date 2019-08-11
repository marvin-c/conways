const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds (rowIndex, columnIndex, array) {
  if (rowIndex < 0 || columnIndex < 0) {
    return true
  } else if (rowIndex >= array.length || columnIndex >= array.length ) {
    return true 
  } else {
    return false
  }
}

module.exports = indicesAreOutOfBounds
