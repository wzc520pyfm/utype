---
category: Object Operation
---

# DeepReadonly

Make every parameter of an object - and its sub-objects recursively - readonly.

## Usage

```ts
import type { DeepReadonly } from '@utype/core'

type Prop = {
  x: {
    a: 1
    b: 'hi'
  },
  y: 'hey'
}

// Expect: {
//   readonly x: {
//     readonly a: 1,
//     readonly b: 'hi'
//   }
//   readonly y: 'hey'
// }
type DeepReadonlyProp = DeepReadonly<Prop>
```