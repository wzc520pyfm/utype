import { Duplicate, Keys } from "@utility-ts/shared";

/**
 * Merge
 * @description Merge two types into a new type. Keys of the second type overrides keys of the first type.
 * @example
 *  type Foo = {
 *      name: string;
 *      age: number;
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
 *  type MergeResult = Merge<Foo, Bar>
 */
export type Merge<F, S> = Duplicate<Omit<F, Keys<S>> & S>;
