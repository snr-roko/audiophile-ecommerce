import { CategoryCardProps } from "@/interfaces";
import Image from "next/image";

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <Image 
        src={props.imageUrl}
        alt={`${props.title} image`}
      />
      {props.new ? <h2 className="text-[#D87D4A] md:text-2xl lg:text-3xl tracking-[0.4em] mb-4">NEW PRODUCT</h2> : null}
      <div>
        <h2 className="text-[#000000] font-[800] text-2xl">{props.title}</h2>
        <h2 className="text-[#000000] font-[800] text-2xl">{props.category}</h2>
      </div>
      <p className="text-[#000000]/30 font-[300] text-sm text-center">{props.description}</p>
    </div>
  )
}

export default CategoryCard