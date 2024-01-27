---
category: Generate Object
alias: GetRequired
---

# PickByRequired

<TypeInfo category="Generate Object" :alias="['GetRequired']" />

From T pick all required properties to generate a new object type.

## Usage

```ts
import type { PickByRequired } from '@utype/core'

type Prop = {
  foo: number;
  bar?: string;
}

// Expect: { foo: number; } // [!code highlight]
type PickByRequiredProp = PickByRequired<Prop>
```
