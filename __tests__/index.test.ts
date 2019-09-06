
import { sel } from '../libs/index'

describe('sel()', () => {
  it('create sel attributes', () => {
    expect(sel('john')).toEqual('[data-test="john"]')
  })
})
