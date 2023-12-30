import { NonNeverX } from "@utility-ts/core";

/**
 * OmitByType
 * @description From T remove a set of properties by value matching ValueType.
 * @example
 *  type Prop = {
 *      foo: number;
 *      bar: number | undefined;
 *      faz: boolean;
 *  }
 *  // Expect: { bar: number | undefined; faz: boolean; }
 *  type OmitByTypeProp1 = OmitByType<Prop, number>
 *  // Expect: { faz: boolean; }
 *  type OmitByTypeProp2 = OmitByType<Prop, number | undefined>
 */
export type OmitByType<T, ValueType> = Omit<
  T,
  NonNeverX<{
    [K in keyof T]: T[K] extends ValueType ? K : never;
  }>
>;

// alias

/**
 * OmitByValue
 * @description Alias for OmitByType
 */
export type OmitByValue<T, ValueType> = OmitByType<T, ValueType>;
