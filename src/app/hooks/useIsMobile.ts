import { useState, useEffect } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767)

    handleResize() // Устанавливаем значение при монтировании
    window.addEventListener('resize', handleResize) // Обновляем при изменении размеров окна

    return () => window.removeEventListener('resize', handleResize) // Убираем слушатель при размонтировании
  }, [])

  return isMobile
}

export default useIsMobile
