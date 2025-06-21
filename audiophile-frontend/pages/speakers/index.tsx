import CategoryHeader from "@/components/commons/CategoryHeader";
import CategoryCard from "@/components/commons/CategoryCard";
import mobileSpeakerzx9Image from "@/public/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
import tabletSpeakerzx9Image from "@/public/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg"
import desktopSpeakerzx9Image from "@/public/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
import mobileSpeakerzx7Image from "@/public/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"
import tabletSpeakerzx7Image from "@/public/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg"
import desktopSpeakerzx7Image from "@/public/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"

const Speakers: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <CategoryHeader title="SPEAKERS" />
      <div className="bg-[#ffffff] px-7 lg:px-40 py-20 flex flex-col gap-30">
        <CategoryCard 
          mobileImageUrl={mobileSpeakerzx9Image}
          tabletImageUrl={tabletSpeakerzx9Image}
          desktopImageUrl={desktopSpeakerzx9Image}
          new={true}
          title="ZX9"
          category="SPEAKER"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          action={() => console.log('clicked')}
        />
        <CategoryCard 
          mobileImageUrl={mobileSpeakerzx7Image}
          tabletImageUrl={tabletSpeakerzx7Image}
          desktopImageUrl={desktopSpeakerzx7Image}
          swap={true}
          new={false}
          title="ZX7"
          category="SPEAKER"
          description="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          action={() => console.log('clicked')}
        />
      </div>
    </div>
  )
}

export default Speakers