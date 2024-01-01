---
category: Get Object Keys
---

# FunctionKeys

<TypeInfo category="Get Object Keys" />

Get union type of keys that are functions in object type T.

## Usage

```ts
import type { FunctionKeys } from '@utype/core'

type Prop = {
  name: string;
  setName: (name: string) => void;
  getName: () => string;
}

// Expect: 'setName' | 'getName' // [!code highlight]
type FunctionKeysProp = FunctionKeys<Prop>
```
