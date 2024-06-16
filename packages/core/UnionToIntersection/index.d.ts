/**
 * UnionToIntersection
 * @description Get intersection type given union type U.
 * @alias Union2Intersection UToI U2I
 * @example
 * ```ts
 *  type Prop = { name: string } | { age: number } | { visible: boolean }
 *  // Expect: { name: string } & { age: number } & { visible: boolean }
 *  type UnionToIntersectionProp = UnionToIntersection<Prop>
 *  // Expect: 'foo' & 42 & true
 *  type Case = UnionToIntersection<'foo' | 42 | true>
 * ```
 */
export type UnionToIntersection<U> = _UnionToUFunctions<U> extends (arg: infer I) => void ? I : never;

/** @private */
export type _UnionToUFunctions<U> = U extends any ? (arg: U) => any : never;

// alias

/**
 * Union2Intersection
 * @description Alias for UnionToIntersection
 */
export type Union2Intersection<U> = UnionToIntersection<U>;

/**
 * UToI
 * @description Alias for UnionToIntersection
 */
export type UToI<U> = UnionToIntersection<U>;

/**
 * U2I
 * @description Alias for UnionToIntersection
 */
export type U2I<U> = UnionToIntersection<U>;
