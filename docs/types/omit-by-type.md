---
category: Generate Object
alias: OmitByValue
---

# OmitByType

<TypeInfo category="Generate Object" :alias="['OmitByValue']" />

From T remove a set of properties by value matching ValueType.

## Usage

```ts{9,11} twoslash
import type { OmitByType } from '@utype/core'

type Props = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
}

// Expect: { bar: number | undefined; faz: boolean; }
type OmitByTypeProps1 = OmitByType<Props, number>
// Expect: { faz: boolean; }
type OmitByTypeProps2 = OmitByType<Props, number | undefined>
```
