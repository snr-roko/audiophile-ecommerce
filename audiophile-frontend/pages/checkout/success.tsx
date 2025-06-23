import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Button from "@/components/commons/Button"
import { CartItemProps } from "@/interfaces"

const CheckoutSuccess: React.FC = () => {
  const router = useRouter()
  const [items, setItems] = useState<CartItemProps[]>([])
  const [total, setTotal] = useState(0)
  const shipping = 50

  useEffect(() => {
    const storedCart = localStorage.getItem('audiophile-cart')
    if (storedCart) {
      const parsed: CartItemProps[] = JSON.parse(storedCart)
      setItems(parsed)
      const t = parsed.reduce((sum, item) => sum + item.price * item.quantity, 0)
      setTotal(t)
    }
    localStorage.removeItem('audiophile-cart')
  }, [])

  const grandTotal = total + shipping

  return (
    <div className="px-7 lg:px-40 py-20 flex flex-col items-center justify-center min-h-screen bg-[#F2F2F2]">
      <div className="bg-[#FFFFFF] rounded-lg p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mx-auto mb-6">
        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>
        </div>
        <h1 className="text-[#000000] font-[800] text-3xl mb-4">THANK YOU FOR YOUR ORDER</h1>
        <p className="text-[#000000]/60 mb-8">You will receive an email confirmation shortly.</p>
        <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden mb-8">
          <div className="bg-[#F1F1F1] flex-1 p-6 text-left">
            <h2 className="text-[#000000] font-bold mb-4">ORDER SUMMARY</h2>
            {items.length === 0 ? (
              <p className="text-[#000000]/60">No items in order.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div key={item.slug} className="flex items-center gap-4">
                    <img
                      src={typeof item.imageUrl === 'string' ? item.imageUrl : `/assets/cart/image-${item.slug}.jpg`}
                      alt={item.item}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-[#000000] text-sm">{item.item}</h3>
                      <p className="text-[#000000]/60 text-xs">$ {item.price}</p>
                    </div>
                    <div className="text-[#000000]/60 text-xs">x{item.quantity}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex-1 bg-black text-white flex flex-col justify-end items-start p-6 min-w-[180px]">
            <span className="uppercase text-xs mb-2">Grand Total</span>
            <span className="text-2xl font-bold">$ {grandTotal}</span>
          </div>
        </div>
        <div className="mt-8">
          <Button text="BACK TO HOME" action={() => router.push('/')} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSuccess 