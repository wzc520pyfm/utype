import { RequiredKeys } from "@utype/core";

/**
 * PickByRequired
 * @description From T pick all required properties to generate a new object type.
 * @alias GetRequired
 * @example
 *  type Prop = {
 *      foo: number;
 *      bar?: string;
 *  }
 *  // Expect: { foo: number; }
 *  type PickByRequiredProp = PickByRequired<Prop>
 */
export type PickByRequired<T extends object> = Pick<T, RequiredKeys<T>>;

// alias

/**
 * GetRequired
 * @description Alias for PickByRequired
 */
export type GetRequired<T extends object> = PickByRequired<T>;
