---
category: Generate Object
---

# Subtract

<TypeInfo category="Generate Object" />

From T remove properties that exist in U.

## Usage

```ts
import type { Subtract } from '@utype/core'

type Prop = { name: string; age: number; visible: boolean }
type DefaultProps = { age: number; sex: string }

// Expect: { name: string; visible: boolean } // [!code highlight]
type SubtractProp = Subtract<Prop, DefaultProps>
```