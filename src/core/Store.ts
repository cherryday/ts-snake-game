import { GameStatuses } from './Game'

interface StoreInterface {
  points: number
  status: GameStatuses
}

type StoreCallback = (store: Store) => void
type StoreKeys = keyof StoreInterface

export class Store implements StoreInterface {
  points = 0
  status = GameStatuses.DEFAULT
  private static instance: Store
  private listeners = new Map<StoreCallback, StoreKeys>()

  private constructor () {}

  static getInstance (): Store {
    if (!Store.instance) {
      Store.instance = Store.createObserver()
    }

    return Store.instance
  }

  private static createObserver (): Store {
    return new Proxy(new Store(), {
      set<T extends StoreKeys>(target: Store, key: T, value: StoreInterface[T]) {
        target[key] = value
        target.broadcast(key)
        return true
      }
    })
  }

  private broadcast (key: StoreKeys) {
    this.listeners.forEach((valueListener, callback) => {
      if (key === valueListener) {
        callback(this)
      }
    })
  }

  subscribe (value: StoreKeys, callback: StoreCallback) {
    this.listeners.set(callback, value)
  }

  unsubscribe (callback: StoreCallback) {
    this.listeners.delete(callback)
  }
}
