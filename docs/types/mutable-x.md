---
category: X Series
alias: MutableByKeys
---

# MutableX

<TypeInfo category="X Series" :alias="['MutableByKeys']" />

Constructs a type by setting the properties specified by `K`(string literal or union of string literals) to mutable from `T`.

## Usage

```ts
import type { MutableX } from '@utype/core'

type Prop = {
  readonly name: string;
  readonly age: number;
  readonly visible: boolean;
}

// Expect: { name: string; age: number; readonly visible: boolean; } // [!code highlight]
type MutableXProp = MutableX<Prop, 'name' | 'age'>
```
