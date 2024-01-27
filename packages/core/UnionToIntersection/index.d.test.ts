import type { UnionToIntersection } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case = { name: string } | { age: number } | { visible: boolean };
type UnionToIntersectionCase = { name: string } & { age: number } & {
  visible: boolean;
};

type cases = [
  Expect<Equal<UnionToIntersection<Case>, UnionToIntersectionCase>>,
  Expect<Equal<UnionToIntersection<"foo" | 42 | true>, "foo" & 42 & true>>,
  Expect<
    Equal<
      UnionToIntersection<(() => "foo") | ((i: 42) => true)>,
      (() => "foo") & ((i: 42) => true)
    >
  >
];
