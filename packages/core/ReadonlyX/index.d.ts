import { ObjectWrapper } from "@unts-utility/shared";

/**
 * ReadonlyX
 * @description Constructs a type by setting the properties specified by `K`(string literal or union of string literals) to readonly from `T`.
 * @example
 *  type Prop = {
 *    name: string;
 *    age: number;
 *    visible: boolean;
 *  }
 *  // Expect: { readonly name: string; readonly age: number; visible: boolean; }
 *  type ReadonlyXProp = ReadonlyX<Prop, 'name' | 'age'>
 */
export type ReadonlyX<T, K extends keyof T = keyof T> = ObjectWrapper<Readonly<Pick<T, K>> & Omit<T, K>>
