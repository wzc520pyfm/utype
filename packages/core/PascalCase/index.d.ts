/**
 * PascalCase
 * @description Replace the snake_case or kebab-case string with PascalCase.
 * @example
 *  // Expect: "FooBarBaz"
 *  type FooBarBaz = PascalCase<"foo_bar_baz">
 *  // Expect: "FooBarBaz"
 *  type FooBarBaz = PascalCase<"foo-bar-baz">
 */
// todo need support more edge cases.
export type PascalCase<
  S extends string,
  sp extends string = "_" | "-"
> = S extends `${infer S1}${sp}${infer S2}`
  ? `${Capitalize<Lowercase<S1>>}${Capitalize<PascalCase<S2>>}`
  : Capitalize<Lowercase<S>>;
