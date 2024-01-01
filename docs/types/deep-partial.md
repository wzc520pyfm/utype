---
category: Object Operation
alias: DeepOptional
---

# DeepPartial

<TypeInfo category="Object Operation" :alias="['DeepOptional']" />

Make every parameter of an object - and its sub-objects recursively - partial.

## Usage

```ts
import type { DeepPartial } from '@utype/core'

type Prop = {
  x: {
    a: 1
    b: 'hi'
  },
  y: 'hey'
}

// Expect: {
//   x?: {
//     a?: 1,
//     b?: 'hi'
//   }
//   y?: 'hey'
// }
type DeepPartialProp = DeepPartial<Prop>
```
