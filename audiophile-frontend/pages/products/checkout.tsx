import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { CartProps} from "@/interfaces"
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

  const handleSubmit = () => {
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
                {paymentMethod === "cash" && (
                  <div className="flex gap-4 mt-10">
                    <div>
                      <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z" fill="#D87D4A"/></svg>
                    </div>
                    <p>The &apos;Cash on Delivery&apos; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
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
            onSubmit={() => handleSubmit()}
          />
        </div>
      </div>
    </div>
  )
}

export default Checkout