---
category: Merge Object
---

# MergeRight

Merge two types into a new type. Keys of the second type overrides keys of the first type.

## Usage

```ts
import type { MergeRight } from '@utype/core'

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
//   age: number;
//   sex: string;
// }
type MergeRightResult = MergeRight<Foo, Bar>
```
