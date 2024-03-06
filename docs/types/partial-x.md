---
category: X Series
alias: PartialByKeys
---

# PartialX

<TypeInfo category="X Series" :alias="['PartialByKeys']" />

Constructs a type by setting the properties specified by `K`(string literal or union of string literals) to partial from `T`.

## Usage

```ts twoslash
import type { PartialX } from '@utype/core'

type Props = {
  name: string;
  age: number;
  visible: boolean;
}

// Expect: { name?: string; age?: number; visible: boolean; } // [!code highlight]
type PartialXProps = PartialX<Props, 'name' | 'age'>
// @ts-expect-error
type Error = PartialX<Props, "sports"> // [!code error]
```
