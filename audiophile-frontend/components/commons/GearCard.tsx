import Image from "next/image"
import gearImageMobile from "@/public/assets/shared/mobile/image-best-gear.jpg"
import gearImageTabet from "@/public/assets/shared/tablet/image-best-gear.jpg"
import gearImageDesktop from "@/public/assets/shared/desktop/image-best-gear.jpg"

const GearCard: React.FC = () => {
  return (
    <div className="px-7 lg:px-40 py-20 grid grid-cols-1 gap-20 bg-[#FFFFFF] lg:grid-cols-2">
      <div className="lg:order-2">
        <Image 
        src={gearImageMobile}
        className="md:hidden"
        alt="Gear Image"
        />
        <Image 
        src={gearImageTabet}
        className="hidden md:block lg:hidden"
        alt="Gear Image"
        />
        <Image 
        src={gearImageDesktop}
        className="hidden lg:block lg:object-contain lg:h-auto"
        alt="Gear Image"
        />                
      </div>
      <div className="lg:order-1 text-center lg:text-left flex flex-col gap-5 items-center lg:items-start justify-center text-[#000000]">
        <h2 className="font-[800] text-3xl lg:w-3/5">BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR</h2>
        <p className="text-[#000000]/50 text-sm lg:w-4/5">
          Located at the hear of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and esperience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your protable audio ecuipment. 
        </p>
      </div>
    </div>
  )
}

export default GearCard