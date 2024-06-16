import { NonUndefined } from '@utype/core'
import type { MaybeRefOrGetter } from 'vue'

/**
 * ToMaybeRefOrGetters
 * @description Mark the object's property type as [MaybeRefOrGetters](https://vuejs.org/api/utility-types.html#maybereforgetter)
 * @example
 * ```ts
 *  type Prop = {
 *    name: string;
 *    age: number;
 *  }
 *  // Expect: { name: MaybeRefOrGetters<string>; age: MaybeRefOrGetters<number>; }
 *  type MyProp = ToMaybeRefOrGetters<Prop>
 * ```
 */
export type ToMaybeRefOrGetters<T> = {
  [P in keyof T]?: MaybeRefOrGetter<NonUndefined<T[P]>>
}
