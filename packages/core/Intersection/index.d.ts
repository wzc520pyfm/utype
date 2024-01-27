import { Keys } from "@utype/shared";

/**
 * Intersection
 * @description From T pick properties that exist in U.
 * @example
 *  type Prop = { name: string; age: number; visible: boolean }
 *  type DefaultProps = { age: number; sex: string }
 *  // Expect: { age: number; }
 *  type IntersectionProp = Intersection<Prop, DefaultProps>
 */
export type Intersection<T, U> = Pick<T, Extract<Keys<T>, Keys<U>>>;
