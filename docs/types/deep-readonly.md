---
category: Object Operation
---

# DeepReadonly

<TypeInfo category="Object Operation" />

Make every parameter of an object - and its sub-objects recursively - readonly.

## Usage

```ts{11-17}
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