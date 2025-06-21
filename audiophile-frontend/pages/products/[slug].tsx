import { useState, useEffect } from "react"
import CategoryStack from "@/components/commons/CategoryStack"
import GearCard from "@/components/commons/GearCard"
import { useRouter } from "next/router";

const Products:React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = useState([])
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong: Failed to fetch data")
        return res.json()
      })
      .then((data) => {
        setData(data)
        console.log(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }, [])

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

  const product = data.find(
    (item: any) => item.slug === slug
  );

  if (!product) {
    return <div>Product not found.</div>;
  }


  return (
    <div>
      <CategoryStack />
      <GearCard />
    </div>
  )
}

export default Products