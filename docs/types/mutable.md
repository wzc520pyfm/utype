---
category: Object Operation
---

# Mutable

<TypeInfo category="Object Operation" />

Like Readonly, but it will remove the readonly of the object property.

## Usage

```ts twoslash
import type { Mutable } from '@utype/core'

type Props = { readonly name: string; }

// Expect: { name: string } // [!code highlight]
type MutableProps = Mutable<Props>
```
