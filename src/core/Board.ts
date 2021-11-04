import { Cell, CellContent } from './Cell'
import { Food } from './Food'
import { Snake, SnakeDirection } from './Snake'
import { getRandomInteger } from '../utils'

export class Board {
  private rowCount = 25
  private colCount = 25
  private cells = this.getInitCells()
  private snake = new Snake(this.getInitSnakeCells())
  private food = new Food(this.getRandomFreeCell())

  get getRowCount () {
    return this.rowCount
  }

  get getColCount () {
    return this.colCount
  }

  get getCells (): Cell[][] {
    return this.cells
  }

  get getFoodCell (): Cell {
    return this.food.getCell
  }

  get getSnakeCells (): Cell[] {
    return this.snake.getCells
  }

  private getInitCells (): Cell[][] {
    return [...Array(this.rowCount)].map((_, y) => {
      return [...Array(this.colCount)].map((__, x) => new Cell(x, y))
    })
  }

  private getInitSnakeCells (): Cell[] {
    const x = Math.floor(this.colCount / 2)
    return [
      this.cells[0][x],
      this.cells[1][x],
      this.cells[2][x]
    ]
  }

  private getRandomFreeCell (): Cell {
    const freeCells = this.getAllCells().filter(cell => cell.getContent === CellContent.EMPTY)
    const index = getRandomInteger(0, freeCells.length - 1)
    return freeCells[index]
  }

  private checkSnakeEat (): boolean {
    const foodCell = this.food.getCell
    const snakeLastCell = this.snake.getCells[this.snake.getCells.length - 1]
    return foodCell.getX === snakeLastCell.getX && foodCell.getY === snakeLastCell.getY
  }

  private getCellNextLineOrDefault (cell: Cell): Cell {
    let x = cell.getX
    let y = cell.getY

    if (y > this.rowCount - 1) y = 0
    if (y < 0) y = this.rowCount - 1
    if (x > this.colCount - 1) x = 0
    if (x < 0) x = this.colCount - 1

    return this.cells[y][x]
  }

  clear () {
    this.cells = this.getInitCells()
    this.snake = new Snake(this.getInitSnakeCells())
    this.food = new Food(this.getRandomFreeCell())
  }

  getAllCells (): Cell[] {
    return this.cells.reduce((acc, row) => [...acc, ...row], [])
  }

  moveSnake () {
    const nextCell = this.snake.getNextCell()
    const cell = this.getCellNextLineOrDefault(nextCell)
    this.snake.move(cell)

    if (this.checkSnakeEat()) {
      this.snake.eat()
      this.food.setCell = this.getRandomFreeCell()
    }
  }

  checkSnakeIntersection (): boolean {
    return this.snake.checkIntersection()
  }

  changeSnakeDirection (direction: SnakeDirection) {
    this.snake.changeDirection(direction)
  }
}
