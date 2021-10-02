type GameLoopCallback = () => void

export class GameLoop {
  private RAFId = 0
  private lastTime = 0
  private delay
  private callback

  constructor (delay: number, callback: GameLoopCallback) {
    this.delay = delay
    this.callback = callback
  }

  private RAFHandler (timestamp: number) {
    this.RAFId = window.requestAnimationFrame(this.RAFHandler)
    if ((timestamp - this.lastTime) < this.delay) return
    this.lastTime = timestamp
    this.callback()
  }

  start () {
    this.RAFId = window.requestAnimationFrame(this.RAFHandler)
  }

  stop () {
    window.cancelAnimationFrame(this.RAFId)
  }
}
