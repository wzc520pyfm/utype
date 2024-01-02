import { NonUndefined, OmitNever } from "@utype/core";
import { Keys } from "@utype/shared";

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
  ? NonUndefined<
      OmitNever<{ [K in Keys<T>]: `${K & string}` | DeepKeys<T[K]> }>
    >
  : never;
