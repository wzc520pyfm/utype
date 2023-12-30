import type { SnakeCase } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

type cases = [
  Expect<Equal<SnakeCase<"hello">, "hello">>,
  Expect<Equal<SnakeCase<"userName">, "user_name">>,
  Expect<Equal<SnakeCase<"UserPwd">, "user_pwd">>,
  Expect<Equal<SnakeCase<"getElementById">, "get_element_by_id">>,
  Expect<
    Equal<
      SnakeCase<"getElementById" | "getElementByClassNames">,
      "get_element_by_id" | "get_element_by_class_names"
    >
  >
];
