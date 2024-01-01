export * from './helper'

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
