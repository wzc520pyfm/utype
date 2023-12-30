import { Keys, OnlyObject } from "@utility-ts/shared";

/**
 * DeepPartial
 * @description Make every parameter of an object - and its sub-objects recursively - partial.
 * @example
 *  type Prop = {
 *    x: {
 *      a: 1
 *      b: 'hi'
 *    },
 *    y: 'hey'
 *  }
 *  // Expect: {
 *  //   x?: {
 *  //     a?: 1,
 *  //     b?: 'hi'
 *  //   }
 *  //   y?: 'hey'
 *  // }
 * type DeepPartialProp = DeepPartial<Prop>
 */
// todo need support array
export type DeepPartial<T> = {
  [K in Keys<T>]?: T[K] extends OnlyObject ? DeepPartial<T[K]> : T[K];
};
