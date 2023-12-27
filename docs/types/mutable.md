
# Mutable

Like Readonly, but it will remove the readonly of the object property.

## Usage

```ts
import type { Mutable } from '@unts-utility/core'

type Props = { readonly name: string; }

// Expect: { name: string }
type MutableProp = Mutable<Prop>
```