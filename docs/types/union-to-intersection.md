---
category: Generate Object
alias: Union2Intersection UToI U2I
---

# UnionToIntersection

<TypeInfo category="Generate Object" :alias="['Union2Intersection', 'UToI', 'U2I']" />

Get intersection type given union type U.

## Usage

```ts
import type { UnionToIntersection } from '@utype/core'

type Prop = { name: string } | { age: number } | { visible: boolean }

// Expect: { name: string } & { age: number } & { visible: boolean } // [!code highlight]
type UnionToIntersectionProp = UnionToIntersection<Prop>

// Expect: 'foo' & 42 & true // [!code highlight]
type Case = UnionToIntersection<'foo' | 42 | true>
```
