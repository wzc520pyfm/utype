---
category: Generate Object
alias: PickByValue
---

# PickByType

<TypeInfo category="Generate Object" :alias="['PickByValue']" />

From T pick a set of properties by value matching ValueType.

## Usage

```ts{9,11}
import type { PickByType } from '@utype/core'

type Prop = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
}

// Expect: { foo: number; }
type PickByTypeProp1 = PickByType<Prop, number>
// Expect: { foo: number; bar: number | undefined; }
type PickByTypeProp2 = PickByType<Prop, number | undefined>
```
