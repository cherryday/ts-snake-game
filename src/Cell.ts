export enum CellContent {
  EMPTY,
  FOOD,
  SNAKE
}

export class Cell {
  private x
  private y
  private content = CellContent.EMPTY

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }

  get getX () {
    return this.x
  }

  get getY () {
    return this.y
  }

  get getContent () {
    return this.content
  }

  set setContent (content: CellContent) {
    this.content = content
  }
}
