/**
 * SnakeCase
 * @description Replace the camelCase or PascalCase string with snake_case.
 * @example
 * ```ts
 *  // Expect: "foo_bar_baz"
 *  type FooBarBaz = SnakeCase<"fooBarBaz">
 *  // Expect: "foo_bar_baz"
 *  type FooBarBaz2 = SnakeCase<"FooBarBaz">
 * ```
 */
export type SnakeCase<S extends string> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
    ? `${Uncapitalize<S1>}${SnakeCase<S2>}`
    : `${Uncapitalize<S1>}_${SnakeCase<S2>}`
  : S;
