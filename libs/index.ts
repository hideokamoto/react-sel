import { ShallowWrapper } from 'enzyme'

/**
 * Create search element string to get a data-test attributes
 *
 * @param {string} id
 * @return {string}
 * @example
 * ```javascript
 * import React from 'react'
 * import { shallow } form 'enzyme'
 *
 * const Content = () => (
 *  <div>
 *    <div data-test="my-content">Hello</div>
 *  </div>
 * )
 * const wrapper = shallow(Content)
 * const hello = wrapper.find(sel('my-content))
 * ```
 */
export const sel = (id: string) => `[data-test="${id}"]`

/**
 * Find the element by a data-test attributes
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} id
 * @return {string}
 * @example
 * ```javascript
 * import React from 'react'
 * import { shallow } form 'enzyme'
 *
 * const Content = () => (
 *  <div>
 *    <div data-test="my-content">Hello</div>
 *  </div>
 * )
 * const hello = findShallowElement(shallow(Content), 'my-content')
 * ```
 */
export const findShallowElement = (wrapper: ShallowWrapper, id: string) => {
  return wrapper.find(sel(id))
}

export default {
  findShallowElement,
  sel
}
