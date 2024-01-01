---
category: Get Object Keys
---

# RequiredKeys

<TypeInfo category="Get Object Keys" />

Get union type of keys that are required in object type T.

## Usage

```ts
import type { RequiredKeys } from '@utype/core'

type Prop = {
  name: string;
  age: number;
  visible?: boolean;
}

// Expect: 'name' | 'age' // [!code highlight]
type RequiredKeysProp = RequiredKeys<Prop>
```
