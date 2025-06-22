import CategoryStackCard from "./CategoryStackCard"
import headphonesCategoryImage from "@/public/assets/shared/desktop/image-category-thumbnail-headphones.png"
import speakersCategoryImage from "@/public/assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphonesCategoryImage from "@/public/assets/shared/desktop/image-category-thumbnail-earphones.png"
import { useRouter } from "next/router"

const CategoryStack: React.FC = () => {
  const router = useRouter()

  return (
    <div className="pt-15 flex flex-col gap-30 w-full md:flex-row md:gap-10 bg-[#FFFFFF]" >
      <CategoryStackCard action={() => router.push('/headphones')} imageUrl={headphonesCategoryImage} category="HEADPHONES" />
      <CategoryStackCard action={() => router.push('/speakers')} imageUrl={speakersCategoryImage} category="SPEAKERS" />
      <CategoryStackCard action={() => router.push('/earphones')} imageUrl={earphonesCategoryImage} category="EARPHONES" />
    </div>
  )
}

export default CategoryStack