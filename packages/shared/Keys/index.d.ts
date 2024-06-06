/**
 * Keys
 * @description Consistent with keyof. Get union type of all keys in object type T.
 * @example
 * ```ts
 *  type Prop = {
 *      name: string;
 *      age: number;
 *      getName: () => string;
 *  }
 *  // Expect: 'name' | 'age' | 'getName'
 *  type KeysProp = Keys<Prop>
 * ```
 */
export type Keys<T> = keyof T;
