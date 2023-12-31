---
category: Merge Object
---

# MergeRightAll

Merge variadic number of types into a new type. If the keys overlap, later keys override earlier keys.

## Usage

```ts
import type { MergeRightAll } from '@utype/core'

type Foo = { a: 1; b: 2 }
type Bar = { a: 2 }
type Baz = { c: 3 }

// Expect: { a: 2; b: 2; c: 3 }
type MergeRightAllResult = MergeRightAll<[Foo, Bar, Baz]>
```
