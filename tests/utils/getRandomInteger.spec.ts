import { getRandomInteger } from '../../src/utils/getRandomInteger'

describe('getRandomInteger', () => {
  it('should return random number', () => {
    const min = 0
    const max = 10
    const number = getRandomInteger(min, max)

    expect(number >= min).toBeTruthy()
    expect(number <= max).toBeTruthy()
  })
})
