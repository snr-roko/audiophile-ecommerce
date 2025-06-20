import Link from "next/link"
import { Menu, ShoppingCart } from "lucide-react"

const Header: React.FC = () => {
  return (
    <header className="bg-[#101010] text-[#ffffff] px-4 md:px-30">
      <div className="flex justify-between items-center border-[#ffffff] border-b-1 py-8">
        <Menu className="md:hidden"/>
        <h1 className="text-3xl font-bold">audiophile</h1>
        <div className="hidden md:flex gap-10">
          <Link className="hover:text-[#FBAF85]" href="#">HOME</Link>
          <Link className="hover:text-[#FBAF85]" href="#">HEADPHONES</Link>
          <Link className="hover:text-[#FBAF85]" href="#">SPEAKERS</Link>
          <Link className="hover:text-[#FBAF85]" href="#">EARPHONES</Link>
        </div>
        <ShoppingCart />
      </div>
    </header>
  )
}

export default Header