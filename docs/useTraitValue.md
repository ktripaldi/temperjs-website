---
id: useTraitValue
title: useTraitValue
sidebar_label: useTraitValue
---

`useTraitValue` returns the current value of a Trait.
The component will rerender when the Trait value changes.

```js {7}
// using ES6 modules
import { useTraitValue } from 'temperjs'

// using CommonJS modules
const useTraitValue = require('temperjs').useTraitValue

const count = useTraitValue('count');
```

You can also pass a subscription configuration:

```js {1,2}
const count = useTraitValue('count', { default: 0 });
const count = useTraitValue('asyncCount', { loadable: true });
```

- `default` lets you specify a default value to be used when the Trait doesn't exist yet or when its value is `undefined`.

- `loadable` tells the hook that you want to receive a Loadable instance of the Trait.

## Loadable

When the value of Trait is a promise, a `Loadable` object represents the current state of that Trait.
This state may either have a value available, may be in an error state, or may still be pending asynchronous resolution.

A `Loadable` has the following interface:

```ts
interface Loadable {
  state: 'hasValue' | 'hasError' | 'loading'
  value: T | Error | Promise<T>
}
```

- `state` is current state of the Trait. Possible values are `'hasValue'`, `'hasError'`, or `'loading'`.
- `value` is the value represented by this `Loadable`. If the state is `'hasValue'`, it is the actual value, if the state is `'hasError'` it is the Error object that was thrown, and if the state is `'loading'`, then it is a Promise of the value.
