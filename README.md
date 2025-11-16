# React sel

Simple React element search utilities for enzyme and React Testing Library

## Features

- 🔍 Simple `data-test` attribute-based element selection
- 🧪 Support for both enzyme and React Testing Library
- 📦 TypeScript support with full type definitions
- ⚡️ Lightweight with minimal dependencies
- 🔄 Compatible with React 16.8+

## Installation

```bash
npm install react-sel
# or
yarn add react-sel
```

### Peer Dependencies

For enzyme users:
```bash
npm install enzyme enzyme-adapter-react-16 react react-dom
```

For React Testing Library users:
```bash
npm install @testing-library/react react react-dom
```

## Usage

### With React Testing Library (Recommended)

```typescript
import React from 'react'
import { render } from '@testing-library/react'
import { getByTestId, queryByTestId, findByTestIdWithin } from 'react-sel'

const MyComponent = () => (
  <div>
    <button data-testid="submit-button">Submit</button>
    <div data-testid="container">
      <span data-testid="message">Hello World</span>
    </div>
  </div>
)

// Test
render(<MyComponent />)

// Find element by data-testid
const button = getByTestId('submit-button')
expect(button).toHaveTextContent('Submit')

// Query (returns null if not found)
const notExist = queryByTestId('not-exist')
expect(notExist).toBeNull()

// Find within a container
const container = getByTestId('container')
const message = findByTestIdWithin(container, 'message')
expect(message).toHaveTextContent('Hello World')
```

### With enzyme

```typescript
import React from 'react'
import { shallow } from 'enzyme'
import { sel, findShallowElement } from 'react-sel'

const MyComponent = () => (
  <div>
    <button data-test="submit-button">Submit</button>
  </div>
)

// Test
const wrapper = shallow(<MyComponent />)

// Using sel() to create selector
const button = wrapper.find(sel('submit-button'))
expect(button.text()).toBe('Submit')

// Using findShallowElement helper
const button2 = findShallowElement(wrapper, 'submit-button')
expect(button2.text()).toBe('Submit')
```

## API

### React Testing Library API

#### `getByTestId(id: string): HTMLElement`
Find element by `data-testid` attribute. Throws error if not found.

#### `queryByTestId(id: string): HTMLElement | null`
Query element by `data-testid` attribute. Returns `null` if not found.

#### `findByTestIdWithin(container: HTMLElement, id: string): HTMLElement`
Find element within a container by `data-testid` attribute.

#### `queryByTestIdWithin(container: HTMLElement, id: string): HTMLElement | null`
Query element within a container. Returns `null` if not found.

### enzyme API

#### `sel(id: string): string`
Create a selector string for `data-test` attribute.

#### `findShallowElement(wrapper: ShallowWrapper, id: string): ShallowWrapper`
Find element in enzyme shallow wrapper by `data-test` attribute.

## Development

### Setup

```bash
git clone git@github.com:hideokamoto/react-sel.git
cd react-sel
npm install
```

### Commands

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Lint
npm run lint

# Type check
npm run tsc

# Generate documentation
npm run doc
```

### Commit Message Convention

This repository follows [Conventional Commits](https://www.conventionalcommits.org/).

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

## License

MIT