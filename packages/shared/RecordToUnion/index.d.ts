/**
 * RecordToUnion
 * @description Get union type given record type U.
 * @alias Record2Union RToU R2U
 * @example
 * ```ts
 *  type Prop = { name: string; visible: boolean; }
 *  // Expect: string | boolean
 *  type RecordToUnionProp = RecordToUnion<Prop>
 * ```
 */
export type RecordToUnion<T extends Record<string, any>> = T[keyof T]

// alias

/**
 * Record2Union
 * @description Alias for RecordToUnion
 */
export type Record2Union<T extends Record<string, any>> = RecordToUnion<T>;

/**
 * RToU
 * @description Alias for RecordToUnion
 */
export type RToU<T extends Record<string, any>> = RecordToUnion<T>;

/**
 * R2U
 * @description Alias for RecordToUnion
 */
export type R2U<T extends Record<string, any>> = RecordToUnion<T>;
