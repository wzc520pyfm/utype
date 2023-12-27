import { Equal } from "@unts-utility/shared";
import { NonNeverX, NonUndefined } from "@unts-utility/core";

/**
 * RequiredKeys
 * @description Get union type of keys that are required in object type T.
 * @example
 *  type Prop = {
 *      name: string;
 *      age: number;
 *      visible?: boolean;
 *  }
 *  // Expect: 'name' | 'age'
 *  type RequiredKeysProp = RequiredKeys<Prop>
 */
export type RequiredKeys<
  T extends object,
  R extends Record<keyof T, unknown> = Required<T>
> = NonUndefined<
  NonNeverX<{
    [K in keyof T]: Equal<Pick<T, K>, Pick<R, K>> extends true ? K : never;
  }>
>;
