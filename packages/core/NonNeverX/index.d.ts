import { Duplicate } from "@utility-ts/shared";

/**
 * NonNeverX
 * @description Get Union type of object property types, but filtered out never types.
 * @example
 *  type Prop = {
 *      name: string;
 *      age: never;
 *      visible: boolean;
 *  }
 *  // Expect: string | boolean
 *  type NonNeverXProp = NonNeverX<Prop>
 */
export type NonNeverX<T extends object> = Duplicate<T>[keyof T];
