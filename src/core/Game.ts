import { Board } from './Board'
import { SnakeDirection } from './Snake'
import { View } from './View'
import { GameLoop } from './GameLoop'

export class Game {
  private board = new Board()
  private view = new View(this.board)
  private gameLoop = new GameLoop(150, this.loopCallback.bind(this))

  private checkIsLose (): boolean {
    return this.board.checkSnakeIntersection()
  }

  private checkIsWin (): boolean {
    return this.board.getSnakeCells.length === this.board.getAllCells().length
  }

  private loopCallback () {
    this.board.moveSnake()

    if (this.checkIsLose()) {
      this.gameLoop.stop()
    }

    if (this.checkIsWin()) {
      this.gameLoop.stop()
    }

    this.view.render()
  }

  changeSnakeDirection (direction: SnakeDirection) {
    this.board.changeSnakeDirection(direction)
  }

  pause () {
    this.gameLoop.stop()
  }

  start () {
    this.view.render()
    this.gameLoop.start()
  }
}
