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

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 bg-[#FAFAFA]">
      <div className="relative bg-[#191919] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={HeroMobile}
          className="block md:hidden object-cover w-full h-auto"
          alt="Headphone Banner"
          priority
        />
        <Image
          src={HeroTablet}
          className="hidden md:block lg:hidden object-cover w-full h-auto"
          alt="Headphone Banner"
          priority
        />
        <Image
          src={HeroDesktop}
          className="hidden lg:block object-cover w-full h-auto"
          alt="Headphone Banner"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-10 text-center">
          <h2 className="text-[#ffffff]/70 md:text-2xl lg:text-3xl tracking-[0.4em] mb-4">
            NEW PRODUCT
          </h2>
          <div className="text-white text-4xl md:text-5xl lg:text-6xl font-[900] tracking-wide mb-4 text-center">
            <h1>XX99 MARK II</h1>
            <h1>HEADPHONES</h1>
          </div>
          <p className="text-white font-[100] md:text-2xl lg:text-3xl tracking-widest mb-8 text-center max-w-xl">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Link href="/products/xx99-mark-two-headphones" passHref>
            <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-8 py-4 font-bold tracking-widest text-sm">
              SEE PRODUCT
            </button>
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      </div>

      <div className="px-6 md:px-16 lg:px-40">
        <CategoryStack />
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between bg-[#D87D4A] rounded-lg overflow-hidden px-6 md:px-16 lg:px-40 py-16">
        <div className="relative w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
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
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6">ZX9<br />SPEAKER</h2>
          <p className="text-white/75 mb-8 max-w-md">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <Link href="/products/zx9-speaker" passHref>
            <button className="bg-black hover:bg-[#4C4C4C] text-white px-8 py-4 font-bold tracking-widest text-sm">
              SEE PRODUCT
            </button>
          </Link>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <div className="rounded-full border-2 border-white/20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[900px] lg:h-[900px]"></div>
        </div>
      </div>

      <div className="relative px-6 md:px-16 lg:px-40">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={ZX7Mobile}
            alt="ZX7 Speaker"
            className="block md:hidden object-cover w-full h-60"
            style={{ objectPosition: "center" }}
            priority
          />
          <Image
            src={ZX7Tablet}
            alt="ZX7 Speaker"
            className="hidden md:block lg:hidden object-cover w-full h-60"
            style={{ objectPosition: "center" }}
            priority
          />
          <Image
            src={ZX7Desktop}
            alt="ZX7 Speaker"
            className="hidden lg:block object-cover w-full h-60"
            style={{ objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center pl-6 md:pl-16 z-10">
            <h2 className="text-black text-3xl font-bold mb-6">ZX7 SPEAKER</h2>
            <Link href="/products/zx7-speaker" passHref>
              <button className="border border-black text-black px-8 py-3 font-bold tracking-widest text-sm hover:bg-black hover:text-white transition">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-40">
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
          <Image
            src={YX1Mobile}
            alt="YX1 Earphones"
            className="block md:hidden object-cover w-full h-48"
            style={{ objectPosition: "center" }}
            priority
          />
          <Image
            src={YX1Tablet}
            alt="YX1 Earphones"
            className="hidden md:block lg:hidden object-cover w-full h-48"
            style={{ objectPosition: "center" }}
            priority
          />
          <Image
            src={YX1Desktop}
            alt="YX1 Earphones"
            className="hidden lg:block object-cover w-full h-48"
            style={{ objectPosition: "center" }}
            priority
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <div className="bg-[#F1F1F1] rounded-lg w-full h-full flex flex-col justify-center pl-6 md:pl-12 py-10">
            <h2 className="text-black text-3xl font-bold mb-6">YX1 EARPHONES</h2>
            <Link href="/products/yx1-earphones" passHref>
              <button className="border border-black text-black px-8 py-3 font-bold tracking-widest text-sm hover:bg-black hover:text-white transition">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-40">
        <GearCard />
      </div>
    </div>
  )
}

export default Home