import type { useState } from 'react'

/**
 * StateReturnType
 * @description Get the return type of React.useState.
 */
export type StateReturnType<T> = ReturnType<typeof useState<T>>
