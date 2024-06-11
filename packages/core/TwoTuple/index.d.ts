/**
 * TwoTuple
 * @description A Tuple consisting of two identical types.
 * @example
 * ```ts
 *  // Expect: [string, string]
 *  type TestType = TwoTuple<string>
 * ```
 */
export type TwoTuple<T> = [T, T]
