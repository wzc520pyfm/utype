---
category: Get Object Keys
---

# ReadonlyKeys

<TypeInfo category="Get Object Keys" />

Get union type of keys that are readonly in object type T.

## Usage

```ts twoslash
import type { ReadonlyKeys } from '@utype/core'

type Props = {
  readonly name: string;
  readonly age: number;
  visible: boolean;
}

// Expect: 'name' | 'age' // [!code highlight]
type ReadonlyKeysProps = ReadonlyKeys<Props>
```
