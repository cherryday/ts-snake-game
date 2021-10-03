import { Cell, CellContent } from './Cell'
import { getRandomInteger } from '../utils'

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
    this.cells = [...Array(this.rowCount)].map((_, y) => {
      return [...Array(this.colCount)].map((__, x) => new Cell(x, y))
    })
  }

  getCellNextLineOrDefault (cell: Cell): Cell {
    let x = cell.getX
    let y = cell.getY

    if (y > this.rowCount - 1) y = 0
    if (y < 0) y = this.rowCount- 1
    if (x > this.colCount - 1) x = 0
    if (x < 0) x = this.colCount - 1

    return this.cells[y][x]
  }

  getAllCells (): Cell[] {
    return this.cells.reduce((acc, row) => [...acc, ...row], [])
  }

  getFreeCells (): Cell[] {
    return this.getAllCells().filter(cell => cell.getContent === CellContent.EMPTY)
  }

  getRandomFreeCell (): Cell {
    const freeCells = this.getFreeCells()
    const index = getRandomInteger(0, freeCells.length - 1)
    return freeCells[index]
  }
}
