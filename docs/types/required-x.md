---
category: X Series
alias: RequiredByKeys
---

# PartialX

<TypeInfo category="X Series" :alias="['RequiredByKeys']" />

Constructs a type by setting the properties specified by `K`(string literal or union of string literals) to required from `T`.

## Usage

```ts
import type { RequiredX } from '@utype/core'

type Prop = {
  name?: string;
  age?: number;
  visible?: boolean;
}

// Expect: { name: string; age: number; visible?: boolean; } // [!code highlight]
type RequiredXProp = RequiredX<Prop, 'name' | 'age'>
// @ts-expect-error
type Error = RequiredX<Prop, "sports"> // [!code error]
```
