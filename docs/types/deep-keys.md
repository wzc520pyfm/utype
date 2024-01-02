
# DeepKeys

Get the union type composed of all keys from nested objects.

## Usage

```ts
import type { DeepKeys } from '@utype/core'

type Prop = {
  a: string;
  b: number;
  c: {
    d: {
      e: string;
    }
  }
}

// Expect: 'a' | 'b' | 'c' | 'd' | 'e' // [!code highlight]
type DeepKeysProp = DeepKeys<Prop>
```
