---
category: Get Object Keys
---

# NonObjectKeys

<TypeInfo category="Get Object Keys" />

Get union type of keys that are non-object in object type T.

## Usage

```ts
import type { NonObjectKeys } from '@utype/core'

type Prop = {
  name: string;
  age: number;
  breakfast: { foods: string[]; };
}

// Expect: 'name' | 'age' // [!code highlight]
type NonObjectKeysProp = NonObjectKeys<Prop>
```
