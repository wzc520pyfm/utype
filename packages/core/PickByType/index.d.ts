import { OmitNever } from "@utype-ts/core";

/**
 * PickByType
 * @description From T pick a set of properties by value matching ValueType.
 * @alias PickByValue
 * @example
 *  type Prop = {
 *      foo: number;
 *      bar: number | undefined;
 *      faz: boolean;
 *  }
 *  // Expect: { foo: number; }
 *  type PickByTypeProp1 = PickByType<Prop, number>
 *  // Expect: { foo: number; bar: number | undefined; }
 *  type PickByTypeProp2 = PickByType<Prop, number | undefined>
 */
export type PickByType<T, ValueType> = Pick<
  T,
  OmitNever<{
    [K in keyof T]: T[K] extends ValueType ? K : never;
  }>
>;

// alias

/**
 * PickByValue
 * @description Alias for PickByType
 */
export type PickByValue<T, ValueType> = PickByType<T, ValueType>;
