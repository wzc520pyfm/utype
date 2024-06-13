---
category: Generate Object
---

# Diff

<TypeInfo category="Generate Object" />

Get the types that are not common in both T and U.

## Usage

```ts twoslash
import type { Diff } from '@utype/core'

type Prop = { name: string; age: number; visible: boolean }
type DefaultProps = { age: number; sex: string }

// Expect: { name: string; visible: boolean; sex: string } // [!code highlight]
type DiffProp = Diff<Prop, DefaultProps>
```