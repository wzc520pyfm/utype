import { Duplicate } from "@utype-ts/shared";

/**
 * OmitNever
 * @description Get Union type of object property types, but filtered out never types.
 * @example
 *  type Prop = {
 *      name: string;
 *      age: never;
 *      visible: boolean;
 *  }
 *  // Expect: string | boolean
 *  type OmitNeverProp = OmitNever<Prop>
 */
export type OmitNever<T extends object> = Duplicate<T>[keyof T];

// compatible

/**
 * NonNeverX
 * @deprecated Not supported anymore; Please use OmitNever instead.
 */
export type NonNeverX<T extends object> = OmitNever<T>;
