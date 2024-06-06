import { Keys, OnlyObject } from "@utype/shared";
import { NonUndefined } from "@utype/core";

/**
 * DeepRequired
 * @description Make every parameter of an object - and its sub-objects recursively - required.
 * @example
 * ```ts
 *  type Prop = {
 *    x: {
 *      a?: 1
 *      b: 'hi'
 *    },
 *    y?: 'hey'
 *  }
 *  // Expect: {
 *  //   x: {
 *  //     a: 1,
 *  //     b: 'hi'
 *  //   }
 *  //   y: 'hey'
 *  // }
 * type DeepRequiredProp = DeepRequired<Prop>
 * ```
 */
// todo need support array
export type DeepRequired<T> = T extends OnlyObject
  ? _DeepRequiredObject<T>
  : T;

/** @private */
export interface _DeepRequiredArray<T>
  extends Array<DeepRequired<NonUndefined<T>>> {}

/** @private */
export type _DeepRequiredObject<T> = {
  [P in Keys<T>]-?: DeepRequired<NonUndefined<T[P]>>;
};
