
# Merge

Merge two types into a new type. If the keys overlap, its values should be merged into an union.

## Usage

```ts
import type { Merge } from '@utype/core'

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
//   age: number | string;
//   sex: string;
// }
type MergeResult = Merge<Foo, Bar>
```
