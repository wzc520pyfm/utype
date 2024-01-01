---
category: String Operation
---

# KebabCase

<TypeInfo category="String Operation" />

Replace the camelCase or PascalCase string with kebab-case.

## Usage

```ts{3,5}
import type { KebabCase } from '@utype/core'

// Expect: "foo-bar-baz"
type FooBarBaz = KebabCase<"fooBarBaz">
// Expect: "foo-bar-baz"
type FooBarBaz2 = KebabCase<"FooBarBaz">
```
