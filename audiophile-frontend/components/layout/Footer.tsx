import Link from "next/link"
import logo from "@/public/assets/shared/desktop/logo.svg"
import Image from "next/image"
import facebook from "@/public/assets/shared/desktop/icon-facebook.svg"
import twitter from "@/public/assets/shared/desktop/icon-twitter.svg"
import instagram from "@/public/assets/shared/desktop/icon-instagram.svg"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101010] text-[#ffffff] px-7 lg:px-30">
      <div className="flex items-center md:items-start flex-col gap-10 py-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:w-full">
          <Image src={logo} width={140} height={140} alt="logo" />
          <nav className="flex gap-3 flex-col justify-center items-center md:items-start md:flex-row">
            <Link className="hover:text-[#FBAF85]" href="/">HOME</Link>
            <Link className="hover:text-[#FBAF85]" href="/headphones">HEADPHONES</Link>
            <Link className="hover:text-[#FBAF85]" href="/speakers">SPEAKERS</Link>
            <Link className="hover:text-[#FBAF85]" href="/earphones">EARPHONES</Link>
          </nav>
        </div>
        <div className="lg:flex lg:justify-between lg:w-full">
          <p className="text-center text-[#ffffff]/70 md:text-left lg:flex-1/2">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of your personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
          <div className=" hidden lg:flex justify-center gap-4 lg:flex-1/2 lg:items-end lg:justify-end">
              <Image src={facebook} alt="facebook" height={20} width={25}/>
              <Image src={twitter} alt="twitter" height={20} width={25}/>
              <Image src={instagram} alt="instagram" height={20} width={25}/>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between w-full md:mt-8">
          <p className="text-[#ffffff]/70 text-center md:text-left font-[900]">Copyright 2021. All Rights Reserved</p>
          <div className="flex justify-center gap-4 lg:hidden">
            <Image src={facebook} alt="facebook" height={20} width={25} className="hover:cursor-pointer"/>
            <Image src={twitter} alt="twitter" height={20} width={25}/>
            <Image src={instagram} alt="instagram" height={20} width={25}/>
          </div>
        </div>        
      </div>

    </footer>
  )
}

export default Footer