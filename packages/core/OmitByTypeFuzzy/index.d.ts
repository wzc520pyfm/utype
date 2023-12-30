import { OmitNever } from "@utility-ts/core";

/**
 * OmitByTypeFuzzy
 * @description From T remove a set of properties by value fuzzy matching ValueType.
 * @alias OmitByValueFuzzy
 * @example
 *  type Prop = {
 *      foo: number;
 *      bar?: number;
 *      faz: boolean;
 *  }
 *  // Expect: { foo: number; faz: boolean }
 *  type OmitByTypeFuzzyProp1 = OmitByTypeFuzzy<Prop, undefined>
 *  // Expect: { foo: number }
 *  type OmitByTypeFuzzyProp2 = OmitByTypeFuzzy<Prop, boolean | undefined>
 */
export type OmitByTypeFuzzy<T, ValueType> = Omit<
  T,
  OmitNever<{
    [K in keyof T]: Extract<T[K], ValueType> extends never ? never : K;
  }>
>;

// alias

/**
 * OmitByValueFuzzy
 * @description Alias for OmitByTypeFuzzy
 */
export type OmitByValueFuzzy<T, ValueType> = OmitByTypeFuzzy<T, ValueType>;
