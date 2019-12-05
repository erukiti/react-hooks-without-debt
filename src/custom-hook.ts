import { useState, useCallback } from 'react'

export const useTextInput = (
  init: string = '',
): [string, (e: any) => void] => {
  const [value, setValue] = useState(init)
  const handleChange = useCallback(
    (e: any) => {
      setValue(e.target.value)
    },
    [setValue],
  )
  return [value, handleChange]
}
