import React from 'react'
import { render } from '@testing-library/react'
import { getByTestId, queryByTestId, findByTestIdWithin, queryByTestIdWithin } from '../libs/index'

describe('React Testing Library utilities', () => {
  describe('getByTestId()', () => {
    it('should find element by data-test attribute', () => {
      const TestComponent = () => (
        <div>
          <div data-testid="my-content">Hello World</div>
        </div>
      )
      render(<TestComponent />)
      const element = getByTestId('my-content')
      expect(element).toBeInTheDocument()
      expect(element).toHaveTextContent('Hello World')
    })

    it('should throw error when element not found', () => {
      const TestComponent = () => <div />
      render(<TestComponent />)
      expect(() => getByTestId('not-exist')).toThrow()
    })
  })

  describe('queryByTestId()', () => {
    it('should find element by data-test attribute', () => {
      const TestComponent = () => (
        <div>
          <div data-testid="my-content">Hello World</div>
        </div>
      )
      render(<TestComponent />)
      const element = queryByTestId('my-content')
      expect(element).toBeInTheDocument()
      expect(element).toHaveTextContent('Hello World')
    })

    it('should return null when element not found', () => {
      const TestComponent = () => <div />
      render(<TestComponent />)
      const element = queryByTestId('not-exist')
      expect(element).toBeNull()
    })
  })

  describe('findByTestIdWithin()', () => {
    it('should find element within container', () => {
      const TestComponent = () => (
        <div>
          <div data-testid="container">
            <div data-testid="child">Child Element</div>
          </div>
          <div data-testid="child">Outside Child</div>
        </div>
      )
      render(<TestComponent />)
      const container = getByTestId('container')
      const child = findByTestIdWithin(container, 'child')
      expect(child).toHaveTextContent('Child Element')
    })

    it('should throw error when element not found in container', () => {
      const TestComponent = () => (
        <div>
          <div data-testid="container">
            <div>No test id</div>
          </div>
        </div>
      )
      render(<TestComponent />)
      const container = getByTestId('container')
      expect(() => findByTestIdWithin(container, 'not-exist')).toThrow()
    })
  })

  describe('queryByTestIdWithin()', () => {
    it('should find element within container', () => {
      const TestComponent = () => (
        <div>
          <div data-testid="container">
            <div data-testid="child">Child Element</div>
          </div>
        </div>
      )
      render(<TestComponent />)
      const container = getByTestId('container')
      const child = queryByTestIdWithin(container, 'child')
      expect(child).toBeInTheDocument()
      expect(child).toHaveTextContent('Child Element')
    })

    it('should return null when element not found in container', () => {
      const TestComponent = () => (
        <div>
          <div data-testid="container">
            <div>No test id</div>
          </div>
        </div>
      )
      render(<TestComponent />)
      const container = getByTestId('container')
      const child = queryByTestIdWithin(container, 'not-exist')
      expect(child).toBeNull()
    })
  })
})
