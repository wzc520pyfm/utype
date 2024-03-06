---
category: Get Object Keys
---

# NonObjectKeys

<TypeInfo category="Get Object Keys" />

Get union type of keys that are non-object in object type T.

## Usage

```ts twoslash
import type { NonObjectKeys } from '@utype/core'

type Props = {
  name: string;
  age: number;
  breakfast: { foods: string[]; };
}

// Expect: 'name' | 'age' // [!code highlight]
type NonObjectKeysProps = NonObjectKeys<Props>
```
