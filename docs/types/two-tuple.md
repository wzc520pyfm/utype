---
category: Basic Operation
---

# TwoTuple

<TypeInfo category="Basic Operation" />

A Tuple consisting of two identical types.

## Usage

```ts
import type { TwoTuple } from '@utype/core'

// Expect: [string, string]
type TestType = TwoTuple<string>
```
