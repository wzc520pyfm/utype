import { NonUndefined } from "./../../core/NonUndefined/index.d";
import { OmitNever } from "@utype-ts/core";
import { Keys } from "@utype-ts/shared";

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
