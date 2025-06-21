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

const Headphones: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <CategoryHeader title="HEADPHONES" />
      <div className="bg-[#ffffff] px-7 lg:px-30 py-20 flex flex-col gap-15" >
        <CategoryCard
          mobileImageUrl={mobileHeadphonexx992Image}
          tabletImageUrl={tabletHeadphonexx992Image}
          desktopImageUrl={desktopHeadphonexx992Image}
          new={true}
          title="XX99 MARK II"
          category="HEADPHONES"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          action={() => console.log('clicked')}
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
          action={() => console.log('clicked')}
        />
        <CategoryCard
          mobileImageUrl={mobileHeadphonexx59Image}
          tabletImageUrl={tabletHeadphonexx59Image}
          desktopImageUrl={desktopHeadphonexx59Image}
          new={false}
          title="XX59"
          category="HEADPHONES"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          action={() => console.log('clicked')}
        />
      </div>
    </div>
  )
}

export default Headphones