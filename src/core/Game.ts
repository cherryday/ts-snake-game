import { Store } from './Store'
import { Board } from './Board'
import { SnakeDirection } from './Snake'
import { View } from './View'
import { GameLoop } from './GameLoop'

export enum GameStatuses {
  DEFAULT,
  PAUSED
}

export class Game {
  private store = Store.getInstance()
  private board = new Board()
  private view = new View(this.board)
  private gameLoop = new GameLoop(80, this.loopCallback.bind(this))

  private checkIsLose (): boolean {
    return this.board.checkSnakeIntersection()
  }

  private checkIsWin (): boolean {
    return this.board.getSnakeCells.length === this.board.getAllCells().length
  }

  private loopCallback () {
    this.board.moveSnake()

    if (this.checkIsLose() || this.checkIsWin()) {
      return this.restart()
    }

    this.view.render()
  }

  private pause () {
    this.gameLoop.stop()
  }

  private restart () {
    this.store.points = 0
    this.board.clear()
    this.gameLoop.stop()
    this.start()
  }

  toggleStatus () {
    if (this.store.status === GameStatuses.DEFAULT) {
      this.store.status = GameStatuses.PAUSED
      this.pause()
    } else {
      this.store.status = GameStatuses.DEFAULT
      this.start()
    }
  }

  changeSnakeDirection (direction: SnakeDirection) {
    if (this.store.status === GameStatuses.DEFAULT) {
      this.board.changeSnakeDirection(direction)
    }
  }

  start () {
    this.view.render()
    this.gameLoop.start()
  }
}
