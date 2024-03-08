---
category: Get Object Keys
---

# NonFunctionKeys

<TypeInfo category="Get Object Keys" />

Get union type of keys that are non-functions in object type T.

## Usage

```ts twoslash
import type { NonFunctionKeys } from '@utype/core'

type Props = {
  name: string;
  age: number;
  setName: (name: string) => void;
}

// Expect: 'name' | 'age' // [!code highlight]
type NonFunctionKeysProps = NonFunctionKeys<Props>
```
