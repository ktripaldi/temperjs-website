---
id: withTemper
title: withTemper
sidebar_label: withTemper
---

If you want to use Temper states, you need to wrap your component (preferably the root component) with the hoc `withTemper`.

```jsx {10}
// using ES6 modules
import { withTemper } from 'temperjs';
// using CommonJS modules
const withTemper = require('temperjs').withTemper

function App() {
  return <h1>Hello, world!</h1>
}

export default withTemper(App);
```

You can also pass it a custom configuration:

```jsx {1-5}
export default withTemper(App, {
  pathSeparator: '>',
  storageService: new StorageService(),
  debug: true
});
```

- `pathSeparator` lets you set an alternative path separator.
If you change the path separator to `>` for instance, you'll be able to reference nested Trait like this: `exampleTrait>subTrait`.

- `storageService` lets you set a service to persist and retrieve Traits.
The storage service must match the following interface:
```ts
interface StorageService {
  set: (key: string, value: unknown) => void; // This method persists Traits to the storage of your choice when they're updated
  get: (key: string) => unknown; // This method retrieve Traits from the storage of your choice when they're used the first time
  clear: (key: string) => unknown; // This method delete Traits from the storage of your choice when they're set to `undefined`
}
```

- `debug`, if set to `true`, will log useful information on the browser console.
