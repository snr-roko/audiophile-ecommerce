import Image from "next/image"
import { CartItemProps } from "@/interfaces/index"

const CartItem: React.FC<CartItemProps> = ({ slug, item, price, quantity }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 gap-5 flex-2/3">
        <Image
          src={`/assets/cart/image-${slug}.jpg`}
          alt={`${item} image`}
        />
        <div className="flex flex-cols justify-center items-baseline">
          <h2>{item}</h2>
          <p>$ {price}</p>
        </div>
      </div>
      <p className="flex-1/3 text-center bg-[#F1F1F1] text-[#000000]">{quantity}</p>
    </div>
  )
}

export default CartItem