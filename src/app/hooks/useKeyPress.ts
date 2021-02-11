import { useEffect } from 'react'

export default function useKeyPress(key: string, action: () => void) {
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === key) action()
    document.removeEventListener('keydown', onKeyDown)
  }

  const onKeyUp = () => {
    document.addEventListener('keydown', onKeyDown, { once: true })
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)

    // cleanup when unmounted
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }
  })
}
