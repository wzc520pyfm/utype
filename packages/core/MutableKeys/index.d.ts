import { Equal } from "@utype/shared";
import { Mutable, OmitNever, NonUndefined } from "@utype/core";

/**
 * MutableKeys
 * @description Get union type of keys that are mutable (not readonly) in object type T.
 * @example
 * ```ts
 *  type Prop = {
 *      readonly name: string;
 *      age: number;
 *      visible: boolean;
 *  }
 *  // Expect: 'age' | 'visible'
 *  type MutableKeysProp = MutableKeys<Prop>
 * ```
 */
export type MutableKeys<
  T extends object,
  R extends Record<keyof T, unknown> = Mutable<T>
> = NonUndefined<
  OmitNever<{
    [K in keyof T]: Equal<Pick<T, K>, Pick<R, K>> extends true ? K : never;
  }>
>;
