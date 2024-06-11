import { Merge, MergeLeft, MergeRight } from "@utype/core";

/**
 * MergeAll
 * @description Merge variadic number of types into a new type. If the keys overlap, its values should be merged into an union.
 * @example
 * ```ts
 *  type Foo = { a: 1; b: 2 }
 *  type Bar = { a: 2 }
 *  type Baz = { c: 3 }
 *  // Expect: { a: 1 | 2; b: 2; c: 3 }
 *  type MergeAllResult = MergeAll<[Foo, Bar, Baz]>
 * ```
 */
export type MergeAll<XS, Prev = {}> = XS extends [infer First, ...infer Rest]
  ? MergeAll<Rest, Merge<Prev & object, First & object>>
  : Prev;

/**
 * MergeLeftAll
 * @description Merge variadic number of types into a new type. If the keys overlap, earlier keys override later keys.
 * @example
 *  type Foo = { a: 1; b: 2 }
 *  type Bar = { a: 2 }
 *  type Baz = { c: 3 }
 *  // Expect: { a: 1; b: 2; c: 3 }
 *  type MergeAllResult = MergeAll<[Foo, Bar, Baz]>
 */
export type MergeLeftAll<XS, Prev = {}> = XS extends [
  infer First,
  ...infer Rest
]
  ? MergeLeftAll<Rest, MergeLeft<Prev, First>>
  : Prev;

/**
 * MergeRightAll
 * @description Merge variadic number of types into a new type. If the keys overlap, later keys override earlier keys.
 * @example
 *  type Foo = { a: 1; b: 2 }
 *  type Bar = { a: 2 }
 *  type Baz = { c: 3 }
 *  // Expect: { a: 2; b: 2; c: 3 }
 *  type MergeAllResult = MergeAll<[Foo, Bar, Baz]>
 */
export type MergeRightAll<XS, Prev = {}> = XS extends [
  infer First,
  ...infer Rest
]
  ? MergeRightAll<Rest, MergeRight<Prev, First>>
  : Prev;
