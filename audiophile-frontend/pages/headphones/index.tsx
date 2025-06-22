import CategoryHeader from "@/components/commons/CategoryHeader"
import CategoryCard from "@/components/commons/CategoryCard"
import mobileHeadphonexx992Image from "@/public/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
import tabletHeadphonexx992Image from "@/public/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
import desktopHeadphonexx992Image from "@/public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
import mobileHeadphonexx991Image from "@/public/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
import tabletHeadphonexx991Image from "@/public/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg"
import desktopHeadphonesxx991Image from "@/public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
import mobileHeadphonexx59Image from "@/public/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
import tabletHeadphonexx59Image from "@/public/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg"
import desktopHeadphonexx59Image from "@/public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
import CategoryStack from "@/components/commons/CategoryStack"
import GearCard from "@/components/commons/GearCard"
import { useRouter } from "next/router"

const Headphones: React.FC = () => {

  const router = useRouter()

  return (
    <div>
      <CategoryHeader title="HEADPHONES" />
      <div className="px-7 lg:px-40 py-20 flex flex-col gap-30 w-full bg-[#FFFFFF]">
        <div className="bg-[#ffffff] flex flex-col gap-30" >
          <CategoryCard
            mobileImageUrl={mobileHeadphonexx992Image}
            tabletImageUrl={tabletHeadphonexx992Image}
            desktopImageUrl={desktopHeadphonexx992Image}
            new={true}
            title="XX99 MARK II"
            category="HEADPHONES"
            description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            action={() => router.push('/products/xx99-mark-two-headphones')}
          />
          <CategoryCard
            mobileImageUrl={mobileHeadphonexx991Image}
            tabletImageUrl={tabletHeadphonexx991Image}
            desktopImageUrl={desktopHeadphonesxx991Image}
            new={false}
            title="XX99 MARK I"
            category="HEADPHONES"
            swap={true}
            description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, music aficionados, and sound specialists like yourself."
            action={() => router.push('/products/xx99-mark-one-headphones')}
          />
          <CategoryCard
            mobileImageUrl={mobileHeadphonexx59Image}
            tabletImageUrl={tabletHeadphonexx59Image}
            desktopImageUrl={desktopHeadphonexx59Image}
            new={false}
            title="XX59"
            category="HEADPHONES"
            description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
            action={() => router.push('/products/xx59-headphones')}
          />
        </div>
        <CategoryStack />
        <GearCard />
      </div>
    </div>
  )
}

export default Headphones