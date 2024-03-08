
# DeepKeys

Get the union type composed of all keys from nested objects.

## Usage

```ts twoslash
import type { DeepKeys } from '@utype/core'

type Props = {
  a: string;
  b: number;
  c: {
    d: {
      e: string;
    }
  }
}

// Expect: 'a' | 'b' | 'c' | 'd' | 'e' // [!code highlight]
type DeepKeysProps = DeepKeys<Props>
```
