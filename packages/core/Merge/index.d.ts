import { Duplicate, Keys } from "@utype/shared";
import { ReadonlyKeys, PartialKeys } from "@utype/core";

/**
 * Merge
 * @description Merge two types into a new type. If the keys overlap, its values should be merged into an union.
 * @example
 * ```ts
 *  type Foo = {
 *      name: string;
 *      age: string;
 *  }
 *  type Bar = {
 *      age: number;
 *      sex: string;
 *  }
 *  // Expect: {
 *  //     name: string;
 *  //     age: number | string;
 *  //     sex: string;
 *  // }
 *  type MergeResult = Merge<Foo, Bar>
 * ```
 */
export type Merge<F extends object, S extends object> = Duplicate<
  {
    [K in Exclude<
      Keys<F> | Keys<S>,
      ReadonlyKeys<F> | ReadonlyKeys<S> | PartialKeys<F> | PartialKeys<S>
    >]: F[K & Keys<F>] | S[K & Keys<S>];
  } & {
    readonly [K in Exclude<
      ReadonlyKeys<F> | ReadonlyKeys<S>,
      PartialKeys<F> | PartialKeys<S>
    >]: F[K & Keys<F>] | S[K & Keys<S>];
  } & {
    readonly [K in Extract<
      ReadonlyKeys<F> | ReadonlyKeys<S>,
      PartialKeys<F> | PartialKeys<S>
    >]?: F[K & Keys<F>] | S[K & Keys<S>];
  } & {
    [K in Exclude<
      PartialKeys<F> | PartialKeys<S>,
      ReadonlyKeys<F> | ReadonlyKeys<S>
    >]?: F[K & Keys<F>] | S[K & Keys<S>];
  }
>;

/**
 * MergeLeft
 * @description Merge two types into a new type. Keys of the first type overrides keys of the second type.
 * @example
 *  type Foo = {
 *      name: string;
 *      age: string;
 *  }
 *  type Bar = {
 *      age: number;
 *      sex: string;
 *  }
 *  // Expect: {
 *  //     name: string;
 *  //     age: string;
 *  //     sex: string;
 *  // }
 *  type MergeLeftResult = MergeLeft<Foo, Bar>
 */
export type MergeLeft<F, S> = Duplicate<Omit<S, Keys<F>> & F>;

/**
 * MergeRight
 * @description Merge two types into a new type. Keys of the second type overrides keys of the first type.
 * @example
 *  type Foo = {
 *      name: string;
 *      age: string;
 *  }
 *  type Bar = {
 *      age: number;
 *      sex: string;
 *  }
 *  // Expect: {
 *  //     name: string;
 *  //     age: number;
 *  //     sex: string;
 *  // }
 *  type MergeRightResult = MergeRight<Foo, Bar>
 */
export type MergeRight<F, S> = Duplicate<Omit<F, Keys<S>> & S>;
