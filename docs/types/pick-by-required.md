---
category: Generate Object
alias: GetRequired
---

# PickByRequired

<TypeInfo category="Generate Object" :alias="['GetRequired']" />

From T pick all required properties to generate a new object type.

## Usage

```ts twoslash
import type { PickByRequired } from '@utype/core'

type Props = {
  foo: number;
  bar?: string;
}

// Expect: { foo: number; } // [!code highlight]
type PickByRequiredProps = PickByRequired<Props>
```
