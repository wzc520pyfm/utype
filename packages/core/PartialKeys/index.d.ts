import { Equal } from "@unts-utility/shared";
import { NonNeverX, NonUndefined } from "@unts-utility/core";

/**
 * PartialKeys
 * @description Get union type of keys that are partial in object type T.
 * @example
 *  type Prop = {
 *      name: string;
 *      age?: number;
 *      visible?: boolean;
 *  }
 *  // Expect: 'age' | 'visible'
 *  type PartialKeysProp = PartialKeys<Prop>
 */
export type PartialKeys<
  T extends object,
  R extends Partial<T> = Partial<T>
> = NonUndefined<
  NonNeverX<{
    [K in keyof T]: Equal<Pick<T, K>, Pick<R, K>> extends true ? K : never;
  }>
>;
