import { Food } from './Food'
import { Board } from './Board'
import { Cell } from './Cell'
import { Snake } from './Snake'
import { GameLoop } from './GameLoop'

export class Game {
  private board = new Board()
  private snake = new Snake([])
  private food = new Food(new Cell(0, 0))
  // Context ?
  private gameLoop = new GameLoop(500, this.loopCallback)

  private checkSnakeEat (): boolean {
    const foodCell = this.food.getCell
    const snakeNextCell = this.snake.getNextCell()
    return foodCell.getX === snakeNextCell.getX && foodCell.getY === snakeNextCell.getY
  }

  private snakeEat () {
    const snakeFirstCell = this.snake.getCells[0]
    this.snake.eat(this.board.getCells[snakeFirstCell.getX][snakeFirstCell.getY])
    this.food.setCell = this.board.getRandomFreeCell()
  }

  private moveSnake () {
    const nextCell = this.snake.getNextCell()
    const cell = this.board.getCellNextLineOrDefault(nextCell)
    this.snake.move(cell)
  }

  private checkIsLose (): boolean {
    return this.snake.checkIntersection()
  }

  private checkIsWin (): boolean {
    return this.board.getAllCells().length === this.snake.getCells.length
  }

  private loopCallback () {
    this.moveSnake()

    if (this.checkSnakeEat()) {
      this.snakeEat()
    }
  }

  start () {
    this.gameLoop.start()
  }
}
