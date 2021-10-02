import { Cell, CellContent } from './Cell'

export enum SnakeDirection {
  Top,
  Right,
  Bottom,
  Left
}

export class Snake {
  private cells: Cell[]
  private direction = SnakeDirection.Bottom

  constructor (cells: Cell[]) {
    this.cells = cells
  }

  get getCells () {
    return this.cells
  }

  get getDirection () {
    return this.direction
  }

  getNextCell (): Cell {
    const lastCell = this.cells[this.cells.length - 1]
    let x = lastCell.getX
    let y = lastCell.getY

    if (this.direction === SnakeDirection.Top) y--
    if (this.direction === SnakeDirection.Right) x++
    if (this.direction === SnakeDirection.Bottom) y++
    if (this.direction === SnakeDirection.Top) x--

    return new Cell(x, y)
  }

  changeDirection (direction: SnakeDirection) {
    if (this.direction === SnakeDirection.Top && direction === SnakeDirection.Bottom) return
    if (this.direction === SnakeDirection.Bottom && direction === SnakeDirection.Top) return
    if (this.direction === SnakeDirection.Right && direction === SnakeDirection.Left) return
    if (this.direction === SnakeDirection.Left && direction === SnakeDirection.Right) return

    this.direction = direction
  }

  move (cell: Cell) {
    const firstCell = this.cells.shift()!
    firstCell.setContent = CellContent.EMPTY
    cell.setContent = CellContent.SNAKE
    this.cells.push(cell)
  }

  eat (cell: Cell) {
    cell.setContent = CellContent.SNAKE
    this.cells.unshift(cell)
  }
}
