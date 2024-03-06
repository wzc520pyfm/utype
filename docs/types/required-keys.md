---
category: Get Object Keys
---

# RequiredKeys

<TypeInfo category="Get Object Keys" />

Get union type of keys that are required in object type T.

## Usage

```ts twoslash
import type { RequiredKeys } from '@utype/core'

type Props = {
  name: string;
  age: number;
  visible?: boolean;
}

// Expect: 'name' | 'age' // [!code highlight]
type RequiredKeysProps = RequiredKeys<Props>
```
