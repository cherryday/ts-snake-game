import { Cell } from './Cell'

export class Board {
  public rowCount = 14
  public colCount = 20
  public cells: Cell[][] = []

  constructor () {
    for (let r = 0; r < this.rowCount; r++) {
      for (let c = 0; c < this.colCount; c++) {
        this.cells[r][c] = new Cell(r, c)
      }
    }
  }
}
