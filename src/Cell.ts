export enum CellContent {
  EMPTY,
  FOOD,
  SNAKE
}

export class Cell {
  private row
  private col
  private cellContent: CellContent = CellContent.EMPTY

  constructor (row: number, col: number) {
    this.row = row
    this.col = col
  }

  get getRow () {
    return this.row
  }

  get getCol () {
    return this.col
  }

  get getCellContent () {
    return this.cellContent
  }

  set setCellContent (cellContent: CellContent) {
    this.cellContent = cellContent
  }
}
