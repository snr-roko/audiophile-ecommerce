import { useState, useEffect } from "react"
import CategoryStack from "@/components/commons/CategoryStack"
import GearCard from "@/components/commons/GearCard"
import { useRouter } from "next/router";
import ProductDetail from "@/components/commons/ProductDetail";

const Products: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = useState<any>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!slug) return;
    
    setIsLoading(true)
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong: Failed to fetch data")
        return res.json()
      })
      .then((data) => {
        const foundProduct = data.find((item: any) => item.slug === slug);
        setProduct(foundProduct)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }, [slug])

  if (isLoading) {
    return ( 
    <div>
      <div>Loading...</div>
      <CategoryStack />
      <GearCard />
    </div>
    )
  }

  if (error) {
    return (
      <div>
        <div>Error: {error.message}</div>
        <CategoryStack />
        <GearCard />
      </div>
    )
  }

  if (!product) {
    return (
      <div>
        <div>Product not found.</div>
        <CategoryStack />
        <GearCard />
      </div>
    )
  }

  return (
    <div>
      <ProductDetail
        mobileMainImageUrl={product.image.mobile}
        tabletMainImageUrl={product.image.tablet}
        desktopMainImageUrl={product.image.desktop}
        new={product.new}
        title={product.name.split(' ').slice(0, -1).join(' ').toUpperCase()}
        category={product.category.toUpperCase()}
        description={product.description}
        price={product.price}
        action={() => console.log('clicked')} 
      />
      <CategoryStack />
      <GearCard />
    </div>
  )
}

export default Products