---
category: Generate Object
alias: PickByValueExact
---

# PickByTypeExact

<TypeInfo category="Generate Object" :alias="['PickByValueExact']" />

From T pick a set of properties by value matching exact ValueType.

## Usage

```ts{9,11}
import type { PickByTypeExact } from '@utype/core'

type Prop = {
  foo: number;
  bar: number | undefined;
  faz: string;
}

// Expect: { foo: number; }
type PickByTypeExactProp1 = PickByTypeExact<Prop, number>
// Expect: { bar: number | undefined; }
type PickByTypeExactProp2 = PickByTypeExact<Prop, number | undefined>
```
