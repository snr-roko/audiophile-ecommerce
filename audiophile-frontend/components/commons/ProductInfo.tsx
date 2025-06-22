import { ProductInfoProps } from "@/interfaces"
import Image from "next/image"
import Button from "./Button"
import { useState } from "react"

const ProductInfo: React.FC<ProductInfoProps> = (props) => {
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (value >= 1) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    // props.action(quantity)
  }

  return (
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-15">
      <div className="w-full">
        <Image 
          src={props.mobileImageUrl}
          alt={`${props.title} image`}
          className="md:hidden w-full h-auto"
          width={327}
          height={327}
        />
        <Image 
          src={props.tabletImageUrl}
          alt={`${props.title} image`}
          className="hidden md:block lg:hidden w-full h-auto"
          width={281}
          height={400}
        />
        <Image 
          src={props.desktopImageUrl}
          alt={`${props.title} image`}
          className="hidden lg:block w-full h-auto object-contain"
          width={540}
          height={560}
        />
      </div>      
      <div className="flex flex-col w-full gap-6 items-baseline justify-center">
        {props.new ? <h2 className="text-[#D87D4A] tracking-[0.4em] lg:tracking-[0.5em]">NEW PRODUCT</h2> : null}
        <div>
          <h2 className="text-[#000000] text-left font-[800] text-2xl md:tracking-wide">{props.title}</h2>
          <h2 className="text-[#000000] font-[800] text-left text-2xl md:tracking-wide">{props.category}</h2>
        </div>
        <p className="text-[#000000]/40 font-[300] text-sm text-left lg:w-4/5">{props.description}</p>
        <p className="text-[#000000] font-[800]">$ {props.price}</p>
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="number" 
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="bg-[#F1F1F1] p-4 text-center text-[#000000] border-none outline-none"
          />
          <Button text="ADD TO CART" action={handleAddToCart}/>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo