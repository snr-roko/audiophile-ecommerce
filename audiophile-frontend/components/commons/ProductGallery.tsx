import { ProductGalleryProps } from "@/interfaces"
import Image from "next/image"

const ProductGallery:React.FC<ProductGalleryProps> = (props) => {
  return (
    <div className="flex gap-3 md:flex-col">
      <div>
        <div>
          <Image
            src={props.firstMobileImageUrl}
            alt="Gallery First Image"
            className="md:hidden"
            width={327}
            height={174}
          />
          <Image
            src={props.firstTabletImageUrl}
            alt="Gallery First Image"
            className="hidden md:block lg:hidden"
            width={277}
            height={174}
          />
          <Image
            src={props.firstDesktopImageUrl}
            alt="Gallery First Image"
            className="hidden lg:block object-contain"
            width={445}
            height={280}
          />
        </div>
        <div>
          <Image 
            src={props.secondMobileImageUrl}
            alt="Gallery Second Image"
            className="md:hidden"
            width={327}
            height={174}
          />
          <Image 
            src={props.secondTabletImageUrl}
            alt="Gallery Second Image"
            className="hidden md:block lg:hidden"
            width={277}
            height={174}
          />
          <Image 
            src={props.secondDesktopImageUrl}
            alt="Gallery Second Image"
            className="hidden lg:block object-contain"
            width={445}
            height={280}
          />
        </div>        
      </div>
      <div>
        <Image 
            src={props.thirdMobileImageUrl}
            alt="Gallery Second Image"
            className="md:hidden"
            width={327}
            height={174}
          />
        <Image 
          src={props.thirdTabletImageUrl}
          alt="Gallery First Image"
          className="hidden md:block lg:hidden"
          width={277}
          height={174}
        />
        <Image 
          src={props.thirdDesktopImageUrl}
          alt="Gallery First Image"
          className="hidden lg:block object-contain"
          width={445}
          height={280}
        />
      </div>  
    </div>
  )
}

export default ProductGallery