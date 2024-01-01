---
category: Basic Operation
---

# Nullable

<TypeInfo category="Basic Operation" />

Maybe null or undefined from set T.

## Usage

```ts
import type { Nullable } from '@utype/core'

// Expect: string | null | undefined
type Ref = Nullable<string>
```
