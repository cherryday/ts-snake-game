import { Game } from './Game'
import { SnakeDirection } from './Snake'

export class GameController {
  private game = new Game()

  constructor () {
    this.init()
  }

  private init () {
    document.addEventListener('keydown', event => this.keydownHandler(event))
  }

  destroy () {
    document.removeEventListener('keydown', this.keydownHandler)
  }

  start () {
    this.game.start()
  }

  private keydownHandler (event: KeyboardEvent) {
    switch (event.code) {
      case 'Space':
        this.game.pause()
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
}
