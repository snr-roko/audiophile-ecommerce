import Image from "next/image"
import HeroDesktop from "@/public/assets/home/desktop/image-hero.jpg"
import HeroTablet from "@/public/assets/home/tablet/image-header.jpg"
import HeroMobile from "@/public/assets/home/mobile/image-header.jpg"

const Home: React.FC = () => {
  return (
    <div className="relative">
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
        <p className="text-white font-[100] md:text-2xl lg:text-3xl tracking-widest mb-4 text-center">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.

        </p>
      </div>
    </div>
  )
}

export default Home