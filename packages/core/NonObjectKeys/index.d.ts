import { Keys } from "@utype-ts/shared";
import { ObjectKeys } from "@utype-ts/core";

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
export type NonObjectKeys<T extends object> = Exclude<Keys<T>, ObjectKeys<T>>;
