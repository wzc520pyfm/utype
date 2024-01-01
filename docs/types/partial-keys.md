---
category: Get Object Keys
alias: OptionalKeys
---

# PartialKeys

<TypeInfo category="Get Object Keys" :alias="['OptionalKeys']" />

Get union type of keys that are partial in object type T.

## Usage

```ts
import type { PartialKeys } from '@utype/core'

type Prop = {
  name: string;
  age?: number;
  visible?: boolean;
}

// Expect: 'age' | 'visible' // [!code highlight]
type PartialKeysProp = PartialKeys<Prop>
```
