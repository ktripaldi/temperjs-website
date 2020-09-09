---
id: setTrait
title: setTrait
sidebar_label: setTrait
---

`setTrait` creates or updates a Trait.

Temper encourages you to wrap related Traits in a single object.
**When a Trait is an object, each attribute will become a new Trait that is individually updatable and subscribable**.
You'll be able to reference nested Traits with the dot notation.

```js {8,10,12}
// using ES6 modules
import { setTrait } from 'temperjs'

// using CommonJS modules
const setTrait = require('temperjs').setTrait

// to create a new Trait
setTrait('titles', { mainTitle: "Lorem ipsum", subTitle: 'Aliquam suscipit'});
// to update a Trait
setTrait('titles.mainTitle', 'Lorem ipsum dolor sit amet');
// to update a Trait using the current value
setTrait('title.subTitle', ({ value }) => value.toLowerCase());
```

Traits are type safe. Once set, a Trait type cannot change.
You can however unset a Trait by passing an `undefined` value.

## Selectors

**Selectors are derived Traits**. You can think of selectors as the output of passing a state to a pure function that executes some logic based on that state.

In Temper selectors are Traits whose value is a callback that uses the `get` helper method:

```jsx {4}
// This is a simple Trait
setTrait('radius', 5);
// This is a selector Trait
setTrait('circleArea', ({ get }) => Math.pow(get('radius'), 2) * Math.PI);
}
```
:::caution
Selectors **permanently** depend on their reference Trait.
When the reference Trait changes, the selector value is updated **automatically**.
Therefore, **you cannot manually update selectors once set**, since their value tightly depends on their base Trait.
:::

Selectors can also have multiple reference Traits.

```jsx {2}
setTrait('triangle', { base: 10, height: 5});
setTrait('triangleArea', ({ get }) => get('triangle.base') * get('triangle.height') / 2);
}
```
