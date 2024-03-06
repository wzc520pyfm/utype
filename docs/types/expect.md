
# Expect

Only accept the 'true' type, typically used to determine if the result returned by 'Equal' is true.

## Usage

```ts twoslash
import type { Expect, Equal } from '@utype/shared'

// @ts-expect-error
type Case = Expect<false> // [!code error]
// @ts-expect-error
type Case2 = Expect<Equal<string, number>> // [!code error]
// Expect
type Case3 = Expect<Equal<string, string>> // [!code highlight]
```
