---
category: X Series
alias: ReadonlyByKeys
---

# ReadonlyX

<TypeInfo category="X Series" :alias="['ReadonlyByKeys']" />

Constructs a type by setting the properties specified by `K`(string literal or union of string literals) to readonly from `T`.

## Usage

```ts twoslash
import type { ReadonlyX } from '@utype/core'

type Props = {
  name: string;
  age: number;
  visible: boolean;
}

// Expect: { readonly name: string; readonly age: number; visible: boolean; } // [!code highlight]
type ReadonlyXProps = ReadonlyX<Props, 'name' | 'age'>
```
