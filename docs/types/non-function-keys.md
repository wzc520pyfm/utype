---
category: Get Object Keys
---

# NonFunctionKeys

<TypeInfo category="Get Object Keys" />

Get union type of keys that are non-functions in object type T.

## Usage

```ts
import type { NonFunctionKeys } from '@utype/core'

type Prop = {
  name: string;
  age: number;
  setName: (name: string) => void;
}

// Expect: 'name' | 'age' // [!code highlight]
type NonFunctionKeysProp = NonFunctionKeys<Prop>
```
