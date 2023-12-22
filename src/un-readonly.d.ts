/**
 * UnReadonly
 * @description Like Readonly, but it will remove the readonly of the object property.
 * @example
 *  type Prop = { readonly name: string }
 *  // Expect: { name: string }
 *  type UnReadonlyProp = UnReadonly<Prop>
 */
export type UnReadonly<T> = { -readonly [P in keyof T]: T[P]; }
