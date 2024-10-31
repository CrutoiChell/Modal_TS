import s from './App.module.css'
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { useState } from 'react'

export function App() {

  const [window, setWindow] = useState<boolean>(false)

  return (
    <main>
      <button className={s.btn} onClick={() => setWindow(true)}>Испугаться</button>
      <ModalWindow
        window={window}
        setWindow={setWindow}
      />
    </main>
  )
}
