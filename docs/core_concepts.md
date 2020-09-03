---
id: core_concepts
title: Core Concepts
sidebar_label: Core Concepts
---

## Traits

Temper states are called **Traits**.

Traits are globally shared units of state that components can subscribe to.
**Traits can be read and written from any component in the application tree.**
Subscribed components will rerender everytime the Trait value changes.

**Traits can be used in place of React states.**
If the same Trait is used from multiple components, all those components share their state.

```js {1}
setTrait('id', '106');
```

**Traits are type safe**. Once set, a Trait type cannot change.
You can however unset a Trait by passing an `undefined` value.

```js {3}
// This would throw a type error
// since we previously initialize `id` as string
setTrait('id', 106);
```

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
:::

Selectors can also have multiple reference Traits.

```jsx {2}
setTrait('triangle', { base: 10, height: 5});
setTrait('triangleArea', ({ get }) => get('triangle.base') * get('triangle.height') / 2);
}
```

## Nested Traits

Temper encourages you to wrap related Traits in a single object.

**When a Trait is an object, each attribute (at any level) will become a new Trait that is individually updatable and subscribable**.

```js {2}
setTrait('titles', { mainTitle: "Lorem ipsum", subTitle: 'Aliquam suscipit'});
const [mainTitle, setMainTitle] = useTraitValue('titles.mainTitle');
setMainTitle('Lorem ipsum dolor sit amet');
```

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

