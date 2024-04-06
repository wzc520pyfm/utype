/**
 * OptionalTupleLast
 * @description Make the last element of a tuple optional.
 * @example
 * type Tuple = [string, number, boolean];
 * // Expect: [string, number, boolean?]
 * type OptionalTuple = OptionalTupleLast<Tuple>;
 */
export type OptionalTupleLast<T extends any[]> = T extends [...infer U, infer L]
  ? [...U, L?]
  : never;
