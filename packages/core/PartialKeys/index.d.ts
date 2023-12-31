import { Equal } from "@utype/shared";
import { OmitNever, NonUndefined } from "@utype/core";

/**
 * PartialKeys
 * @description Get union type of keys that are partial in object type T.
 * @alias OptionalKeys
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
  OmitNever<{
    [K in keyof T]: Equal<Pick<T, K>, Pick<R, K>> extends true ? K : never;
  }>
>;

// alias

/**
 * OptionalKeys
 * @description Alias for PartialKeys
 */
export type OptionalKeys<
  T extends object,
  R extends Partial<T> = Partial<T>
> = PartialKeys<T, R>;
