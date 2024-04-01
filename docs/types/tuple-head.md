---
category: \-
alias: FirstAsTuple
---

# TupleHead

<TypeInfo category="-" :alias="['FirstAsTuple']" />

Extracting the first element of a tuple as a tuple type.

## Usage

```ts twoslash
import type { TupleHead } from '@utype/shared'

type Prop = [a: string, b: number, c: boolean]
// Expect: [a: string] // [!code highlight]
type TupleHeadProp = TupleHead<Prop>
```
