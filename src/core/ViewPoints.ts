import { Store } from './Store'

export class ViewPoints {
  private store = Store.getInstance()
  private element = document.getElementById('points')
  private listener = this.pointsListener.bind(this)

  init () {
    this.store.subscribe('points', this.listener)
  }
  
  private pointsListener (store: Store) {
    if (this.element) {
      this.element.innerText = store.points as unknown as string
    }
  }
}
