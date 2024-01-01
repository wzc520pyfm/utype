
# Expect

Only accept the 'true' type, typically used to determine if the result returned by 'Equal' is true.

## Usage

```ts
import type { Expect } from '@utype/shared'

// ts-expect-error
type Case = Expect<false> // [!code error]
// ts-expect-error
type Case = Expect<Equal<string, number>> // [!code error]
// Expect
type Case = Expect<Equal<string, string>> // [!code highlight]
```
