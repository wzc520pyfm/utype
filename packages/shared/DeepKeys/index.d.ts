import { NonUndefined } from './../../core/NonUndefined/index.d';
import { NonNeverX } from "@utility-ts/core";
import { Keys } from "@utility-ts/shared";

/**
 * DeepKeys
 * @description Get the union type composed of all keys from nested objects.
 * @example
 *  type Prop = {
 *      a: string;
 *      b: number;
 *      c: {
 *        d: {
 *          e: string;
 *        }
 *      }
 *  }
 *  // Expect: 'a' | 'b' | 'c' | 'd' | 'e'
 *  type DeepKeysProp = DeepKeys<Prop>
 */
export type DeepKeys<T> = T extends object
  ? NonUndefined<NonNeverX<{ [K in Keys<T>]: `${K & string}` | DeepKeys<T[K]> }>>
  : never;
