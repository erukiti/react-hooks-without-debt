import { renderHook, act } from '@testing-library/react-hooks'

import { useTextInput } from './custom-hook'

test('useTextInput', () => {
  const { result } = renderHook(() => useTextInput('hoge'))
  const [value, handleChange] = result.current
  expect(value).toBe('hoge')
  act(() => {
    handleChange({ target: { value: 'fuga' } })
  })
  expect(result.current[0]).toBe('fuga')
})
