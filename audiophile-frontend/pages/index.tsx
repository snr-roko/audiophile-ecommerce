import Image from "next/image"
import Link from "next/link"
import HeroDesktop from "@/public/assets/home/desktop/image-hero.jpg"
import HeroTablet from "@/public/assets/home/tablet/image-header.jpg"
import HeroMobile from "@/public/assets/home/mobile/image-header.jpg"
import ZX9Desktop from "@/public/assets/home/desktop/image-speaker-zx9.png"
import ZX7Desktop from "@/public/assets/home/desktop/image-speaker-zx7.jpg"
import YX1Desktop from "@/public/assets/home/desktop/image-earphones-yx1.jpg"
import ZX9Tablet from "@/public/assets/home/tablet/image-speaker-zx9.png"
import ZX7Tablet from "@/public/assets/home/tablet/image-speaker-zx7.jpg"
import YX1Tablet from "@/public/assets/home/tablet/image-earphones-yx1.jpg"
import ZX9Mobile from "@/public/assets/home/mobile/image-speaker-zx9.png"
import ZX7Mobile from "@/public/assets/home/mobile/image-speaker-zx7.jpg"
import YX1Mobile from "@/public/assets/home/mobile/image-earphones-yx1.jpg"
import CategoryStack from "@/components/commons/CategoryStack"
import GearCard from "@/components/commons/GearCard"
import Button from "@/components/commons/Button"
import { useRouter } from "next/router"

const Home: React.FC = () => {

  const router = useRouter()

  return (
    <div>
      <div className="relative bg-[#191919] flex items-center px-7 lg:px-40 ">
        <div>
          <Image
            src={HeroMobile}
            className="block md:hidden w-full h-auto"
            alt="Headphone Banner"
            priority
          />
          <Image
            src={HeroTablet}
            className="hidden md:block lg:hidden w-full h-auto"
            alt="Headphone Banner"
            priority
          />
          <Image
            src={HeroDesktop}
            className="hidden lg:block object-contain w-full h-auto"
            alt="Headphone Banner"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center md:items-center lg:items-start justify-center z-10 px-7 lg:px-40 py-10 mt-20">
          <h2 className="text-[#ffffff]/60 font-[200] text-center lg:text-2xl tracking-[0.5em] mb-4">
            NEW PRODUCT
          </h2>
          <div>
            <h1 className="text-[#ffffff] text-3xl md:text-5xl font-[800] tracking-wide lg:text-left text-center">XX99 MARK II</h1>
            <h1 className="text-[#ffffff] text-3xl md:text-5xl font-[800] tracking-wide mb-4 lg:text-left text-center">HEADPHONES</h1>
          </div>
          <p className="text-[#ffffff] font-[100] text-sm mb-8 lg:text-left text-center md:w-1/2">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Button text="SEE PRODUCT" action={() => router.push('/products/xx99-mark-two-headphones')} />
        </div>
      </div>
      <div className="px-7 lg:px-40 py-20 flex flex-col gap-20 w-full bg-[#FFFFFF]">
        <CategoryStack />
        <div className="relative flex flex-col lg:flex-row items-center justify-center bg-[#D87D4A] rounded-lg px-7 lg:px-40 py-16 lg:py-0 lg:pt-30 overflow-hidden">
          <svg width="944" height="944" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
            <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".4">
              <circle cx="472" cy="472" r="235.5"/>
              <circle cx="472" cy="472" r="270.5"/>
              <circle cx="472" cy="472" r="471.5"/>
            </g>
          </svg>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-start lg:justify-start gap-10 lg:gap-20 w-full">
            <div className="flex justify-center lg:items-end">
              <Image
                src={ZX9Mobile}
                alt="ZX9 Speaker"
                className="block md:hidden"
                width={172}
                height={207}
                priority
              />
              <Image
                src={ZX9Tablet}
                alt="ZX9 Speaker"
                className="hidden md:block lg:hidden"
                width={197}
                height={237}
                priority
              />
              <Image
                src={ZX9Desktop}
                alt="ZX9 Speaker"
                className="hidden lg:block"
                width={410}
                height={493}
                priority
              />
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-[#ffffff] text-4xl md:text-6xl font-bold tracking-wide mb-6">ZX9<br />SPEAKER</h2>
              <p className="text-[#ffffff]/60 text-sm mb-6">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
              </p>
              <button onClick={() => router.push('/products/zx9-speaker')} className="bg-black hover:bg-[#4C4C4C] hover:cursor-pointer bg-[#000000] text-white px-8 py-4 tracking-widest text-sm font-[600]">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={ZX7Mobile}
              alt="ZX7 Speaker"
              className="block md:hidden object-cover w-full h-60"
              priority
            />
            <Image
              src={ZX7Tablet}
              alt="ZX7 Speaker"
              className="hidden md:block lg:hidden object-cover w-full h-60"
              priority
            />
            <Image
              src={ZX7Desktop}
              alt="ZX7 Speaker"
              className="hidden lg:block object-cover w-full h-60"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start pl-6 md:pl-16 z-10">
              <h2 className="text-black text-3xl font-bold mb-6">ZX7 SPEAKER</h2>
              <button onClick={() => router.push('/products/zx7-speaker')} className="border border-black text-[#000000] px-8 py-3 font-bold tracking-widest text-sm hover:bg-[#000000] hover:text-[#ffffff] transition">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
            <Image
              src={YX1Mobile}
              alt="YX1 Earphones"
              className="block md:hidden object-contain w-full h-48"
              priority
            />
            <Image
              src={YX1Tablet}
              alt="YX1 Earphones"
              className="hidden md:block lg:hidden object-contain w-full h-48"
              priority
            />
            <Image
              src={YX1Desktop}
              alt="YX1 Earphones"
              className="hidden lg:block object-cover w-full h-48"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="bg-[#F1F1F1] rounded-lg w-full h-full flex flex-col justify-center items-start pl-6 md:pl-12 py-10">
              <h2 className="text-black text-3xl font-bold mb-6">YX1 EARPHONES</h2>
              <button onClick={() => router.push('/products/yx1-earphones')} className="border border-black text-black px-8 py-3 font-bold tracking-widest text-sm hover:bg-black hover:text-white transition">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
        <GearCard />
      </div>
    </div>
  )
}

export default Home