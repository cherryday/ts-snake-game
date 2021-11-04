import { Store } from './Store'
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
  private eatingCell: Cell | null = null
  private isChangingDirection = false
  private store = Store.getInstance()

  constructor (cells: Cell[]) {
    cells.forEach(cell => cell.setContent = CellContent.SNAKE)
    this.cells = cells
  }

  get getCells () {
    return this.cells
  }

  checkIntersection (): boolean {
    for (let i = 0; i < this.cells.length - 1; i++) {
      for (let k = i + 1; k < this.cells.length; k++) {
        if (this.cells[i].getX === this.cells[k].getX && this.cells[i].getY === this.cells[k].getY) {
          return true
        }
      }
    }
    return false
  }

  getNextCell (): Cell {
    const lastCell = this.cells[this.cells.length - 1]
    let x = lastCell.getX
    let y = lastCell.getY

    if (this.direction === SnakeDirection.Top) y--
    if (this.direction === SnakeDirection.Right) x++
    if (this.direction === SnakeDirection.Bottom) y++
    if (this.direction === SnakeDirection.Left) x--

    return new Cell(x, y)
  }

  changeDirection (direction: SnakeDirection) {
    if (this.isChangingDirection) return
    if (this.direction === SnakeDirection.Top && direction === SnakeDirection.Bottom) return
    if (this.direction === SnakeDirection.Bottom && direction === SnakeDirection.Top) return
    if (this.direction === SnakeDirection.Right && direction === SnakeDirection.Left) return
    if (this.direction === SnakeDirection.Left && direction === SnakeDirection.Right) return

    this.direction = direction
    this.isChangingDirection = true
  }

  move (cell: Cell) {
    const firstCell = this.cells.shift()!
    firstCell.setContent = CellContent.EMPTY
    cell.setContent = CellContent.SNAKE
    this.eatingCell = firstCell
    this.cells.push(cell)
    this.isChangingDirection = false
  }

  eat () {
    if (this.eatingCell) {
      this.eatingCell.setContent = CellContent.SNAKE
      this.cells.unshift(this.eatingCell)
      this.eatingCell = null
      this.store.points += 1
    }
  }
}
