import { NonNeverX, NonUndefined } from "@unts-utility/core";

/**
 * FunctionKeys
 * @description Get union type of keys that are functions in object type T.
 * @example
 *  type Prop = {
 *      name: string;
 *      setName: (name: string) => void;
 *      getName: () => string;
 *  }
 *  // Expect: 'setName' | 'getName'
 *  type FunctionKeysProp = FunctionKeys<Prop>
 */
export type FunctionKeys<T extends object> = NonNeverX<
  Required<{
    [K in keyof T]: NonUndefined<T[K]> extends Function ? K : never;
  }>
>;
