import { NonNeverX } from "@utility-ts/core";

/**
 * PickByValueFuzzy
 * @description From T pick a set of properties by value fuzzy matching ValueType.
 * @example
 *  type Prop = {
 *      foo: number;
 *      bar?: number;
 *      faz: boolean;
 *  }
 *  // Expect: { bar?: number; }
 *  type PickByValueFuzzyProp1 = PickByValueFuzzy<Prop, undefined>
 *  // Expect: { bar?: number; faz: boolean; }
 *  type PickByValueFuzzyProp2 = PickByValueFuzzy<Prop, boolean | undefined>
 */
export type PickByValueFuzzy<T, ValueType> = Pick<
  T,
  NonNeverX<{
    [K in keyof T]: Extract<T[K], ValueType> extends never ? never : K;
  }>
>;
