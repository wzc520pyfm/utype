import { OmitNever, NonUndefined } from "@utype/core";
import { ObjectKeyType } from "@utype/shared";

/**
 * ObjectKeys
 * @description Get union type of keys that are object in object type T.
 * @example
 * ```ts
 *  type Prop = {
 *      name: string;
 *      breakfast: { foods: string[]; };
 *      dinner: { foods: string[]; };
 *  }
 *  // Expect: 'breakfast' | 'dinner'
 *  type ObjectKeysProp = ObjectKeys<Prop>
 * ```
 */
export type ObjectKeys<T extends object> = NonUndefined<
  OmitNever<{
    [K in keyof T]: NonUndefined<T[K]> extends Record<ObjectKeyType, unknown>
      ? K
      : never;
  }>
>;
