import { Cell, CellContent } from './Cell'

export class Food {
  private cell

  constructor (cell: Cell) {
    this.cell = cell
  }

  get getCell () {
    return this.cell
  }

  set setCell (cell: Cell) {
    this.cell.setContent = CellContent.EMPTY
    cell.setContent = CellContent.FOOD
    this.cell = cell
  }
}
