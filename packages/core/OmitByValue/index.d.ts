import { NonNeverX } from "@utility-ts/core";

/**
 * OmitByValue
 * @description From T remove a set of properties by value matching ValueType.
 * @example
 *  type Prop = {
 *      foo: number;
 *      bar: number | undefined;
 *      faz: boolean;
 *  }
 *  // Expect: { bar: number | undefined; faz: boolean; }
 *  type OmitByValueProp1 = OmitByValue<Prop, number>
 *  // Expect: { faz: boolean; }
 *  type OmitByValueProp2 = OmitByValue<Prop, number | undefined>
 */
export type OmitByValue<T, ValueType> = Omit<
  T,
  NonNeverX<{
    [K in keyof T]: T[K] extends ValueType ? K : never;
  }>
>;
