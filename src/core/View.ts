import { Board } from './Board'
import { ViewPoints } from './ViewPoints'

export class View {
  private canvas = <HTMLCanvasElement> document.getElementById('canvas')!
  private ctx = this.canvas.getContext('2d')!
  private cellSize = 16
  private viewPoints = new ViewPoints()

  constructor (private board: Board) {
    this.init()
  }

  private init () {
    this.canvas.width = this.board.getColCount * this.cellSize
    this.canvas.height = this.board.getRowCount * this.cellSize
    this.viewPoints.init()
  }

  private getCellPosition (value: number): number {
    return value * this.cellSize + this.cellSize / 2
  }

  private drawBoard () {
    this.board.getCells.forEach(row => {
      row.forEach(cell => {
        this.ctx.beginPath()
        this.ctx.arc(this.getCellPosition(cell.getX), this.getCellPosition(cell.getY), 4, 0, 2 * Math.PI)
        this.ctx.fillStyle = '#525053'
        this.ctx.fill()
      })
    })
  }

  private drawSnake () {
    this.board.getSnakeCells.forEach((cell, i) => {
      if (this.board.getSnakeCells.length - 1 === i) this.ctx.fillStyle = '#FA0556'
      else this.ctx.fillStyle = '#A00034'

      this.ctx.fillRect(
        cell.getX * this.cellSize,
        cell.getY * this.cellSize,
        this.cellSize,
        this.cellSize
      )
    })
  }

  private drawFood () {
    this.ctx.beginPath()
    this.ctx.arc(
      this.getCellPosition(this.board.getFoodCell.getX),
      this.getCellPosition(this.board.getFoodCell.getY),
      6,
      0,
      2 * Math.PI
    )
    this.ctx.fillStyle = '#FFEB3B'
    this.ctx.fill()
    
  }

  clear () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  render () {
    this.clear()
    this.drawBoard()
    this.drawSnake()
    this.drawFood()
  }
}
