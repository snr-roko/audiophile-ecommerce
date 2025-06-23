import Link from "next/link"
import logo from "@/public/assets/shared/desktop/logo.svg"
import shoppingCart from "@/public/assets/shared/desktop/icon-cart.svg"
import menu from "@/public/assets/shared/tablet/icon-hamburger.svg"
import Image from "next/image"
import { useState } from "react"
import Cart from "@/components/commons/Cart"
import CategoryStack from "@/components/commons/CategoryStack"
import { useCart } from "@/components/commons/CartContext"

const Header: React.FC = () => {
  const { cart, showCart, setShowCart } = useCart()
  const [showMenu, setShowMenu] = useState(false)

  const cartItemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)

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
            <div className="absolute right-0 mt-4 w-[95vw] max-w-md z-50" style={{minWidth:'320px'}}>
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