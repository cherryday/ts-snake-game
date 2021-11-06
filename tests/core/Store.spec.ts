import { Store } from '../../src/core/Store'

describe('Store', () => {
  it('should subscribe and unsubscribe from listener', () => {
    const mockListener = jest.fn()
    const store = Store.getInstance()
    store.subscribe('points', mockListener)
    store.points = 10

    expect(mockListener).toHaveBeenCalledWith(store)

    store.unsubscribe(mockListener) 
    store.points = 5

    expect(mockListener).toHaveBeenCalledTimes(1)
  })

  it('should be singleton', () => {
    const storeOne = Store.getInstance()
    const storeTwo = Store.getInstance()
    
    storeOne.points = 2
    storeTwo.points = 6

    expect(storeOne).toMatchObject(storeTwo)
  })
})
