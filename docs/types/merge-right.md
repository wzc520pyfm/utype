---
category: Merge Object
---

# MergeRight

<TypeInfo category="Merge Object" />

Merge two types into a new type. Keys of the second type overrides keys of the first type.

## Usage

```ts{12-16}
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
