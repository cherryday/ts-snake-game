import { GameLoop } from '../../src/core/GameLoop'

describe('GameLoop', () => {
  it('should stop loop', () => {
    const rafId = 1
    window.requestAnimationFrame = jest.fn().mockReturnValue(rafId)
    jest.spyOn(window, 'cancelAnimationFrame')
    const gameLoop = new GameLoop(100, () => {})

    gameLoop.start()
    gameLoop.stop()

    expect(window.cancelAnimationFrame).toHaveBeenCalledWith(rafId)
  })

  it('should call callback by interval', () => {
    jest.useFakeTimers()
    const mockCallback = jest.fn()
    const delay = 100
    window.requestAnimationFrame = jest.fn().mockImplementation(cb => {
      setTimeout(cb, delay)
    })
    const gameLoop = new GameLoop(delay, mockCallback)

    gameLoop.start()

    expect(mockCallback).not.toHaveBeenCalled()

    jest.advanceTimersByTime(delay)

    expect(mockCallback).toHaveBeenCalled()
  })
})
