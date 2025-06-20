import Link from "next/link"
import logo from "@/public/assets/shared/desktop/logo.svg"
import shoppingCart from "@/public/assets/shared/desktop/icon-cart.svg"
import menu from "@/public/assets/shared/tablet/icon-hamburger.svg"
import Image from "next/image"

const Header: React.FC = () => {
  return (
    <header className="bg-[#101010] text-[#ffffff] px-4 md:px-30">
      <div className="flex justify-between items-center border-[#ffffff] border-b-1 py-8">
        <Image src={menu} alt="menu" height={20} width={20} className="md:hidden"/>
        <Image src={logo} width={130} height={130} alt="logo"/>
        <div className="hidden md:flex gap-10">
          <Link className="hover:text-[#FBAF85]" href="#">HOME</Link>
          <Link className="hover:text-[#FBAF85]" href="#">HEADPHONES</Link>
          <Link className="hover:text-[#FBAF85]" href="#">SPEAKERS</Link>
          <Link className="hover:text-[#FBAF85]" href="#">EARPHONES</Link>
        </div>
        <Image src={shoppingCart} alt="shopping cart" height={20} width={20} />
      </div>
    </header>
  )
}

export default Header