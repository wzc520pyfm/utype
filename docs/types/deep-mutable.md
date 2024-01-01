---
category: Object Operation
---

# DeepMutable

<TypeInfo category="Object Operation" />

Make every parameter of an object - and its sub-objects recursively - mutable.

## Usage

```ts{11-17}
import type { DeepMutable } from '@utype/core'

type Prop = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  },
  readonly y: 'hey'
}

// Expect: {
//   x: {
//     a: 1,
//     b: 'hi'
//   }
//   y: 'hey'
// }
type DeepMutableProp = DeepMutable<Prop>
```
