import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { CartProps, CartItemProps } from "@/interfaces"
import Summary from "@/components/commons/Summary"

const Checkout: React.FC = () => {
  const router = useRouter()
  const [cart, setCart] = useState<CartProps>({ items: [] })
  const [paymentMethod, setPaymentMethod] = useState("e-money")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: ""
  })

  useEffect(() => {
    const storedCart = localStorage.getItem('audiophile-cart')
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart)
      setCart({ items: parsedCart })
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { formData, paymentMethod, cart })
    router.push('/checkout/success')
  }

  const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 50
  const vat = Math.round(total * 0.2)
  const grandTotal = total + shipping + vat

  return (
    <div className="px-7 lg:px-40 py-10 flex flex-col gap-10 w-full bg-[#F2F2F2]">
      <p onClick={() => router.back()} className="text-[#000000]/60 hover:cursor-pointer">Go Back</p>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <div className="bg-[#FFFFFF] rounded-lg p-10">
            <h1 className="text-[#000000] font-[800] text-left text-3xl md:tracking-wide">CHECKOUT</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-8">
              <fieldset className="border-none mb-8">
                <legend className="text-[#D87D4A] font-bold text-lg mb-4">Billing Details</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 font-[500] text-[#000000]">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Alexei Ward"
                      required
                      className="border border-[#CFCFCF] rounded px-4 py-2 focus:outline-none focus:border-[#D87D4A] text-[#000000]/60"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 text-[#000000] font-[500]">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alexei@mail.com"
                      required
                      className="border border-[#CFCFCF] rounded px-4 py-2 focus:outline-none focus:border-[#D87D4A] text-[#000000]/60"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="mb-2 font-[500] text-[#000000]">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 202-555-0136"
                      required
                      className="border border-[#CFCFCF] rounded px-4 py-2 focus:outline-none focus:border-[#D87D4A] text-[#000000]/60"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="border-none mb-8">
                <legend className="text-[#D87D4A] font-bold text-lg mb-4">Shipping Info</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col md:col-span-2">
                    <label htmlFor="address" className="mb-2 font-semibold">Address</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="1137 Williams Avenue"
                      required
                      className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="zip" className="mb-2 font-semibold">ZIP Code</label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="10001"
                      required
                      className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="city" className="mb-2 font-semibold">City</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      required
                      className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="country" className="mb-2 font-semibold">Country</label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="United States"
                      required
                      className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="border-none mb-8">
                <legend className="text-[#D87D4A] font-bold text-lg mb-4">Payment Details</legend>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <span className="font-semibold mb-2 md:mb-0 md:w-1/3">Payment Method</span>
                  <div className="flex flex-col gap-3 md:w-2/3">
                    <label className="flex items-center gap-3 border border-gray-300 rounded px-4 py-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="e-money"
                        checked={paymentMethod === "e-money"}
                        onChange={handlePaymentMethodChange}
                        className="accent-[#D87D4A]"
                      />
                      E-Money
                    </label>
                    <label className="flex items-center gap-3 border border-gray-300 rounded px-4 py-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={handlePaymentMethodChange}
                        className="accent-[#D87D4A]"
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                {paymentMethod === "e-money" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex flex-col">
                      <label htmlFor="eMoneyNumber" className="mb-2 font-semibold">E-Money Number</label>
                      <input
                        id="eMoneyNumber"
                        name="eMoneyNumber"
                        type="text"
                        value={formData.eMoneyNumber}
                        onChange={handleInputChange}
                        placeholder="238521993"
                        required
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="eMoneyPin" className="mb-2 font-semibold">E-Money PIN</label>
                      <input
                        id="eMoneyPin"
                        name="eMoneyPin"
                        type="text"
                        value={formData.eMoneyPin}
                        onChange={handleInputChange}
                        placeholder="6891"
                        required
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                )}
              </fieldset>
            </form>
          </div>
        </div>
        <div className="lg:col-span-1">
          <Summary 
            items={cart.items}
            total={total}
            shipping={shipping}
            vat={vat}
            grandTotal={grandTotal}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default Checkout