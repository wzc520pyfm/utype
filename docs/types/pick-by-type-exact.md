---
category: Generate Object
alias: PickByValueExact
---

# PickByTypeExact

<TypeInfo category="Generate Object" :alias="['PickByValueExact']" />

From T pick a set of properties by value matching exact ValueType.

## Usage

```ts{9,11} twoslash
import type { PickByTypeExact } from '@utype/core'

type Props = {
  foo: number;
  bar: number | undefined;
  faz: string;
}

// Expect: { foo: number; }
type PickByTypeExactProps1 = PickByTypeExact<Props, number>
// Expect: { bar: number | undefined; }
type PickByTypeExactProps2 = PickByTypeExact<Props, number | undefined>
```
