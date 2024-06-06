/**
 * TupleHead
 * @description Extracting the first element of a tuple as a tuple type.
 * @alias FirstAsTuple
 * @example
 * ```ts
 *  type Prop = [a: string, b: number, c: boolean]
 *  // Expect: [a: string]
 *  type TupleHeadProp = TupleHead<Prop>
 * ```
 */
export type TupleHead<T extends readonly any[]> = T extends readonly []
  ? never
  : T extends readonly [any?, ...infer R]
  ? T extends readonly [...infer H, ...R]
    ? T extends any[]
      ? H
      : readonly [...H]
    : never
  : never;

// alias

/**
 * FirstAsTuple
 * @description Alias for TupleHead
 */
export type FirstAsTuple<T extends readonly any[]> = TupleHead<T>;
