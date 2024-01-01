---
category: Get Object Keys
---

# ObjectKeys

<TypeInfo category="Get Object Keys" />

Get union type of keys that are object in object type T.

## Usage

```ts
import type { ObjectKeys } from '@utype/core'

type Prop = {
  name: string;
  breakfast: { foods: string[]; };
  dinner: { foods: string[]; };
}

// Expect: 'breakfast' | 'dinner' // [!code highlight]
type ObjectKeysProp = ObjectKeys<Prop>
```
