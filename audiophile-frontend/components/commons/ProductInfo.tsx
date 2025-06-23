import { CartItemProps, ProductInfoProps } from "@/interfaces"
import Image from "next/image"
import Button from "./Button"
import { useState } from "react"
import { useCart } from "./CartContext"

const ProductInfo: React.FC<ProductInfoProps> = (props) => {
  const [quantity, setQuantity] = useState(1)
  const { setCart, setShowCart } = useCart()

  const handleAddToCart = () => {
    const existingCart = localStorage.getItem('audiophile-cart')
    const cartItems = existingCart ? JSON.parse(existingCart) : []
    
    const existingItemIndex = cartItems.findIndex((item: CartItemProps) => item.slug === props.slug)
    
    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += quantity
    } else {
      cartItems.push({
        slug: props.slug,
        item: props.title,
        price: props.price,
        quantity: quantity,
        imageUrl: props.mobileImageUrl
      })
    }
    
    localStorage.setItem('audiophile-cart', JSON.stringify(cartItems))
    
    setCart({ items: cartItems })
    setQuantity(1)
    setShowCart(true)
  }

  const handleDecrease = () => {
    setQuantity(q => Math.max(1, q - 1))
  }
  const handleIncrease = () => {
    setQuantity(q => q + 1)
  }

  return (
    <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-15">
      <div className="w-full">
        <Image 
          src={props.mobileImageUrl}
          alt={`${props.title} image`}
          className="md:hidden"
          width={327}
          height={327}
        />
        <Image 
          src={props.tabletImageUrl}
          alt={`${props.title} image`}
          className="hidden md:block lg:hidden"
          width={281}
          height={400}
        />
        <Image 
          src={props.desktopImageUrl}
          alt={`${props.title} image`}
          className="hidden lg:block object-contain"
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
        <p className="text-[#000000]/60 font-[300] text-sm text-left lg:w-4/5">{props.description}</p>
        <p className="text-[#000000] font-[800]">$ {props.price}</p>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 bg-[#F1F1F1] rounded">
            <button onClick={handleDecrease} className="w-8 h-8 text-2xl text-[#000000] hover:text-[#D87D4A]">-</button>
            <span className="w-8 text-center select-none">{quantity}</span>
            <button onClick={handleIncrease} className="w-8 h-8 text-2xl text-[#000000] hover:text-[#D87D4A]">+</button>
          </div>
          <Button text="ADD TO CART" action={handleAddToCart}/>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo