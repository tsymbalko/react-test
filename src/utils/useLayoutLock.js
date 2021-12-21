import { useEffect } from 'react'

const useLayoutLock = (isVisible) => {
  const body = document.body
  let topScrollCoordinate

  const lockLayout = () => {
    topScrollCoordinate = window.scrollY
    body.classList.add('is-locked')
    body.style.top = `-${topScrollCoordinate}px`
  }

  const unlcokLayout = () => {
    body.classList.remove('is-locked')
    body.style.top = ''
    window.scrollTo({
      top: topScrollCoordinate,
      behavior: 'instant'
    })
  }

  useEffect(() => {
    if (isVisible) {
      lockLayout()
    }

    return () => {
      const hasLockClass = body.classList.contains('is-locked')
      if (hasLockClass) {
        unlcokLayout()
      }
    }
  }, [isVisible])
}

export { useLayoutLock }
