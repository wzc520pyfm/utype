import { DeepKeys, Keys, OnlyObject } from "@utility-ts/shared";
import { MergeRight } from "@utility-ts/core";

/**
 * DeepReadonlyX
 * @description Make specified properties in the object readonly, regardless of how deeply nested they are.
 * @alias DeepReadonlyByKeys
 * @example
 *  type Prop = {
 *    x: {
 *      a: 1
 *      b: 'hi'
 *    },
 *    y: 'hey'
 *  }
 *  // Expect: {
 *  //   x: {
 *  //     a: 1,
 *  //     readonly b: 'hi'
 *  //   }
 *  //   readonly y: 'hey'
 *  // }
 * type DeepReadonlyXProp = DeepReadonlyX<Prop, 'b' | 'y'>
 */
// todo: The P should be constrained within DeepKeys<T>
export type DeepReadonlyX<T, P = DeepKeys<T>> = MergeRight<
  {
    [K in Exclude<Keys<T>, P>]: K extends P
      ? never
      : T[K] extends OnlyObject
      ? DeepReadonlyX<T[K], P>
      : T[K];
  },
  {
    readonly [K in Extract<Keys<T>, P>]: T[K] extends OnlyObject
      ? DeepReadonlyX<T[K], P>
      : K extends P
      ? T[K]
      : never;
  }
>;

// alias

/**
 * DeepReadonlyByKeys
 * @description Alias for DeepReadonlyX
 */
export type DeepReadonlyByKeys<T, P = DeepKeys<T>> = DeepReadonlyX<T, P>;
