---
category: X Series
alias: DeepReadonlyByKeys
---

# DeepReadonlyX

<TypeInfo category="X Series" :alias="['DeepReadonlyByKeys']" />

Make specified properties in the object readonly, regardless of how deeply nested they are.

## Usage

```ts{10-16} twoslash
import type { DeepReadonlyX } from '@utype/core'

type Props = {
  x: {
    a: 1
    b: 'hi'
  },
  y: 'hey'
}
// Expect: {
//   x: {
//     a: 1,
//     readonly b: 'hi'
//   }
//   readonly y: 'hey'
// }
type DeepReadonlyXProps = DeepReadonlyX<Props, 'b' | 'y'>
```
