import { Keys } from "@utype-ts/shared";

/**
 * DeepMutable
 * @description Make every parameter of an object - and its sub-objects recursively - mutable.
 * @example
 *  type Prop = {
 *    readonly x: {
 *      readonly a: 1
 *      readonly b: 'hi'
 *    },
 *    readonly y: 'hey'
 *  }
 *  // Expect: {
 *  //   x: {
 *  //     a: 1,
 *  //     b: 'hi'
 *  //   }
 *  //   y: 'hey'
 *  // }
 * type DeepMutableProp = DeepMutable<Prop>
 */
export type DeepMutable<T extends object> = T extends Function
  ? T
  : {
      -readonly [K in Keys<T>]: T[K] extends object ? DeepMutable<T[K]> : T[K];
    };
