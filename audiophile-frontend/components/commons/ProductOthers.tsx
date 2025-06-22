import ProductOthersCard from "./ProductOthersCard"
import { ProductOthersProps } from "@/interfaces"

const ProductOthers: React.FC<ProductOthersProps> = ({ firstOtherProduct, secondOtherProduct, thirdOtherProduct }) => {
  return (
    <div className="flex flex-col gap-15 md:flex-row" >
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
        mobileImageUrl={secondOtherProduct.mobileImageUrl}
        tabletImageUrl={secondOtherProduct.tabletImageUrl}
        desktopImageUrl={secondOtherProduct.desktopImageUrl}
        item={secondOtherProduct.item}
        action={secondOtherProduct.action}      
      />
    </div>
  )
}

export default ProductOthers