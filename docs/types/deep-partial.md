---
category: Object Operation
alias: DeepOptional
---

# DeepPartial

<TypeInfo category="Object Operation" :alias="['DeepOptional']" />

Make every parameter of an object - and its sub-objects recursively - partial.

## Usage

```ts{11-17} twoslash
import type { DeepPartial } from '@utype/core'

type Props = {
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
type DeepPartialProps = DeepPartial<Props>
```
