---
category: Merge Object
---

# MergeLeft

Merge two types into a new type. Keys of the first type overrides keys of the second type.

## Usage

```ts
import type { MergeLeft } from '@utype/core'

type Foo = {
  name: string;
  age: string;
}
type Bar = {
  age: number;
  sex: string;
}

// Expect: {
//   name: string;
//   age: string;
//   sex: string;
// }
type MergeLeftResult = MergeLeft<Foo, Bar>
```
