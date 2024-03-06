---
category: Basic Operation
---

# Nullable

<TypeInfo category="Basic Operation" />

Maybe null or undefined from set T.

## Usage

```ts twoslash
import type { Nullable } from '@utype/core'

// Expect: string | null | undefined // [!code highlight]
type Ref = Nullable<string>
```
