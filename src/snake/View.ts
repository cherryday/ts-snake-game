import { Board } from './Board'
import { Snake } from './Snake'
import { Food } from './Food'

export class View {
  private canvas = <HTMLCanvasElement> document.getElementById('canvas')!
  private ctx = this.canvas.getContext('2d')!
  private cellSize = 24
  private padding = 6
  private primaryColor = 'rgba(0, 0, 0, 0.75)'
  private secondColor = ''

  constructor (
    private board: Board,
    private snake: Snake,
    private food: Food
  ) {
    this.init()
  }

  private drawBoard () {
    this.ctx.lineWidth = 6
    this.ctx.strokeStyle = this.primaryColor
    this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height)
  }

  private drawSnake () {
    this.snake.getCells.forEach(cell => {
      this.ctx.fillStyle = '#000'
      this.ctx.fillRect(
        cell.getX * this.cellSize + this.padding,
        cell.getY * this.cellSize + this.padding,
        this.cellSize,
        this.cellSize
      )
    })
  }

  private drawFood () {
    const image = new Image()
    image.src = 'https://cdn.icon-icons.com/icons2/1166/PNG/512/1488897578-apple_81769.png'
    image.onload = () => {
      this.ctx.drawImage(
        image,
        19 * this.cellSize + this.padding,
        13 * this.cellSize + this.padding,
        this.cellSize,
        this.cellSize
      )
    }
  }

  private clear () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  private init () {
    this.canvas.width = this.board.getColCount * this.cellSize + this.padding * 2
    this.canvas.height = this.board.getRowCount * this.cellSize + this.padding * 2
    this.drawBoard()
  }

  render () {
    this.clear()
    this.drawBoard()
    this.drawSnake()
    this.drawFood()
  }
}
