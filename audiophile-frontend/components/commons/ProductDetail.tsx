import ProductInfo from "./ProductInfo"
import { ProductDetailProps } from "@/interfaces"

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  return (
    <div>
      <ProductInfo
        mobileImageUrl={props.mobileMainImageUrl}
        tabletImageUrl={props.tabletMainImageUrl}
        desktopImageUrl={props.desktopMainImageUrl}
        new={props.new}
        title={props.title}
        category={props.category}
        description={props.description}
        price={props.price}
        slug={props.slug}
        action={props.action}
      />
    </div>
  )
}

export default ProductDetail