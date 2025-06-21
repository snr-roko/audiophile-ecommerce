import { CategoryCardProps } from "@/interfaces";
import Image from "next/image";
import Button from "./Button";

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  return (
    <div className="lg:flex lg:gap-20">
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
        className="mb-5 hidden lg:block w-1/2"
      />            
      <div className="flex flex-col items-center justify-center w-full gap-3 lg:items-baseline">
        {props.new ? <h2 className="text-[#D87D4A] md:text-2xl lg:text-3xl tracking-[0.4em] mb-4">NEW PRODUCT</h2> : null}
        <div>
          <h2 className="text-[#000000] text-center lg:text-left font-[800] text-2xl md:tracking-wide">{props.title}</h2>
          <h2 className="text-[#000000] font-[800] text-center lg:text-left text-2xl md:tracking-wide">{props.category}</h2>
        </div>
        <p className="text-[#000000]/40 font-[300] text-sm text-center lg:text-left">{props.description}</p>
        <Button text="SEE PRODUCT" action={props.action}/>
      </div>
    </div>
  )
}

export default CategoryCard