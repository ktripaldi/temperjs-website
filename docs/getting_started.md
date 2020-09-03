---
id: getting_started
title: Getting Started
sidebar_label: Getting Started
---

This section is meant to get you familiar with the Temper way of doing things.
If you're looking for something specific, please read the [API Documentation](api_documentation). If you're just starting out with Temper, read on!

For the purpose of this guide, we'll create a simple counter that prints _You've reached the target!_ when you get to the value of 5.

## Create React App
Temper is a state management library for React, so you need to have React installed and running to use Temper. The easiest and recommended way for bootstrapping a React application is to use [Create React App](https://github.com/facebook/create-react-app#creating-an-app):

```shell
npx create-react-app my-app
```

> [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f).

For more ways to install Create React App, see the [official documentation](https://github.com/facebook/create-react-app#creating-an-app).

## Installation

Using [npm](https://www.npmjs.com/get-npm):
```shell
npm install temperjs
```

Using [yarn](https://classic.yarnpkg.com/en/docs/install/):

```shell
yarn add temperjs
```

## withTemper

If you want to use Temper states, you need to wrap your component (preferably the root component) with the hoc `withTemper`.

```jsx {8}
import React from 'react';
import { withTemper } from 'temperjs';

function App() {
  return <Counter />
}

export default withTemper(App);
```

We'll implement the `Counter` component in the following section.

## Traits

Temper states are called **Traits**.
Traits are globally shared units of state that components can subscribe to.
**Traits can be read and written from any component in the application tree.**
Subscribed components will rerender everytime the Trait value changes.

If you want to set a Trait, use can use the action `setTrait`:

```jsx {5}
import React from 'react';
import { withTemper, setTrait } from 'temperjs';

function App() {
  setTrait('count', 0);
  return <Counter />
}

export default withTemper(App);
```

If you need to read from **and write to** a Trait, you can use the hook `useTrait`:

```jsx {5}
import React from 'react';
import { useTrait } from 'temperjs';

function Counter() {
  const [count, setCount] = useTrait('count');

  function incrementCounter() {
    setCount(({ value }) => value + 1);
  }
  function decrementCounter() {
    setCount(({ value }) => value - 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default Counter;

```

## Selectors

**Selectors are derived Traits**. You can think of selectors as the output of passing a state to a pure function that executes some logic based on that state.

If you want to create a selector, you can use the following syntax:

```jsx {8}
import React from 'react';
import { withTemper, setTrait } from 'temperjs';

function App() {
  // This is a simple Trait
  setTrait('count', 0);
  // This is a selector Trait
  setTrait('isTargetReached', ({ get }) => get('count') >= 5);

  return <Counter />
}

export default withTemper(App);
```

:::caution
Selectors **permanently** depend on their reference Trait.
When the reference Trait changes, the selector value is updated **automatically**.
:::

## Nested Traits

Temper encourages you to wrap related Traits in a single object.
**When a Trait is an object, each attribute will become a new Trait that is individually updatable and subscribable**:

```jsx {5-8}
import React from 'react';
import { withTemper, setTrait } from 'temperjs';

function App() {
  setTrait('counter', {
    count: 0,
    isTargetReached: ({ get }) => get('counter.count') >= 5
  });

  return <Counter />
}

export default withTemper(App);
```

If you just need to read a Trait, you can use the hook `useTraitValue` (nested Traits are referenced with the dot notation.):

```jsx {6}
import React from 'react';
import { useTrait, useTraitValue } from 'temperjs';

function Counter() {
  const [count, setCount] = useTrait('counter.count');
  const isTargetReached = useTraitValue('counter.isTargetReached');

  function incrementCounter() {
    setCount(({ value }) => value + 1);
  }
  function decrementCounter() {
    setCount(({ value }) => value - 1);
  }

  return (
    <div>
      <p>{count} { isTargetReached && (<span>You've reached the target!</span>)}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default Counter;

```

## Wrapping things up

The result of the above code is:

import App from './components/Counter/App'

<App />
