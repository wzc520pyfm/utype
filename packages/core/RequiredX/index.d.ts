import { Duplicate } from "@utype/shared";

/**
 * RequiredX
 * @description Constructs a type by setting the properties specified by `K`(string literal or union of string literals) to required from `T`.
 * @alias RequiredByKeys
 * @example
 * ```ts
 *  type Prop = {
 *    name?: string;
 *    age?: number;
 *    visible?: boolean;
 *  }
 *  // Expect: { name: string; age: number; visible?: boolean; }
 *  type RequiredXProp = RequiredX<Prop, 'name' | 'age'>
 * ```
 */
export type RequiredX<T, K extends keyof T = keyof T> = Duplicate<
  Required<Pick<T, K>> & Omit<T, K>
>;

// alias

/**
 * RequiredByKeys
 * @description Alias for RequiredX
 */
export type RequiredByKeys<T, K extends keyof T = keyof T> = RequiredX<T, K>;
