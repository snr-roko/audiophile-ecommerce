import Link from "next/link"
import logo from "@/public/assets/shared/desktop/logo.svg"
import shoppingCart from "@/public/assets/shared/desktop/icon-cart.svg"
import menu from "@/public/assets/shared/tablet/icon-hamburger.svg"
import Image from "next/image"
import { useState, useEffect } from "react"
import Cart from "@/components/commons/Cart"
import { CartProps } from "@/interfaces"
import CategoryStack from "@/components/commons/CategoryStack"

const Header: React.FC = () => {
  const [cart, setCart] = useState<CartProps>({ items: [] })
  const [showCart, setShowCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const storedCart = localStorage.getItem('audiophile-cart')
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart)
      setCart({ items: parsedCart })
    }
  }, [])

  const cartItemCount = cart.items.length

  return (
    <header className="bg-[#191919] text-[#ffffff] px-7 lg:px-30 relative z-50">
      <div className="flex justify-between items-center border-[#ffffff]/40 border-b-1 py-8 relative">
        <button className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
          <Image src={menu} alt="menu" height={20} width={20}/>
        </button>
        <Link href="/">
          <Image src={logo} width={140} height={140} alt="logo"/>
        </Link>
        <div className="hidden lg:flex gap-10">
          <Link className="hover:text-[#FBAF85]" href="/">HOME</Link>
          <Link className="hover:text-[#FBAF85]" href="/headphones">HEADPHONES</Link>
          <Link className="hover:text-[#FBAF85]" href="/speakers">SPEAKERS</Link>
          <Link className="hover:text-[#FBAF85]" href="/earphones">EARPHONES</Link>
        </div>
        <div className="relative">
          <button 
            onClick={() => setShowCart(!showCart)}
            className="relative"
          >
            <Image src={shoppingCart} alt="shopping cart" height={20} width={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
          {showCart && (
            <div className="absolute left-0 m-7 mt-4 w-[95vw] max-w-md z-50">
              <Cart showModal={showCart} setShowModal={setShowCart} />
            </div>
          )}
        </div>
        {showMenu && (
          <div className="absolute left-0 top-full w-full flex justify-center z-50 mt-2">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[95vw] max-w-md">
              <CategoryStack />
              <button className="absolute top-2 right-2 text-black text-2xl" onClick={() => setShowMenu(false)}>×</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header