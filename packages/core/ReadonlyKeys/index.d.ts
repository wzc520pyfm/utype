import { Equal } from "@unts-utility/shared";
import { NonNeverX, NonUndefined } from "@unts-utility/core";

/**
 * ReadonlyKeys
 * @description Get union type of keys that are readonly in object type T.
 * @example
 *  type Prop = {
 *      readonly name: string;
 *      readonly age: number;
 *      visible: boolean;
 *  }
 *  // Expect: 'name' | 'age'
 *  type ReadonlyKeysProp = ReadonlyKeys<Prop>
 */
export type ReadonlyKeys<
  T extends object,
  R extends Record<keyof T, unknown> = Readonly<T>
> = NonUndefined<NonNeverX<{
  [K in keyof T]: Equal<Pick<T, K>, Pick<R, K>> extends true ? K : never;
}>>;
