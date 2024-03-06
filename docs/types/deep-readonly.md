---
category: Object Operation
---

# DeepReadonly

<TypeInfo category="Object Operation" />

Make every parameter of an object - and its sub-objects recursively - readonly.

## Usage

```ts{11-17} twoslash
import type { DeepReadonly } from '@utype/core'

type Props = {
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
type DeepReadonlyProps = DeepReadonly<Props>
```