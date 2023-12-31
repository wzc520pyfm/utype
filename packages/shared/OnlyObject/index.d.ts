import { ObjectKeyType } from "@utype/shared";

/**
 * OnlyObject
 * @description Declare object, excluding Array, Map, Set, RegExp, Date, null, etc.
 */
export type OnlyObject = Record<ObjectKeyType, unknown>;
