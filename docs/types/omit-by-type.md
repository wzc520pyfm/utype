---
category: Generate Object
alias: OmitByValue
---

# OmitByType

<TypeInfo category="Generate Object" :alias="['OmitByValue']" />

From T remove a set of properties by value matching ValueType.

## Usage

```ts{9,11}
import type { OmitByType } from '@utype/core'

type Prop = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
}

// Expect: { bar: number | undefined; faz: boolean; }
type OmitByTypeProp1 = OmitByType<Prop, number>
// Expect: { faz: boolean; }
type OmitByTypeProp2 = OmitByType<Prop, number | undefined>
```
