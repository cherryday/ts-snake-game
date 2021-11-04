import { Game } from './Game'
import { SnakeDirection } from './Snake'

export class GameController {
  private game = new Game()
  private handler = this.keydownHandler.bind(this)

  constructor () {
    this.init()
  }

  private init () {
    document.addEventListener('keydown', this.handler)
  }

  private keydownHandler (event: KeyboardEvent) {
    switch (event.code) {
      case 'Space':
        this.game.toggleStatus()
        break
      case 'ArrowUp':
        this.game.changeSnakeDirection(SnakeDirection.Top)
        break
      case 'ArrowRight':
        this.game.changeSnakeDirection(SnakeDirection.Right)
        break
      case 'ArrowDown':
        this.game.changeSnakeDirection(SnakeDirection.Bottom)
        break
      case 'ArrowLeft':
        this.game.changeSnakeDirection(SnakeDirection.Left)
        break
    }
  }

  destroy () {
    document.removeEventListener('keydown', this.handler)
  }

  start () {
    this.game.start()
  }
}
