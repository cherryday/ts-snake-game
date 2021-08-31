import { Cell, CellContent } from './Cell'

export class Food {
  private cell

  constructor (cell: Cell) {
    this.cell = cell
  }

  get getCell () {
    return this.cell
  }

  setCell (cell: Cell) {
    this.cell.setCellContent = CellContent.EMPTY
    cell.setCellContent = CellContent.FOOD
    this.cell = cell
  }
}