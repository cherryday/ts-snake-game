import { Coord } from '../interfaces'
import { Directions } from '../enums'

export class SnakeEntity {
  private coords: Coord[]
  private direction: Directions

  constructor (coords: Coord[], direction: Directions) {
    this.coords = coords
    this.direction = direction
  }
}