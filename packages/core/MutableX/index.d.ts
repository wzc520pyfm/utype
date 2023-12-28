import { Duplicate } from "@utility-ts/shared";
import { Mutable } from "@utility-ts/core";

/**
 * MutableX
 * @description Constructs a type by setting the properties specified by `K`(string literal or union of string literals) to mutable from `T`.
 * @example
 *  type Prop = {
 *    readonly name: string;
 *    readonly age: number;
 *    readonly visible: boolean;
 *  }
 *  // Expect: { name: string; age: number; readonly visible: boolean; }
 *  type MutableXProp = MutableX<Prop, 'name' | 'age'>
 */
export type MutableX<T, K extends keyof T = keyof T> = Duplicate<
  Mutable<Pick<T, K>> & Omit<T, K>
>;
