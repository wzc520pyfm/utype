import { TupleHead, Equal, Expect } from "@utype/shared";

type Case1 = [];
type TupleHeadCase1 = never;

type Case2 = [a: string, b: number, c: boolean];
type TupleHeadCase2 = [a: string];

type Case3 = readonly [a: string, b: number, c: boolean];
type TupleHeadCase3 = readonly [a: string];

type Case4 = [a: string, b?: number, c?: boolean];
type TupleHeadCase4 = [a: string];

type Case5 = [a?: string, b?: number, c?: boolean];
type TupleHeadCase5 = [a?: string];

type Case6 = readonly [a?: string, b?: number, c?: boolean];
type TupleHeadCase6 = readonly [a?: string];

type cases = [
  Expect<Equal<TupleHead<Case1>, TupleHeadCase1>>,
  Expect<Equal<TupleHead<Case2>, TupleHeadCase2>>,
  Expect<Equal<TupleHead<Case3>, TupleHeadCase3>>,
  Expect<Equal<TupleHead<Case4>, TupleHeadCase4>>,
  Expect<Equal<TupleHead<Case5>, TupleHeadCase5>>,
  Expect<Equal<TupleHead<Case6>, TupleHeadCase6>>
];
