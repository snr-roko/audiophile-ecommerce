import { CartItemProps } from "@/interfaces"
import Image from "next/image"
import Button from "./Button"
import { useRouter } from "next/router"

interface SummaryProps {
  items: CartItemProps[]
  total: number
  shipping: number
  vat: number
  grandTotal: number
  onSubmit?: () => void
}

const Summary: React.FC<SummaryProps> = ({ items, total, shipping, vat, grandTotal, onSubmit }) => {
  const router = useRouter()

  const handleCheckout = () => {
    if (onSubmit) {
      onSubmit()
    } else {
      router.push('/checkout/success')
    }
  }

  return (
    <div className="bg-[#FFFFFF] rounded-lg p-10">
      <h2 className="text-[#000000] font-[800] text-left text-2xl mb-8">SUMMARY</h2>
      <div className="flex flex-col gap-6 mb-8">
        {items.map((item) => (
          <div key={item.slug} className="flex items-center gap-4">
            <Image
              src={`/assets/cart/image-${item.slug}.jpg`}
              alt={`${item.item} image`}
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-bold text-[#000000]">{item.item}</h3>
              <p className="text-[#000000]/60">$ {item.price}</p>
            </div>
            <div className="text-[#000000]/60">x{item.quantity}</div>
          </div>
        ))}
      </div>
      <div className="space-y-4 mb-8">
        <div className="flex justify-between">
          <span className="text-[#000000]/60">TOTAL</span>
          <span className="font-bold">$ {total}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#000000]/60">SHIPPING</span>
          <span className="font-bold">$ {shipping}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#000000]/60">VAT (INCLUDED)</span>
          <span className="font-bold">$ {vat}</span>
        </div>
      </div>
      <div className="flex justify-between mb-8">
        <span className="text-[#000000]/60">GRAND TOTAL</span>
        <span className="font-bold text-[#D87D4A]">$ {grandTotal}</span>
      </div>
      <Button text="CONTINUE & PAY" action={handleCheckout} />
    </div>
  )
}

export default Summary 