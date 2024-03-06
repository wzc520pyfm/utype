---
category: Generate Object
alias: OmitByValueFuzzy
---

# OmitByTypeFuzzy

<TypeInfo category="Generate Object" :alias="['OmitByValueFuzzy']" />

From T remove a set of properties by value fuzzy matching ValueType.

## Usage

```ts{9,11} twoslash
import type { OmitByTypeFuzzy } from '@utype/core'

type Props = {
  foo: number;
  bar?: number;
  faz: boolean;
}

// Expect: { foo: number; faz: boolean }
type OmitByTypeFuzzyProps1 = OmitByTypeFuzzy<Props, undefined>
// Expect: { foo: number }
type OmitByTypeFuzzyProps2 = OmitByTypeFuzzy<Props, boolean | undefined>
```
