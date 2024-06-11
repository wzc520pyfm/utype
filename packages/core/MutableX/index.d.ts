import { Duplicate } from "@utype/shared";
import { Mutable } from "@utype/core";

/**
 * MutableX
 * @description Constructs a type by setting the properties specified by `K`(string literal or union of string literals) to mutable from `T`.
 * @alias MutableByKeys
 * @example
 * ```ts
 *  type Prop = {
 *    readonly name: string;
 *    readonly age: number;
 *    readonly visible: boolean;
 *  }
 *  // Expect: { name: string; age: number; readonly visible: boolean; }
 *  type MutableXProp = MutableX<Prop, 'name' | 'age'>
 * ```
 */
export type MutableX<T, K extends keyof T = keyof T> = Duplicate<
  Mutable<Pick<T, K>> & Omit<T, K>
>;

// alias

/**
 * MutableByKeys
 * @description Alias for MutableX
 */
export type MutableByKeys<T, K extends keyof T = keyof T> = MutableX<T, K>;
