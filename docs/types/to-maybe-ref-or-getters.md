---
category: Reactive
---

# ToMaybeRefOrGetters

<TypeInfo category="Reactive" />

Mark the object's property type as [MaybeRefOrGetters](https://vuejs.org/api/utility-types.html#maybereforgetter).

## Usage

```ts twoslash
import type { ToMaybeRefOrGetters } from "@utype/vue";

type Prop = {
  name: string;
  age: number;
};
// Expect: { name: MaybeRefOrGetters<string>; age: MaybeRefOrGetters<number>; } // [!code highlight]
type MyProp = ToMaybeRefOrGetters<Prop>;
```
