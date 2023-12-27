import { NonNeverX, NonUndefined } from "@unts-utility/core";
import { ObjectKeyType } from "@unts-utility/shared";

/**
 * ObjectKeys
 * @description Get union type of keys that are object in object type T.
 * @example
 *  type Prop = {
 *      name: string;
 *      breakfast: { foods: string[]; };
 *      dinner: { foods: string[]; };
 *  }
 *  // Expect: 'breakfast' | 'dinner'
 *  type ObjectKeysProp = ObjectKeys<Prop>
 */
export type ObjectKeys<T extends object> = NonUndefined<
  NonNeverX<{
    [K in keyof T]: NonUndefined<T[K]> extends Record<ObjectKeyType, unknown>
      ? K
      : never;
  }>
>;
