---
category: Generate Object
alias: PickByValue
---

# PickByType

<TypeInfo category="Generate Object" :alias="['PickByValue']" />

From T pick a set of properties by value matching ValueType.

## Usage

```ts{9,11} twoslash
import type { PickByType } from '@utype/core'

type Props = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
}

// Expect: { foo: number; }
type PickByTypeProps1 = PickByType<Props, number>
// Expect: { foo: number; bar: number | undefined; }
type PickByTypeProps2 = PickByType<Props, number | undefined>
```
