import { Food } from '../../src/core/Food'
import { Cell, CellContent } from '../../src/core/Cell'

describe('Food', () => {
  it('should set cell content when init', () => {
    const cell = new Cell(0, 0)
    const food = new Food(cell)
    
    expect(cell.getContent).toBe(CellContent.FOOD)
    expect(food.getCell.getContent).toBe(CellContent.FOOD)
  })

  it('should set cell content when change cell', () => {
    const cell = new Cell(0, 0)
    const nextCell = new Cell(0, 0)
    const food = new Food(cell)
    food.setCell = nextCell

    expect(cell.getContent).toBe(CellContent.EMPTY)
    expect(nextCell.getContent).toBe(CellContent.FOOD)
    expect(food.getCell.getContent).toBe(CellContent.FOOD)
  })
})
