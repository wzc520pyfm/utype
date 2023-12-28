import { NonNeverX } from "@unts-utility/core";
import { Equal } from "@unts-utility/shared";

/**
 * OmitByValueExact
 * @description From T remove a set of properties by value matching exact ValueType.
 * @example
 *  type Prop = {
 *      foo: number;
 *      bar: number | undefined;
 *      faz: boolean;
 *  }
 *  // Expect: { bar: number | undefined; faz: boolean; }
 *  type OmitByValueExactProp1 = OmitByValueExact<Prop, number>
 *  // Expect: { foo: number; faz: boolean; }
 *  type OmitByValueExactProp2 = OmitByValueExact<Prop, number | undefined>
 */
export type OmitByValueExact<T, ValueType> = Omit<
  T,
  NonNeverX<{
    [K in keyof T]: Equal<T[K], ValueType> extends true ? K : never;
  }>
>;
