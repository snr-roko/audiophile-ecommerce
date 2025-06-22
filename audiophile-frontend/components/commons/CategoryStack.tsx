import CategoryStackCard from "./CategoryStackCard"
import headphonesCategoryImage from "@/public/assets/shared/desktop/image-category-thumbnail-headphones.png"
import speakersCategoryImage from "@/public/assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphonesCategoryImage from "@/public/assets/shared/desktop/image-category-thumbnail-earphones.png"

const CategoryStack: React.FC = () => {
  return (
    <div className="py-10 flex flex-col gap-30 w-full md:flex-row md:gap-10 bg-[#FFFFFF]" >
      <CategoryStackCard imageUrl={headphonesCategoryImage} category="HEADPHONES" />
      <CategoryStackCard imageUrl={speakersCategoryImage} category="SPEAKERS" />
      <CategoryStackCard imageUrl={earphonesCategoryImage} category="EARPHONES" />
    </div>
  )
}

export default CategoryStack