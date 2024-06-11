import { Keys, Duplicate } from "@utype/shared";

/**
 * PartialX
 * @description Constructs a type by setting the properties specified by `K`(string literal or union of string literals) to partial from `T`.
 * @alias PartialByKeys
 * @example
 * ```ts
 *  type Prop = {
 *    name: string;
 *    age: number;
 *    visible: boolean;
 *  }
 *  // Expect: { name?: string; age?: number; visible: boolean; }
 *  type PartialXProp = PartialX<Prop, 'name' | 'age'>
 * ```
 */
export type PartialX<T, K extends Keys<T> = Keys<T>> = Duplicate<
  Partial<Pick<T, K>> & Omit<T, K>
>;

// alias

/**
 * PartialByKeys
 * @description Alias for PartialX
 */
export type PartialByKeys<T, K extends Keys<T> = Keys<T>> = PartialX<T, K>;
