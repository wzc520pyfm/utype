/**
 * Nullable
 * @description Maybe null or undefined from set T.
 * @example
 *  // Expect: string | null | undefined
 *  type Ref = Nullable<string>
 */
export type Nullable<T> = T | null | undefined
