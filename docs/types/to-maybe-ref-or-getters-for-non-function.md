---
category: Reactive
---

# ToMaybeRefOrGettersForNonFunction

<TypeInfo category="Reactive" />

Mark the non-function property type of the object as [MaybeRefOrGetters](https://vuejs.org/api/utility-types.html#maybereforgetter).

## Usage

```ts twoslash
import type { ToMaybeRefOrGettersForNonFunction } from "@utype/vue";

type Prop = {
  name: string;
  getName: () => string;
};
// Expect: { name: MaybeRefOrGetters<string>; getName: () => string; } // [!code highlight]
type MyProp = ToMaybeRefOrGettersForNonFunction<Prop>;
```
