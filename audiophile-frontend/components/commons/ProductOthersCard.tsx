import Image from "next/image"
import Button from "./Button"
import { ProductOtherCardProps } from "@/interfaces"

const ProductOthersCard: React.FC<ProductOtherCardProps> = (props) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div>
        <Image 
            src={props.mobileImageUrl}
            alt={`${props.item} image`}
            className="md:hidden"
            width={327}
            height={327}
          />
          <Image 
            src={props.tabletImageUrl}
            alt={`${props.item} image`}
            className="hidden md:block lg:hidden"
            width={281}
            height={400}
          />
          <Image 
            src={props.desktopImageUrl}
            alt={`${props.item} image`}
            className="hidden lg:block object-contain"
            width={540}
            height={560}
          />        
      </div>
      <h2 className="text-[#000000] font-[800] text-center text-2xl md:tracking-wide">{props.item}</h2>
      <Button text="SEE PRODUCT" action={props.action} />
    </div>
  )
}

export default ProductOthersCard