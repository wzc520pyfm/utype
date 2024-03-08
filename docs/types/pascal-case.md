---
category: String Operation
---

# PascalCase

<TypeInfo category="String Operation" />

Replace the snake_case or kebab-case string with PascalCase.

## Usage

```ts{3,5} twoslash
import type { PascalCase } from '@utype/core'

// Expect: "FooBarBaz"
type FooBarBaz = PascalCase<"foo_bar_baz">
// Expect: "FooBarBaz"
type FooBarBaz2 = PascalCase<"foo-bar-baz">
```
