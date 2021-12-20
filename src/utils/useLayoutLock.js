import { useEffect } from 'react'

export default function useLayoutLock(visibleElement) {
  const body = document.body
  let topScrollCoord

  const layoutLock = () => {
    topScrollCoord = window.scrollY
    body.classList.add('is-locked')
    body.style.top = `-${topScrollCoord}px`
  }

  const unlcokLayout = () => {
    body.classList.remove('is-locked')
    body.style.top = ''
    window.scrollTo({
      top: topScrollCoord,
      behavior: 'instant'
    })
  }

  useEffect(() => {
    if (visibleElement) {
      layoutLock()
    }

    return () => {
      if (visibleElement) {
        unlcokLayout()
      }
    }
  })
}
