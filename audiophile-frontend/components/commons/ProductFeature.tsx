import { ProductFeatureProps } from "@/interfaces"

const ProductFeature:React.FC<ProductFeatureProps> = ({ feature, includes }) => {
  return (
    <div className="flex flex-col gap-30 lg:flex-row lg:gap-20">
      <div>
        <h2>FEATURES</h2>
        <p>{feature}</p>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:gap-10" >
        <h2>IN THE BOX</h2>
        {includes.map((item, index) => (
          <div key={index}>
            <p>{item.quantity}x</p>
            <p>{item.item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductFeature