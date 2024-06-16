---
category: Reactive
alias: ToEmitsForEvents
---

# ToEmitsForEvents

<TypeInfo category="Reactive" :alias="['EventsToEmits']" />

Converting Events to Emits.

## Usage

```ts twoslash
import type { ToEmitsForEvents } from '@utype/vue'

type Props = {
  onClick: (e: Event) => void;
  onMousedown: () => void;
}

// Expect: { (eventname: "click", e: Event): void; (eventname: "mousedown"): void; } // [!code highlight]
type MyProp = ToEmitsForEvents<Prop>
```
