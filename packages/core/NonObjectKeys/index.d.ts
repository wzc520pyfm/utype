import { Keys } from "@unts-utility/shared";
import { ObjectKeys } from "@unts-utility/core";

/**
 * NonObjectKeys
 * @description Get union type of keys that are non-object in object type T.
 * @example
 *  type Prop = {
 *      name: string;
 *      age: number;
 *      breakfast: { foods: string[]; };
 *  }
 *  // Expect: 'name' | 'age'
 *  type NonObjectKeysProp = NonObjectKeys<Prop>
 */
export type NonObjectKeys<T extends object> = Exclude<Keys<T>, ObjectKeys<T>>
