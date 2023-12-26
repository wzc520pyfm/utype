/**
 * NonUndefined
 * @description Exclude undefined from set T.
 * @example
 *  // Expect: string
 *  type Ref = NonUndefined<string | undefined>
 */
export type NonUndefined<T> = T extends undefined ? never : T
