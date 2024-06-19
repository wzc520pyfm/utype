import type { ToEmitsForEvents } from "@utype/vue";
import { Equal, Expect } from "@utype/shared";

type EventsCase = {
  onPress?: (e: Event) => void
  onPressStart: (e: Event, str?: string) => void
};
type EmitsCase = {
  (eventname: "press", e: Event): void
} & {
  (eventname: "pressstart", e: Event, str?: string): void
};

type cases = [
  Expect<Equal<ToEmitsForEvents<EventsCase>, EmitsCase>>
];
