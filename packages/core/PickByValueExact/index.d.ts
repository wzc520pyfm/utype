import { NonNeverX } from "@unts-utility/core";
import { Equal } from "@unts-utility/shared";

/**
 * PickByValueExact
 * @description From T pick a set of properties by value matching exact ValueType.
 * @example
 *  type Prop = {
 *      foo: number;
 *      bar: number | undefined;
 *      faz: string;
 *  }
 *  // Expect: { foo: number; }
 *  type PickByValueExactProp1 = PickByValueExact<Prop, number>
 *  // Expect: { bar: number | undefined; }
 *  type PickByValueExactProp2 = PickByValueExact<Prop, number | undefined>
 */
export type PickByValueExact<T, ValueType> = Pick<
  T,
  NonNeverX<{
    [K in keyof T]: Equal<T[K], ValueType> extends true ? K : never;
  }>
>;
