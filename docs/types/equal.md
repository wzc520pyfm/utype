
# Equal

Compare whether two types are equal.

## Usage

```ts{3} twoslash
import type { Equal } from '@utype/shared'

// Expect: false
type Case = Equal<string, number>
```
