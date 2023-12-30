import { OmitNever } from "@utype-ts/core";

/**
 * PickByTypeFuzzy
 * @description From T pick a set of properties by value fuzzy matching ValueType.
 * @alias PickByValueFuzzy
 * @example
 *  type Prop = {
 *      foo: number;
 *      bar?: number;
 *      faz: boolean;
 *  }
 *  // Expect: { bar?: number; }
 *  type PickByTypeFuzzyProp1 = PickByTypeFuzzy<Prop, undefined>
 *  // Expect: { bar?: number; faz: boolean; }
 *  type PickByTypeFuzzyProp2 = PickByTypeFuzzy<Prop, boolean | undefined>
 */
export type PickByTypeFuzzy<T, ValueType> = Pick<
  T,
  OmitNever<{
    [K in keyof T]: Extract<T[K], ValueType> extends never ? never : K;
  }>
>;

// alias

/**
 * PickByValueFuzzy
 * @description Alias for PickByTypeFuzzy
 */
export type PickByValueFuzzy<T, ValueType> = PickByTypeFuzzy<T, ValueType>;
