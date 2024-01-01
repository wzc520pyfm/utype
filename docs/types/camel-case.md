---
category: String Operation
---

# CamelCase

<TypeInfo category="String Operation" />

Replace the snake_case or kebab-case string with camelCase.

## Usage

```ts{3,5}
import type { CamelCase } from '@utype/core'

// Expect: "fooBarBaz"
type FooBarBaz = CamelCase<"foo_bar_baz">
// Expect: "fooBarBaz"
type FooBarBaz = CamelCase<"foo-bar-baz">
```
