import { Merge } from "@utility-ts/core";

/**
 * MergeAll
 * @description Merge variadic number of types into a new type. If the keys overlap, later keys override earlier keys.
 * @example
 *  type Foo = { a: 1; b: 2 }
 *  type Bar = { a: 2 }
 *  type Baz = { c: 3 }
 *  // Expect: { a: 2; b: 2; c: 3 }
 *  type MergeAllResult = MergeAll<[Foo, Bar, Baz]>
 */
export type MergeAll<XS, Prev = {}> = XS extends [infer First, ...infer Rest]
  ? MergeAll<Rest, Merge<Prev, First>>
  : Prev;
