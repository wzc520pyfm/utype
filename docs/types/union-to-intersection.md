---
category: Generate Object
alias: Union2Intersection UToI U2I
---

# UnionToIntersection

<TypeInfo category="Generate Object" :alias="['Union2Intersection', 'UToI', 'U2I']" />

Get intersection type given union type U.

## Usage

```ts twoslash
import type { UnionToIntersection } from '@utype/core'

type Props = { name: string } | { age: number } | { visible: boolean }

// Expect: { name: string } & { age: number } & { visible: boolean } // [!code highlight]
type UnionToIntersectionProps = UnionToIntersection<Props>

// Expect: 'foo' & 42 & true // [!code highlight]
type Case = UnionToIntersection<'foo' | 42 | true>
```
