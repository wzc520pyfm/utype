---
category: \-
alias: FirstAsTuple
---

# TupleHead

<TypeInfo category="-" :alias="['FirstAsTuple']" />

Extracting the first element of a tuple as a tuple type.

## Usage

```ts
import type { TupleHead } from '@utype/core'

type Prop = [a: string, b: number, c: boolean]
// Expect: [a: string] // [!code highlight]
type TupleHeadProp = TupleHead<Prop>
```
