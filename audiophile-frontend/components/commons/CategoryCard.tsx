import { CategoryCardProps } from "@/interfaces";
import Image from "next/image";
import Button from "./Button";

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-30 lg:items-center flex flex-col gap-30">
      <div className={`${props.swap ? 'lg:order-2' : 'lg:order-1'}`}>
        <Image 
          src={props.mobileImageUrl}
          alt={`${props.title} image`}
          className="mb-3 md:hidden w-full h-auto"
        />
        <Image 
          src={props.tabletImageUrl}
          alt={`${props.title} image`}
          className="hidden md:block lg:hidden w-full h-auto"
        />
        <Image 
          src={props.desktopImageUrl}
          alt={`${props.title} image`}
          className="hidden lg:block w-full h-auto object-contain"
        />
      </div>      
      <div className={`flex flex-col items-center justify-center w-full gap-3 lg:items-baseline ${props.swap ? 'lg:order-1' : 'lg:order-2'}`}>
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