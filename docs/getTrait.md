---
id: getTrait
title: getTrait
sidebar_label: getTrait
---

`getTrait` returns the value of a Trait at the time it's called, so you can read its value without subscribing.

```js {7}
// using ES6 modules
import { getTrait } from 'temperjs'

// using CommonJS modules
const getTrait = require('temperjs').getTrait

const height = getTrait('height');
```
