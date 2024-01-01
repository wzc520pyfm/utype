---
category: Generate Object
alias: OmitByValueExact
---

# OmitByTypeExact

<TypeInfo category="Generate Object" :alias="['OmitByValueExact']" />

From T remove a set of properties by value matching exact ValueType.

## Usage

```ts{9,11}
import type { OmitByTypeExact } from '@utype/core'

type Prop = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
}

// Expect: { bar: number | undefined; faz: boolean; }
type OmitByTypeExactProp1 = OmitByTypeExact<Prop, number>
// Expect: { foo: number; faz: boolean; }
type OmitByTypeExactProp2 = OmitByTypeExact<Prop, number | undefined>
```
