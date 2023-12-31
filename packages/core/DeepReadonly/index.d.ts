import { Keys } from "@utype/shared";

/**
 * DeepReadonly
 * @description Make every parameter of an object - and its sub-objects recursively - readonly.
 * @example
 *  type Prop = {
 *    x: {
 *      a: 1
 *      b: 'hi'
 *    },
 *    y: 'hey'
 *  }
 *  // Expect: {
 *  //   readonly x: {
 *  //     readonly a: 1,
 *  //     readonly b: 'hi'
 *  //   }
 *  //   readonly y: 'hey'
 *  // }
 * type DeepReadonlyProp = DeepReadonly<Prop>
 */
// todo need support arr, fun, class, etc.
export type DeepReadonly<T> = {
  readonly [K in Keys<T>]: Keys<T[K]> extends never ? T[K] : DeepReadonly<T[K]>;
};
