import CategoryHeader from "@/components/commons/CategoryHeader";
import CategoryCard from "@/components/commons/CategoryCard";
import mobileEarphoneImage from "@/public/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"
import tabletEarphoneImage from "@/public/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg"
import desktopEarphoneImage from "@/public/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"

const Earphones: React.FC = () => {
  return (
    <div>
      <CategoryHeader title="EARPHONES" />
      <div className="bg-[#ffffff] px-7 lg:px-30 py-20">
        <CategoryCard 
          mobileImageUrl={mobileEarphoneImage}
          tabletImageUrl={tabletEarphoneImage}
          desktopImageUrl={desktopEarphoneImage} 
          new={true} 
          title="YX1 WIRELESS"
          category="EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          action={() => console.log('clicked')}
        />
      </div>
    </div>
  )
}

export default Earphones