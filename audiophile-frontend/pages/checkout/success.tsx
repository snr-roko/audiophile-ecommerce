import { useEffect } from "react"
import { useRouter } from "next/router"
import Button from "@/components/commons/Button"

const CheckoutSuccess: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    localStorage.removeItem('audiophile-cart')
  }, [])

  return (
    <div className="px-7 lg:px-40 py-20 flex flex-col items-center justify-center min-h-screen bg-[#F2F2F2]">
      <div className="bg-[#FFFFFF] rounded-lg p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h1 className="text-[#000000] font-[800] text-3xl mb-4">THANK YOU FOR YOUR ORDER</h1>
        <p className="text-[#000000]/60 mb-8">You will receive an email confirmation shortly.</p>
        <div className="bg-[#F1F1F1] rounded-lg p-6 mb-8">
          <h2 className="text-[#000000] font-bold mb-4">ORDER SUMMARY</h2>
          <p className="text-[#000000]/60">Your order has been successfully placed and will be shipped soon.</p>
        </div>
        <Button text="BACK TO HOME" action={() => router.push('/')} />
      </div>
    </div>
  )
}

export default CheckoutSuccess 