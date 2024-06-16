import { UnionToIntersection } from '@utype/core'

/**
 * ToEmitsForEvents
 * @alias EventsToEmits
 * @description Converting Events to Emits
 * @example
 * ```ts
 *  type Prop = {
 *    onClick: (e: Event) => void;
 *    onMousedown: () => void;
 *  }
 *  // Expect: { (eventname: "click", e: Event): void; (eventname: "mousedown"): void; }
 *  type MyProp = ToEmitsForEvents<Prop>
 * ```
 */
export type ToEmitsForEvents<T extends object> = _ToEmitsForEvents<Required<T>>

/** @private */
type _ToEmitsForEvents<T extends object> = UnionToIntersection<
  {
    [K in keyof T]: K extends `on${infer U}`
      ? T[K] extends (...args: infer E) => infer R
        ? (eventname: Lowercase<U>, ...args: E) => R
        : never
      : never
  }[keyof T]
>

// alias

/**
 * EventsToEmits
 * @description Alias for ToEmitsForEvents
 */
export type EventsToEmits<T extends object> = ToEmitsForEvents<T>;
