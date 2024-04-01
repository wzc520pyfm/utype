---
category: Basic Operation
---

# TwoTuple

<TypeInfo category="Basic Operation" />

A Tuple consisting of two identical types.

## Usage

```ts twoslash
import type { TwoTuple } from '@utype/shared'

// Expect: [string, string] // [!code highlight]
type TestType = TwoTuple<string>
```
