---
category: Basic Operation
---

# NonUndefined

<TypeInfo category="Basic Operation" />

Exclude undefined from set T.

## Usage

```ts
import type { NonUndefined } from '@utype/core'

// Expect: string // [!code highlight]
type Ref = NonUndefined<string | undefined>
```
