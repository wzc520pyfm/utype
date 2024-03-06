
# Get Started

## Installation

```bash
npm i @utype/core
```

## Usage Example

Simply importing the utility type you need from `@utype/core`

```ts twoslash
import type { Mutable } from '@utype/core'

type Props = { readonly name: string; }

// Expect: { name: string } // [!code highlight]
type MutableProp = Mutable<Props>
```

Refer to [type list](/types/mutable) for more details.
