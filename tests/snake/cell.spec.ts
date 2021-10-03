import { Cell, CellContent } from '../../src/snake/Cell'

describe('Cell', () => {
  it('content value should be empty', () => {
    expect(new Cell(0, 0).getContent).toBe(CellContent.EMPTY)
  })

  it('should set content', () => {
    const cell = new Cell(0, 0)
    cell.setContent = CellContent.FOOD
    expect(cell.getContent).toBe(CellContent.FOOD)
  })

  it('should set init values', () => {
    const x = 1
    const y = 0
    const cell = new Cell(x, y)

    expect(cell.getX).toBe(x)
    expect(cell.getY).toBe(y)
  })
})
