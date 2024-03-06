---
category: Get Object Keys
alias: OptionalKeys
---

# PartialKeys

<TypeInfo category="Get Object Keys" :alias="['OptionalKeys']" />

Get union type of keys that are partial in object type T.

## Usage

```ts twoslash
import type { PartialKeys } from '@utype/core'

type Props = {
  name: string;
  age?: number;
  visible?: boolean;
}

// Expect: 'age' | 'visible' // [!code highlight]
type PartialKeysProps = PartialKeys<Props>
```
