import Button from "@/components/commons/Button"
import CartItem from "@/components/commons/CartItem"
import { CartComponentProps } from "@/interfaces"
import { useRouter } from "next/router"
import { useCart } from "./CartContext"

const Cart: React.FC<CartComponentProps> = ({ showModal = false, setShowModal }) => {
  const router = useRouter()
  const { cart, setCart } = useCart()

  const itemsCount: number = cart.items.length
  const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const removeAll = () => {
    setCart({ items: [] })
    localStorage.removeItem('audiophile-cart')
  }

  const removeItem = (slug: string) => {
    const newItems = cart.items.filter(item => item.slug !== slug)
    setCart({ items: newItems })
    localStorage.setItem('audiophile-cart', JSON.stringify(newItems))
  }

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(slug)
      return
    }
    const newItems = cart.items.map(item => 
      item.slug === slug ? { ...item, quantity } : item
    )
    setCart({ items: newItems })
    localStorage.setItem('audiophile-cart', JSON.stringify(newItems))
  }

  const handleClose = () => {
    if (setShowModal) {
      setShowModal(false)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center md:justify-end md:items-start md:pr-12 z-50">
      <dialog
        open={showModal}
        className="relative w-[90vw] max-w-md h-[70vh] md:h-[80vh] rounded-lg shadow-2xl p-6 bg-[#ffffff] flex flex-col overflow-y-auto border border-[#eee] animate-fadeIn mt-0 md:mt-16"
        style={{ marginRight: 0 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">CART ({itemsCount})</h2>
          <button 
            onClick={removeAll}
            className="text-[#000000]/60 hover:text-[#D87D4A] underline"
          >
            Remove all
          </button>
        </div>
        {cart.items.length === 0 ? (
          <p className="text-center text-[#000000]/60 py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.items.map((item) => (
                <CartItem
                  key={item.slug}
                  slug={item.slug}
                  item={item.item}
                  price={item.price}
                  quantity={item.quantity}
                  imageUrl={item.imageUrl || `/assets/cart/image-${item.slug}.jpg`}
                  onRemove={() => removeItem(item.slug)}
                  onUpdateQuantity={(quantity) => updateQuantity(item.slug, quantity)}
                />
              ))}
            </div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-lg font-bold">TOTAL</p>
              <p className="text-lg font-bold">$ {total}</p>
            </div>
            <Button text="CHECKOUT" action={() => router.push('/products/checkout')} />
          </>
        )}
        <button 
          onClick={handleClose}
          className="absolute top-1 right-4 text-[#000000]/60 hover:text-[#D87D4A] text-2xl"
          aria-label="Close cart"
        >
          X
        </button>
      </dialog>
    </div>
  )
}

export default Cart