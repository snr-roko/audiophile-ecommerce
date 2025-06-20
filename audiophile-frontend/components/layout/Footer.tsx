import Link from "next/link"
import logo from "@/public/assets/shared/desktop/logo.svg"
import Image from "next/image"
import facebook from "@/public/assets/shared/desktop/icon-facebook.svg"
import twitter from "@/public/assets/shared/desktop/icon-twitter.svg"
import instagram from "@/public/assets/shared/desktop/icon-instagram.svg"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101010] text-[#ffffff] px-4 md:px-30">
      <div className="flex items-center flex-col gap-10 py-10">
        <Image src={logo} width={130} height={130} alt="logo" />
        <nav className="flex gap-3 flex-col justify-center items-center">
          <Link href="#">HOME</Link>
          <Link href="#">HEADPHONES</Link>
          <Link href="#">SPEAKERS</Link>
          <Link href="#">EARPHONES</Link>
        </nav>
        <p className="text-center text-[#ffffff]/70">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of your personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
        <p className="text-[#ffffff]/70">Copyright 2021. All Rights Reserved</p>
        <div className="flex justify-center gap-4">
          <Image src={facebook} alt="facebook" height={20} width={20}/>
          <Image src={twitter} alt="twitter" height={20} width={20}/>
          <Image src={instagram} alt="instagram" height={20} width={20}/>
        </div>        
      </div>

    </footer>
  )
}

export default Footer