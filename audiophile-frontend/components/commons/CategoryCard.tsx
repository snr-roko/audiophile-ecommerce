import { CategoryCardProps } from "@/interfaces";
import Image from "next/image";
import Button from "./Button";

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  return (
    <div className="lg:flex lg:gap-30 lg:items-center">
      <Image 
        src={props.mobileImageUrl}
        alt={`${props.title} image`}
        className="mb-5 md:hidden"
      />
      <Image 
        src={props.tabletImageUrl}
        alt={`${props.title} image`}
        className="mb-5 hidden md:block lg:hidden"
      />
      <Image 
        src={props.desktopImageUrl}
        alt={`${props.title} image`}
        className="mb-5 hidden lg:block w-[540] h-[560] lg:flex-1/2 object-contain"
      />            
      <div className="flex flex-col items-center justify-center w-full gap-3 lg:items-baseline lg:flex-1/2">
        {props.new ? <h2 className="text-[#D87D4A] tracking-[0.4em] lg:tracking-[0.5em] mb-4">NEW PRODUCT</h2> : null}
        <div>
          <h2 className="text-[#000000] text-center lg:text-left font-[800] text-2xl md:tracking-wide">{props.title}</h2>
          <h2 className="text-[#000000] font-[800] text-center lg:text-left text-2xl md:tracking-wide">{props.category}</h2>
        </div>
        <p className="text-[#000000]/40 font-[300] text-sm text-center lg:text-left lg:w-4/5">{props.description}</p>
        <Button text="SEE PRODUCT" action={props.action}/>
      </div>
    </div>
  )
}

export default CategoryCard