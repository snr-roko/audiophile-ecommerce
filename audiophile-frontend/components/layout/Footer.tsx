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
        <Image src={logo} width={140} height={140} alt="logo" />
        <nav className="flex gap-3 flex-col justify-center items-center md:items-start md:flex-row">
          <Link className="hover:text-[#FBAF85]" href="#">HOME</Link>
          <Link className="hover:text-[#FBAF85]" href="#">HEADPHONES</Link>
          <Link className="hover:text-[#FBAF85]" href="#">SPEAKERS</Link>
          <Link className="hover:text-[#FBAF85]" href="#">EARPHONES</Link>
        </nav>
        <p className="text-center text-[#ffffff]/70 md:text-left">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of your personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between w-full md:mt-8">
          <p className="text-[#ffffff]/70 text-center md:text-left">Copyright 2021. All Rights Reserved</p>
          <div className="flex justify-center gap-4">
            <Image src={facebook} alt="facebook" height={20} width={25}/>
            <Image src={twitter} alt="twitter" height={20} width={25}/>
            <Image src={instagram} alt="instagram" height={20} width={25}/>
          </div>
        </div>        
      </div>

    </footer>
  )
}

export default Footer