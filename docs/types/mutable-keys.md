---
category: Get Object Keys
---

# MutableKeys

<TypeInfo category="Get Object Keys" />

Get union type of keys that are mutable (not readonly) in object type T.

## Usage

```ts twoslash
import type { MutableKeys } from '@utype/core'

type Props = {
  readonly name: string;
  age: number;
  visible: boolean;
}

// Expect: 'age' | 'visible' // [!code highlight]
type MutableKeysProps = MutableKeys<Props>
```
