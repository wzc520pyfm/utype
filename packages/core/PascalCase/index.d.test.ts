import type { PascalCase } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

type cases = [
  Expect<Equal<PascalCase<"foobar">, "Foobar">>,
  Expect<Equal<PascalCase<"Foobar">, "Foobar">>,
  Expect<Equal<PascalCase<"FOOBAR">, "Foobar">>,
  Expect<Equal<PascalCase<"foo_bar">, "FooBar">>,
  Expect<Equal<PascalCase<"foo-bar">, "FooBar">>,
  Expect<Equal<PascalCase<"foo_bar_hello_world">, "FooBarHelloWorld">>,
  Expect<Equal<PascalCase<"foo-bar-hello-world">, "FooBarHelloWorld">>,
  Expect<Equal<PascalCase<"HELLO_WORLD_WITH_TYPES">, "HelloWorldWithTypes">>,
  Expect<Equal<PascalCase<"HELLO-WORLD-WITH-TYPES">, "HelloWorldWithTypes">>,
  Expect<Equal<PascalCase<"">, "">>,
  Expect<Equal<PascalCase<"😎">, "😎">>
];
