export * from './helper'

/**
 * Expect
 * @description Only accept the 'true' type, typically used to determine if the result returned by 'Equal' is true.
 * @example
 * // ts-expect-error
 * type Case = Expect<false>
 * // ts-expect-error
 * type Case = Expect<Equal<string, number>>
 * // Expect
 * type Case = Expect<Equal<string, string>>
 */
export type Expect<T extends true> = T

/**
 * Equal
 * @description Compare whether two types are equal.
 * @example 
 * // Expect: false
 * type Case = Equal<string, number>
 */
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true
