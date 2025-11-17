import { ShallowWrapper } from 'enzyme'
import { screen, within } from '@testing-library/react'

/**
 * Create search element string to get a data-test attributes
 *
 * @param {string} id
 * @return {string}
 * @example
 * ```javascript
 * import React from 'react'
 * import { shallow } from 'enzyme'
 *
 * const Content = () => (
 *  <div>
 *    <div data-test="my-content">Hello</div>
 *  </div>
 * )
 * const wrapper = shallow(Content)
 * const hello = wrapper.find(sel('my-content'))
 * ```
 */
export const sel = (id: string) => `[data-test="${id}"]`

/**
 * Find the element by a data-test attributes (for enzyme)
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} id
 * @return {ShallowWrapper}
 * @example
 * ```javascript
 * import React from 'react'
 * import { shallow } from 'enzyme'
 *
 * const Content = () => (
 *  <div>
 *    <div data-test="my-content">Hello</div>
 *  </div>
 * )
 * const hello = findShallowElement(shallow(Content), 'my-content')
 * ```
 */
export const findShallowElement = (wrapper: ShallowWrapper, id: string): ShallowWrapper => {
  return wrapper.find(sel(id))
}

/**
 * Find element by data-testid attribute using React Testing Library
 *
 * @param {string} id - The data-testid attribute value
 * @return {HTMLElement}
 * @example
 * ```javascript
 * import React from 'react'
 * import { render } from '@testing-library/react'
 * import { getByTestId } from 'react-sel'
 *
 * const Content = () => (
 *  <div>
 *    <div data-testid="my-content">Hello</div>
 *  </div>
 * )
 * render(<Content />)
 * const hello = getByTestId('my-content')
 * ```
 */
export const getByTestId = (id: string): HTMLElement => {
  return screen.getByTestId(id)
}

/**
 * Query element by data-testid attribute using React Testing Library
 * Returns null if not found
 *
 * @param {string} id - The data-testid attribute value
 * @return {HTMLElement | null}
 * @example
 * ```javascript
 * import React from 'react'
 * import { render } from '@testing-library/react'
 * import { queryByTestId } from 'react-sel'
 *
 * const Content = () => <div />
 * render(<Content />)
 * const element = queryByTestId('my-content') // null
 * ```
 */
export const queryByTestId = (id: string): HTMLElement | null => {
  return screen.queryByTestId(id)
}

/**
 * Find element by data-testid attribute within a container
 *
 * @param {HTMLElement} container - The container element to search within
 * @param {string} id - The data-testid attribute value
 * @return {HTMLElement}
 * @example
 * ```javascript
 * import React from 'react'
 * import { render } from '@testing-library/react'
 * import { getByTestId, findByTestIdWithin } from 'react-sel'
 *
 * const Content = () => (
 *  <div data-testid="container">
 *    <div data-testid="my-content">Hello</div>
 *  </div>
 * )
 * render(<Content />)
 * const container = getByTestId('container')
 * const hello = findByTestIdWithin(container, 'my-content')
 * ```
 */
export const findByTestIdWithin = (container: HTMLElement, id: string): HTMLElement => {
  return within(container).getByTestId(id)
}

/**
 * Query element by data-testid attribute within a container
 * Returns null if not found
 *
 * @param {HTMLElement} container - The container element to search within
 * @param {string} id - The data-testid attribute value
 * @return {HTMLElement | null}
 */
export const queryByTestIdWithin = (container: HTMLElement, id: string): HTMLElement | null => {
  return within(container).queryByTestId(id)
}

// Re-export for convenience
export { screen, within }

interface ReactSelExports {
  findShallowElement: (wrapper: ShallowWrapper, id: string) => ShallowWrapper
  sel: (id: string) => string
  getByTestId: (id: string) => HTMLElement
  queryByTestId: (id: string) => HTMLElement | null
  findByTestIdWithin: (container: HTMLElement, id: string) => HTMLElement
  queryByTestIdWithin: (container: HTMLElement, id: string) => HTMLElement | null
  screen: typeof screen
  within: typeof within
}

const reactSel: ReactSelExports = {
  // Enzyme utilities
  findShallowElement,
  sel,
  // React Testing Library utilities
  getByTestId,
  queryByTestId,
  findByTestIdWithin,
  queryByTestIdWithin,
  screen,
  within
}

export default reactSel
