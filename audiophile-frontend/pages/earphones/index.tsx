import CategoryHeader from "@/components/commons/CategoryHeader";
import CategoryCard from "@/components/commons/CategoryCard";
import earphoneImage from "@/public/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"

const Earphones: React.FC = () => {
  return (
    <div>
      <CategoryHeader title="EARPHONES" />
      <div className="bg-[#ffffff] px-7 lg:px-30 py-10">
        <CategoryCard 
          imageUrl={earphoneImage} 
          new={true} 
          title="YX1 WIRELESS"
          category="EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones."
        />
      </div>
    </div>
  )
}

export default Earphones