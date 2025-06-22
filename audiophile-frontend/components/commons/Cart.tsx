import Button from "@/components/commons/Button"
import CartItem from "@/components/commons/CartItem"
import { useEffect, useState } from "react"
import { CartProps, CartItemProps } from "@/interfaces"
import { useRouter } from "next/router"

const Cart: React.FC = () => {
  const [cart, setCart] = useState< CartProps>({'items': []})
  const [showMOdal, setShowModal] = useState<boolean>(false)

  const router = useRouter()

  useEffect(
    () => {
      const storedCart: string | null = localStorage.getItem('audiophile-cart')
      if (storedCart) {
        const parsedCart: CartItemProps[] = JSON.parse(storedCart)
        const updatedCart: CartProps = {'items': parsedCart}
        setCart(updatedCart)
      } else {
        setCart({'items': []})
      }
    }
  , [])

  useEffect(
    () => {
      localStorage.setItem('audiophile-cart', JSON.stringify(cart.items))
    }
  , [cart])

  const itemsCount: number = cart.items.length
  return (
    <div>
      <dialog open={showMOdal}>
        <div>
          <h2>CART ({itemsCount})</h2>
          <p>Remove all</p>
        </div>
        {cart.items.map((item: CartItemProps) => (
          <CartItem
            key={item.slug}
            slug={item.slug}
            item={item.item}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <div>
          <p>TOTAL</p>
          <p></p>
        </div>
        <Button text="CHECKOUT" action={() => router.push(`/products/slug/checkout`)} />
      </dialog>
    </div>
  )
}

export default Cart