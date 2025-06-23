import Image from "next/image"
import { CartItemProps } from "@/interfaces/index"

interface CartItemExtendedProps extends CartItemProps {
  onRemove: () => void
  onUpdateQuantity: (quantity: number) => void
}

const CartItem: React.FC<CartItemExtendedProps> = ({ slug, item, price, quantity, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={`/assets/cart/image-${slug}.jpg`}
        alt={`${item} image`}
        width={64}
        height={64}
        className="rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-bold text-[#000000]">{item}</h3>
        <p className="text-[#000000]/60">$ {price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={() => onUpdateQuantity(quantity - 1)}
          className="w-8 h-8 bg-[#F1F1F1] text-[#000000] flex items-center justify-center hover:bg-[#D87D4A] hover:text-white"
        >
          -
        </button>
        <span className="w-8 h-8 bg-[#F1F1F1] text-[#000000] flex items-center justify-center">
          {quantity}
        </span>
        <button 
          onClick={() => onUpdateQuantity(quantity + 1)}
          className="w-8 h-8 bg-[#F1F1F1] text-[#000000] flex items-center justify-center hover:bg-[#D87D4A] hover:text-white"
        >
          +
        </button>
      </div>
      <button 
        onClick={onRemove}
        className="text-[#000000]/60 hover:text-[#CD2C2C]"
      >
        ✕
      </button>
    </div>
  )
}

export default CartItem