export enum CellContent {
  EMPTY,
  FOOD,
  SNAKE
}

export class Cell {
  private content = CellContent.EMPTY

  constructor (
    private x: number,
    private y: number
  ) {}

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
