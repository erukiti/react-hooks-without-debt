import React from 'react'
import { useTextInput } from './custom-hook'

const App: React.FC = () => {
  const [name, handleChangeName] = useTextInput()
  const [favorite, handleChangeFavorite] = useTextInput()
  return (
    <div>
      名前: <input value={name} onChange={handleChangeName} />
      <br />
      好きなもの: <input value={favorite} onChange={handleChangeFavorite} />
    </div>
  )
}

export default App
