---
id: useTrait
title: useTrait
sidebar_label: useTrait
---

`useTrait` returns an array of two elements:
- the result of [`useTraitValue`](useTraitValue);
- a memoized reference to [`setTrait`](setTrait).

```js {7}
// using ES6 modules
import { useTrait } from 'temperjs';

// using CommonJS modules
const useTrait = require('temperjs').useTrait;

const [count, setCount] = useTrait('count');

function increaseCount() {
  setCount(({ value }) => value += 1);
}
```

`useTrait` accepts the same subscription configuration options of [`useTraitValue`](useTraitValue).
