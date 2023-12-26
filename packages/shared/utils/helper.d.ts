/**
 * Duplicate
 * @description Get copy of `T`
 */
export type Duplicate<T> = { [P in keyof T]: T[P]; }
