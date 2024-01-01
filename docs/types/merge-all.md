---
category: Merge Object
---

# MergeAll

<TypeInfo category="Merge Object" />

Merge variadic number of types into a new type. If the keys overlap, its values should be merged into an union.

## Usage

```ts
import type { MergeAll } from '@utype/core'

type Foo = { a: 1; b: 2 }
type Bar = { a: 2 }
type Baz = { c: 3 }

// Expect: { a: 1 | 2; b: 2; c: 3 } // [!code highlight]
type MergeAllResult = MergeAll<[Foo, Bar, Baz]>
```
