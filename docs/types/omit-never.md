---
category: Basic Operation
---

# OmitNever

<TypeInfo category="Basic Operation" />

Get Union type of object property types, but filtered out never types.

## Usage

```ts twoslash
import type { OmitNever } from '@utype/core'

type Props = {
  name: string;
  age: never;
  visible: boolean;
}

// Expect: string | boolean // [!code highlight]
type OmitNeverProps = OmitNever<Props>
```
