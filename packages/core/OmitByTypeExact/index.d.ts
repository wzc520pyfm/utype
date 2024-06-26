import { OmitNever } from "@utype/core";
import { Equal } from "@utype/shared";

/**
 * OmitByTypeExact
 * @description From T remove a set of properties by value matching exact ValueType.
 * @alias OmitByValueExact
 * @example
 * ```ts
 *  type Prop = {
 *      foo: number;
 *      bar: number | undefined;
 *      faz: boolean;
 *  }
 *  // Expect: { bar: number | undefined; faz: boolean; }
 *  type OmitByTypeExactProp1 = OmitByTypeExact<Prop, number>
 *  // Expect: { foo: number; faz: boolean; }
 *  type OmitByTypeExactProp2 = OmitByTypeExact<Prop, number | undefined>
 * ```
 */
export type OmitByTypeExact<T, ValueType> = Omit<
  T,
  OmitNever<{
    [K in keyof T]: Equal<T[K], ValueType> extends true ? K : never;
  }>
>;

// alias

/**
 * OmitByValueExact
 * @description Alias for OmitByTypeExact
 */
export type OmitByValueExact<T, ValueType> = OmitByTypeExact<T, ValueType>;
