import { GameController } from '../../src/core/GameController'
import { Game } from '../../src/core/Game'
import { SnakeDirection } from '../../src/core/Snake'

jest.mock('../../src/core/Game')

describe('GameController', () => {
  const mockStart = jest.fn()
  const mockToggleStatus = jest.fn()
  const mockChangeSnakeDirection = jest.fn()

  beforeAll(() => {
    (Game as jest.Mock).mockImplementation(() => {
      return {
        changeSnakeDirection: mockChangeSnakeDirection,
        toggleStatus: mockToggleStatus,
        start: mockStart
      }
    })
  })

  it('should add and remove keydown listener', () => {
    jest.spyOn(document, 'addEventListener')
    jest.spyOn(document, 'removeEventListener')

    const gameController = new GameController()
    const [_, keydownHandler] = (document.addEventListener as jest.Mock).mock.calls[0]

    expect(document.addEventListener).toHaveBeenCalledWith('keydown', keydownHandler)

    gameController.destroy()

    expect(document.removeEventListener).toHaveBeenCalledWith('keydown', keydownHandler)
  })

  it('change the status when space clicked', () => {
    new GameController()
    const event = new KeyboardEvent('keydown', { code: 'Space' })

    document.dispatchEvent(event)

    expect(mockToggleStatus).toHaveBeenCalled()
  })

  it('should call start method', () => {
    const gameController = new GameController()

    gameController.start()

    expect(mockStart).toHaveBeenCalled()
  })

  it.each`
    keyCode         | snakeDirection                
    ${'ArrowUp'}    | ${SnakeDirection.Top}
    ${'ArrowRight'} | ${SnakeDirection.Right}
    ${'ArrowDown'}  | ${SnakeDirection.Bottom}
    ${'ArrowLeft'}  | ${SnakeDirection.Left}
  `(
    'should change snake direction',
    ({ keyCode, snakeDirection }) => {
      new GameController()
      const event = new KeyboardEvent('keydown', { code: keyCode })

      document.dispatchEvent(event)

      expect(mockChangeSnakeDirection).toHaveBeenCalledWith(snakeDirection)
    }
  )
})
