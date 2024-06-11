/**
 * Mutable
 * @description Like Readonly, but it will remove the readonly of the object property.
 * @example
 * ```ts
 *  type Prop = { readonly name: string }
 *  // Expect: { name: string }
 *  type MutableProp = Mutable<Prop>
 * ```
 */
export type Mutable<T> = { -readonly [P in keyof T]: T[P]; }
