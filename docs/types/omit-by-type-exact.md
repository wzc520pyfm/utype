---
category: Generate Object
alias: OmitByValueExact
---

# OmitByTypeExact

<TypeInfo category="Generate Object" :alias="['OmitByValueExact']" />

From T remove a set of properties by value matching exact ValueType.

## Usage

```ts{9,11} twoslash
import type { OmitByTypeExact } from '@utype/core'

type Props = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
}

// Expect: { bar: number | undefined; faz: boolean; }
type OmitByTypeExactProps1 = OmitByTypeExact<Props, number>
// Expect: { foo: number; faz: boolean; }
type OmitByTypeExactProps2 = OmitByTypeExact<Props, number | undefined>
```
