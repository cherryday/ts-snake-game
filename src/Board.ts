import { Cell, CellContent } from './Cell'
import { getRandomInteger } from './utils'

export class Board {
  private rowCount = 14
  private colCount = 20
  private cells: Cell[][] = []

  constructor () {
    this.init()
  }

  get getRowCount () {
    return this.rowCount
  }

  get getColCount () {
    return this.colCount
  }

  get getCells () {
    return this.cells
  }

  private init () {
    for (let r = 0; r < this.rowCount; r++) {
      for (let c = 0; c < this.colCount; c++) {
        this.cells[r][c] = new Cell(r, c)
      }
    }
  }

  getFreeCells (): Cell[] {
    return this.cells
      .reduce((acc, row) => [...acc, ...row], [])
      .filter(cell => cell.getContent === CellContent.EMPTY)
  }

  getRandomFreeCell (): Cell {
    const freeCells = this.getFreeCells()
    const index = getRandomInteger(0, freeCells.length - 1)
    return freeCells[index]
  }
}
