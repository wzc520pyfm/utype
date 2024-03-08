---
category: String Operation
---

# SnakeCase

<TypeInfo category="String Operation" />

Replace the camelCase or PascalCase string with snake_case.

## Usage

```ts{3,5} twoslash
import type { SnakeCase } from '@utype/core'

// Expect: "foo_bar_baz"
type FooBarBaz = SnakeCase<"fooBarBaz">
// Expect: "foo_bar_baz"
type FooBarBaz2 = SnakeCase<"FooBarBaz">
```
