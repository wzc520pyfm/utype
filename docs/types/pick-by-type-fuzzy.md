---
category: Generate Object
alias: PickByValueFuzzy
---

# PickByTypeFuzzy

<TypeInfo category="Generate Object" :alias="['PickByValueFuzzy']" />

From T pick a set of properties by value fuzzy matching ValueType.

## Usage

```ts{9,11} twoslash
import type { PickByTypeFuzzy } from '@utype/core'

type Props = {
  foo: number;
  bar?: number;
  faz: boolean;
}

// Expect: { bar?: number; }
type PickByTypeFuzzyProps1 = PickByTypeFuzzy<Props, undefined>
// Expect: { bar?: number; faz: boolean; }
type PickByTypeFuzzyProps2 = PickByTypeFuzzy<Props, boolean | undefined>
```
