
/**
 * KebabCase
 * @description Replace the camelCase or PascalCase string with kebab-case.
 * @example
 *  // Expect: "foo-bar-baz"
 *  type FooBarBaz = KebabCase<"fooBarBaz">
 *  // Expect: "foo-bar-baz"
 *  type FooBarBaz2 = KebabCase<"FooBarBaz">
 */
export type KebabCase<S extends string> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
    ? `${Uncapitalize<S1>}${KebabCase<S2>}`
    : `${Uncapitalize<S1>}-${KebabCase<S2>}`
  : S;
