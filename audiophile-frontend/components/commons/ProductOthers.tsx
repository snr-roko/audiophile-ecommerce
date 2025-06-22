import ProductOthersCard from "./ProductOthersCard"
import { ProductOthersProps } from "@/interfaces"

const ProductOthers: React.FC<ProductOthersProps> = ({ firstOtherProduct, secondOtherProduct, thirdOtherProduct }) => {
  return (
    <div className="flex flex-col gap-5" >
      <h2 className="text-[#000000] font-[800] text-center text-2xl md:tracking-wide">YOU MAY ALSO LIKE</h2>
      <div className="flex flex-col justify-center items-center gap-20 md:flex-row md:justify-between">
        <ProductOthersCard
          mobileImageUrl={firstOtherProduct.mobileImageUrl}
          tabletImageUrl={firstOtherProduct.tabletImageUrl}
          desktopImageUrl={firstOtherProduct.desktopImageUrl}
          item={firstOtherProduct.item}
          action={firstOtherProduct.action}
        />
        <ProductOthersCard
          mobileImageUrl={secondOtherProduct.mobileImageUrl}
          tabletImageUrl={secondOtherProduct.tabletImageUrl}
          desktopImageUrl={secondOtherProduct.desktopImageUrl}
          item={secondOtherProduct.item}
          action={secondOtherProduct.action}
        />
        <ProductOthersCard
          mobileImageUrl={thirdOtherProduct.mobileImageUrl}
          tabletImageUrl={thirdOtherProduct.tabletImageUrl}
          desktopImageUrl={thirdOtherProduct.desktopImageUrl}
          item={thirdOtherProduct.item}
          action={thirdOtherProduct.action}
        />
      </div>
    </div>
  )
}

export default ProductOthers