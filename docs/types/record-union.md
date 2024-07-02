---
category: Basic Operation
alias: Record2Union RToU R2U
---

# RecordToUnion

<TypeInfo category="Basic Operation" :alias="['Record2Union', 'RToU', 'R2U']" />

Get union type given record type U.

## Usage

```ts twoslash
import type { RecordToUnion } from '@utype/shared'

type Props = { name: string; visible: boolean; }

// Expect: string | boolean // [!code highlight]
type RecordToUnionProps = RecordToUnion<Props>
```
