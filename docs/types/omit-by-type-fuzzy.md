---
category: Generate Object
alias: OmitByValueFuzzy
---

# OmitByTypeFuzzy

<TypeInfo category="Generate Object" :alias="['OmitByValueFuzzy']" />

From T remove a set of properties by value fuzzy matching ValueType.

## Usage

```ts{9,11}
import type { OmitByTypeFuzzy } from '@utype/core'

type Prop = {
  foo: number;
  bar?: number;
  faz: boolean;
}

// Expect: { foo: number; faz: boolean }
type OmitByTypeFuzzyProp1 = OmitByTypeFuzzy<Prop, undefined>
// Expect: { foo: number }
type OmitByTypeFuzzyProp2 = OmitByTypeFuzzy<Prop, boolean | undefined>
```
