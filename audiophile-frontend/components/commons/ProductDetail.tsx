import ProductInfo from "./ProductInfo"
import { ProductDetailProps } from "@/interfaces"

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  return (
    <div className="bg-[#ffffff] px-7 lg:px-40 py-20 flex flex-col gap-30">
      <ProductInfo
        mobileImageUrl={props.mobileMainImageUrl}
        tabletImageUrl={props.tabletMainImageUrl}
        desktopImageUrl={props.desktopMainImageUrl}
        new={props.new}
        title={props.title}
        category={props.category}
        description={props.description}
        price={props.price}
        action={props.action}
      />
    </div>
  )
}

export default ProductDetail