/**
 * CamelCase
 * @description Replace the snake_case or kebab-case string with camelCase.
 * @example
 * ```ts
 *  // Expect: "fooBarBaz"
 *  type FooBarBaz = CamelCase<"foo_bar_baz">
 *  // Expect: "fooBarBaz"
 *  type FooBarBaz = CamelCase<"foo-bar-baz">
 * ```
 */
// todo need support more edge cases.
export type CamelCase<
  S extends string,
  sp extends string = "_" | "-"
> = S extends `${infer S1}${sp}${infer S2}`
  ? `${Lowercase<S1>}${Capitalize<CamelCase<S2>>}`
  : Lowercase<S>;
