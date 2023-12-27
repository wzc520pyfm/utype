import { FunctionKeys } from "@unts-utility/core";
import { Keys } from "@unts-utility/shared";

/**
 * NonFunctionKeys
 * @description Get union type of keys that are non-functions in object type T.
 * @example
 *  type Prop = {
 *      name: string;
 *      age: number;
 *      setName: (name: string) => void;
 *  }
 *  // Expect: 'name' | 'age'
 *  type NonFunctionKeysProp = NonFunctionKeys<Prop>
 */
export type NonFunctionKeys<T extends object> = Exclude<Keys<T>, FunctionKeys<T>>
