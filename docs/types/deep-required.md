---
category: Object Operation
---

# DeepRequired

<TypeInfo category="Object Operation" />

Make every parameter of an object - and its sub-objects recursively - required.

## Usage

```ts{11-17}
import type { DeepRequired } from '@utype/core'

type Prop = {
  x: {
    a?: 1
    b: 'hi'
  },
  y?: 'hey'
}

// Expect: {
//   x: {
//     a: 1,
//     b: 'hi'
//   }
//   y: 'hey'
// }
type DeepRequiredProp = DeepRequired<Prop>
```
