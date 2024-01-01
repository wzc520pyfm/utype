---
category: Merge Object
---

# MergeLeftAll

<TypeInfo category="Merge Object" />

Merge variadic number of types into a new type. If the keys overlap, earlier keys override later keys.

## Usage

```ts
import type { MergeLeftAll } from '@utype/core'

type Foo = { a: 1; b: 2 }
type Bar = { a: 2 }
type Baz = { c: 3 }

// Expect: { a: 1; b: 2; c: 3 } // [!code highlight]
type MergeLeftAllResult = MergeLeftAll<[Foo, Bar, Baz]>
```
