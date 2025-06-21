import { ProductInfoProps } from "@/interfaces"
import Image from "next/image"
import Button from "./Button"

const ProductInfo: React.FC<ProductInfoProps> = (props) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-30 flex flex-col gap-8">
      <div>
        <Image 
          src={props.mobileImageUrl}
          alt={`${props.title} image`}
          className="md:hidden w-full h-auto"
        />
        <Image 
          src={props.tabletImageUrl}
          alt={`${props.title} image`}
          className="hidden md:block lg:hidden w-full h-auto"
        />
        <Image 
          src={props.desktopImageUrl}
          alt={`${props.title} image`}
          className="hidden lg:block h-auto object-contain"
        />
      </div>      
      <div className={`flex flex-col items-center justify-center w-full gap-6 lg:items-baseline`}>
        {props.new ? <h2 className="text-[#D87D4A] tracking-[0.4em] lg:tracking-[0.5em] mb-4">NEW PRODUCT</h2> : null}
        <div>
          <h2 className="text-[#000000] text-center lg:text-left font-[800] text-2xl md:tracking-wide">{props.title}</h2>
          <h2 className="text-[#000000] font-[800] text-center lg:text-left text-2xl md:tracking-wide">{props.category}</h2>
        </div>
        <p className="text-[#000000]/40 font-[300] text-sm text-center lg:text-left lg:w-4/5">{props.description}</p>
        <Button text="ADD TO CART" action={props.action}/>
      </div>
    </div>
  )
}

export default ProductInfo