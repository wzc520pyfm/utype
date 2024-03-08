---
category: Generate Object
---

# Intersection

<TypeInfo category="Generate Object" />

From T pick properties that exist in U.

## Usage

```ts twoslash
import type { Intersection } from '@utype/core'

type Props = { name: string; age: number; visible: boolean }
type DefaultProps = { age: number; sex: string }

// Expect: { age: number; } // [!code highlight]
type IntersectionProps = Intersection<Props, DefaultProps>
```
