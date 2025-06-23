import { useRouter } from "next/router"

const Checkout: React.FC = () => {
  const router = useRouter()

  return (
    <div className="px-7 lg:px-40 py-10 flex flex-col gap-10 w-full bg-[#F2F2F2]">
      <p onClick={() => router.back()} className="text-[#000000]/60 hover:cursor-pointer">Go Back</p>
      <div className="bg-[#FFFFFF] rounded-lg p-10">
        <h1 className="text-[#000000] font-[800] text-left text-3xl md:tracking-wide">CHECKOUT</h1>
        <form className="flex flex-col gap-8 mt-8">
          <fieldset className="border-none mb-8">
            <legend className="text-[#D87D4A] font-bold text-lg mb-4">Billing Details</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-[500] text-[#000000]">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Alexei Ward"
                  className="border border-[#CFCFCF] rounded px-4 py-2 focus:outline-none focus:border-[#D87D4A] text-[#000000]/60"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="error:text-[#CD2C2C] mb-2 text-[#000000] font-[500]">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="alexei@mail.com"
                  className="border border-[#CFCFCF] rounded px-4 py-2 focus:outline-none focus:border-[#D87D4A] text-[#000000]/60"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="error:text-[#CD2C2C] mb-2 font-[#500] text-[#000000]">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 202-555-0136"
                  className="error:border:[#CD2C2C] border border-[#CFCFCF] rounded px-4 py-2 focus:outline-none focus:border-[#D87D4A] text-[#000000]/60"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="border-none mb-8">
            <legend className="text-[#cd2c2c] font-bold text-lg mb-4">Shipping Info</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="address" className="mb-2 font-semibold">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="1137 Williams Avenue"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="zip" className="mb-2 font-semibold">ZIP Code</label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  placeholder="10001"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="city" className="mb-2 font-semibold">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="New York"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="country" className="mb-2 font-semibold">Country</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="United States"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="border-none mb-8">
            <legend className="text-[#cd2c2c] font-bold text-lg mb-4">Payment Details</legend>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <span className="font-semibold mb-2 md:mb-0 md:w-1/3">Payment Method</span>
              <div className="flex flex-col gap-3 md:w-2/3">
                <label className="flex items-center gap-3 border border-gray-300 rounded px-4 py-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="e-money"
                    className="accent-[#cd2c2c]"
                    defaultChecked
                  />
                  E-Money
                </label>
                <label className="flex items-center gap-3 border border-gray-300 rounded px-4 py-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    className="accent-[#cd2c2c]"
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Checkout