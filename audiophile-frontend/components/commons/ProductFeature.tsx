import { ProductFeatureProps } from "@/interfaces"

const ProductFeature:React.FC<ProductFeatureProps> = ({ feature, includes }) => {
  return (
    <div className="flex flex-col gap-20 lg:flex-row lg:gap-0 lg:items-baseline">
      <div className="flex flex-col gap-6 items-baseline flex-2/3">
        <h2 className="text-left text-[#000000] text-left font-[800] text-2xl md:tracking-wide" >FEATURES</h2>
        {feature.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-left text-[#000000]/60 font-[300] text-sm lg:w-4/5">{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-col gap-5 flex-1/3 md:flex-row md:gap-30 lg:gap-5 lg:flex-col " >
        <h2 className="text-left text-[#000000] text-left font-[800] text-2xl md:tracking-wide">IN THE BOX</h2>
        <div className="flex flex-col gap-4 items-baseline">
          {includes.map((item, index) => (
            <div key={index} className="flex flex:col items-baseline gap-4">
              <p className="text-[#D87D4A] text-left">{item.quantity}x</p>
              <p className="text-left text-[#000000]/60 font-[300] text-sm">{item.item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductFeature