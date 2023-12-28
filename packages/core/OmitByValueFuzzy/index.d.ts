import { NonNeverX } from "@unts-utility/core";

/**
 * OmitByValueFuzzy
 * @description From T remove a set of properties by value fuzzy matching ValueType.
 * @example
 *  type Prop = {
 *      foo: number;
 *      bar?: number;
 *      faz: boolean;
 *  }
 *  // Expect: { foo: number; faz: boolean }
 *  type OmitByValueFuzzyProp1 = OmitByValueFuzzy<Prop, undefined>
 *  // Expect: { foo: number }
 *  type OmitByValueFuzzyProp2 = OmitByValueFuzzy<Prop, boolean | undefined>
 */
export type OmitByValueFuzzy<T, ValueType> = Omit<
  T,
  NonNeverX<{
    [K in keyof T]: Extract<T[K], ValueType> extends never ? never : K;
  }>
>;
