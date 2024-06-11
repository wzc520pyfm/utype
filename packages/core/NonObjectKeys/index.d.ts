import { Keys } from "@utype/shared";
import { ObjectKeys } from "@utype/core";

/**
 * NonObjectKeys
 * @description Get union type of keys that are non-object in object type T.
 * @example
 * ```ts
 *  type Prop = {
 *      name: string;
 *      age: number;
 *      breakfast: { foods: string[]; };
 *  }
 *  // Expect: 'name' | 'age'
 *  type NonObjectKeysProp = NonObjectKeys<Prop>
 * ```
 */
export type NonObjectKeys<T extends object> = Exclude<Keys<T>, ObjectKeys<T>>;
