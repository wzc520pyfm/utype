---
category: Merge Object
---

# MergeRightAll

<TypeInfo category="Merge Object" />

Merge variadic number of types into a new type. If the keys overlap, later keys override earlier keys.

## Usage

```ts twoslash
import type { MergeRightAll } from '@utype/core'

type Foo = { a: 1; b: 2 }
type Bar = { a: 2 }
type Baz = { c: 3 }

// Expect: { a: 2; b: 2; c: 3 } // [!code highlight]
type MergeRightAllResult = MergeRightAll<[Foo, Bar, Baz]>
```
