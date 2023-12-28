import { NonNeverX } from "@utility-ts/core";

/**
 * PickByValue
 * @description From T pick a set of properties by value matching ValueType.
 * @example
 *  type Prop = {
 *      foo: number;
 *      bar: number | undefined;
 *      faz: boolean;
 *  }
 *  // Expect: { foo: number; }
 *  type PickByValueProp1 = PickByValue<Prop, number>
 *  // Expect: { foo: number; bar: number | undefined; }
 *  type PickByValueProp2 = PickByValue<Prop, number | undefined>
 */
export type PickByValue<T, ValueType> = Pick<
  T,
  NonNeverX<{
    [K in keyof T]: T[K] extends ValueType ? K : never;
  }>
>;
