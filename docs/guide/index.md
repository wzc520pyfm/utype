# Get Started

## Installation

::: code-group

```bash [npm]
npm install @utype/core --save-dev
```

```bash [yarn]
yarn add @utype/core -D
```

```bash [pnpm]
pnpm add @utype/core -D
```
:::

## Usage Example

Simply importing the utility type you need from `@utype/core`

```ts twoslash
import type { Mutable } from '@utype/core'

type Props = { readonly name: string };

// Expect: { name: string } // [!code highlight]
type MutableProp = Mutable<Props>
```

Refer to [type list](/types/mutable) for more details.
