import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CartProps, CartItemProps } from '@/interfaces'

interface CartContextType {
  cart: CartProps
  setCart: React.Dispatch<React.SetStateAction<CartProps>>
  showCart: boolean
  setShowCart: (show: boolean) => void
  reloadCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [cart, setCart] = useState<CartProps>({ items: [] })
  const [showCart, setShowCart] = useState(false)
  const router = useRouter()

  const reloadCart = () => {
    const storedCart = localStorage.getItem('audiophile-cart')
    if (storedCart) {
      const parsedCart: CartItemProps[] = JSON.parse(storedCart)
      setCart({ items: parsedCart })
    } else {
      setCart({ items: [] })
    }
  }

  useEffect(() => {
    reloadCart()
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'audiophile-cart') reloadCart()
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('audiophile-cart', JSON.stringify(cart.items))
  }, [cart])

  useEffect(() => {
    const handleRoute = () => {
      setShowCart(false)
    }
    router.events.on('routeChangeStart', handleRoute)
    return () => router.events.off('routeChangeStart', handleRoute)
  }, [router])

  return (
    <CartContext.Provider value={{ cart, setCart, showCart, setShowCart, reloadCart }}>
      {children}
    </CartContext.Provider>
  )
} 