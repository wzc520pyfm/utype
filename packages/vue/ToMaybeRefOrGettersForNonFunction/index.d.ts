import { FunctionKeys, NonUndefined } from "@utype/core";
import { MaybeRefOrGetter } from "vue";

/**
 * ToMaybeRefOrGettersForNonFunction
 * @description Mark the non-function property type of the object as [MaybeRefOrGetters](https://vuejs.org/api/utility-types.html#maybereforgetter)
 * @example
 * ```ts
 *  type Prop = {
 *    name: string;
 *    getName: () => string;
 *  }
 *  // Expect: { name: MaybeRefOrGetters<string>; getName: () => string; }
 *  type MyProp = ToMaybeRefOrGettersForNonFunction<Prop>
 * ```
 */
export type ToMaybeRefOrGettersForNonFunction<T extends object> = {
  [P in keyof T]?: P extends FunctionKeys<T> ? T[P] : MaybeRefOrGetter<NonUndefined<T[P]>>
}
