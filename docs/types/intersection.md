---
category: Generate Object
---

# Intersection

<TypeInfo category="Generate Object" />

From T pick properties that exist in U.

## Usage

```ts
import type { Intersection } from '@utype/core'

type Prop = { name: string; age: number; visible: boolean }
type DefaultProps = { age: number; sex: string }

// Expect: { age: number; } // [!code highlight]
type IntersectionProp = Intersection<Prop, DefaultProps>
```
