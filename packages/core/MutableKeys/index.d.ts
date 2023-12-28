import { Equal } from "@utility-ts/shared";
import { Mutable, NonNeverX, NonUndefined } from "@utility-ts/core";

/**
 * MutableKeys
 * @description Get union type of keys that are mutable (not readonly) in object type T.
 * @example
 *  type Prop = {
 *      readonly name: string;
 *      age: number;
 *      visible: boolean;
 *  }
 *  // Expect: 'age' | 'visible'
 *  type MutableKeysProp = MutableKeys<Prop>
 */
export type MutableKeys<
  T extends object,
  R extends Record<keyof T, unknown> = Mutable<T>
> = NonUndefined<
  NonNeverX<{
    [K in keyof T]: Equal<Pick<T, K>, Pick<R, K>> extends true ? K : never;
  }>
>;
