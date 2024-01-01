---
category: Generate Object
alias: PickByValueFuzzy
---

# PickByTypeFuzzy

<TypeInfo category="Generate Object" :alias="['PickByValueFuzzy']" />

From T pick a set of properties by value fuzzy matching ValueType.

## Usage

```ts{9,11}
import type { PickByTypeFuzzy } from '@utype/core'

type Prop = {
  foo: number;
  bar?: number;
  faz: boolean;
}

// Expect: { bar?: number; }
type PickByTypeFuzzyProp1 = PickByTypeFuzzy<Prop, undefined>
// Expect: { bar?: number; faz: boolean; }
type PickByTypeFuzzyProp2 = PickByTypeFuzzy<Prop, boolean | undefined>
```
