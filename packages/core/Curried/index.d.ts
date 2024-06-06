import { TupleHead } from "@utype/shared";

/**
 * Curried
 * @description [Currying](https://en.wikipedia.org/wiki/Currying) function with support for dynamic parameters.
 * 
 * @use
 * ```ts
 *  function yourCurrying<A extends unknown[], R>(
 *    fn: (...args: A) => R
 *  ): Curried<A, R> {
 *    // Your implementation logic...
 *  }
 * ```
 * 
 * @example
 * ```ts
 *  const yourFun = (a: string, b: number) => true;
 *  const curriedYourFun = yourCurrying(yourFun);
 *  // Expect:
 *  //  ((a: string, b: number) => boolean) &
 *  //  ((a: string) => (b: number) => boolean)
 *  type CurriedYourFun = typeof curriedYourFun;
 *  // use:
 *  const res1 = curriedYourFun('123', 123);
 *  const res2 = curriedYourFun('123')(123);
 * ```
 */
export type Curried<A, R, D extends unknown[] = []> = A extends [
  unknown,
  ...infer T
]
  ? T extends []
    ? (...args: [...D, ...TupleHead<A>]) => R
    : ((...args: [...D, ...TupleHead<A>]) => Curried<T, R>) &
        Curried<T, R, [...D, ...TupleHead<A>]>
  : () => R;
