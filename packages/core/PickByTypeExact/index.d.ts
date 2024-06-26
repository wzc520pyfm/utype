import { OmitNever } from "@utype/core";
import { Equal } from "@utype/shared";

/**
 * PickByTypeExact
 * @description From T pick a set of properties by value matching exact ValueType.
 * @alias PickByValueExact
 * @example
 * ```ts
 *  type Prop = {
 *      foo: number;
 *      bar: number | undefined;
 *      faz: string;
 *  }
 *  // Expect: { foo: number; }
 *  type PickByTypeExactProp1 = PickByTypeExact<Prop, number>
 *  // Expect: { bar: number | undefined; }
 *  type PickByTypeExactProp2 = PickByTypeExact<Prop, number | undefined>
 * ```
 */
export type PickByTypeExact<T, ValueType> = Pick<
  T,
  OmitNever<{
    [K in keyof T]: Equal<T[K], ValueType> extends true ? K : never;
  }>
>;

// alias

/**
 * PickByValueExact
 * @description Alias for PickByTypeExact
 */
export type PickByValueExact<T, ValueType> = PickByTypeExact<T, ValueType>;
