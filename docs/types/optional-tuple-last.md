---
category: Basic Operation
---

# OptionalTupleLast

<TypeInfo category="Basic Operation" />

Make the last element of a tuple optional.

## Usage

```ts twoslash
import type { OptionalTupleLast } from '@utype/core'

type Tuple = [string, number, boolean];
// Expect: [string, number, boolean?] // [!code highlight]
type OptionalTuple = OptionalTupleLast<Tuple>;
```
