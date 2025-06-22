import { useState, useEffect } from "react"
import CategoryStack from "@/components/commons/CategoryStack"
import GearCard from "@/components/commons/GearCard"
import { useRouter } from "next/router";
import ProductDetail from "@/components/commons/ProductDetail";
import ProductOthers from "@/components/commons/ProductOthers";
import ProductFeature from "@/components/commons/ProductFeature";
import ProductGallery from "@/components/commons/ProductGallery";
import { ProductOtherCardProps } from "@/interfaces";

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
      <div className="text-[#000000] font-[800] text-center text-2xl md:tracking-wide">Please wait...</div>
      <CategoryStack />
      <GearCard />
    </div>
    )
  }

  if (error) {
    return (
      <div>
        <div className="text-[#000000] font-[800] text-center text-2xl md:tracking-wide">Error: {error.message}</div>
        <CategoryStack />
        <GearCard />
      </div>
    )
  }

  if (!product) {
    return (
      <div>
        <div className="text-[#000000] font-[800] text-center text-2xl md:tracking-wide">Product not found.</div>
        <CategoryStack />
        <GearCard />
      </div>
    )
  }

  const firstOtherProduct: ProductOtherCardProps = {
    mobileImageUrl: product.others[0].image.mobile,
    tabletImageUrl: product.others[0].image.tablet,
    desktopImageUrl: product.others[0].image.desktop,
    item: product.others[0].name.toUpperCase(),
    action: () => console.log('clicked')
  }

  const secondOtherProduct: ProductOtherCardProps = {
    mobileImageUrl: product.others[1].image.mobile,
    tabletImageUrl: product.others[1].image.tablet,
    desktopImageUrl: product.others[1].image.desktop,
    item: product.others[1].name.toUpperCase(),
    action: () => console.log('clicked')    
  }

  const thirdOtherProduct: ProductOtherCardProps = {
    mobileImageUrl: product.others[2].image.mobile,
    tabletImageUrl: product.others[2].image.tablet,
    desktopImageUrl: product.others[2].image.desktop,
    item: product.others[2].name.toUpperCase(),
    action: () => console.log('clicked')    
  }

  return (
    <div className="px-7 lg:px-40 py-20 flex flex-col gap-30 w-full bg-[#FFFFFF]" >
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
      <ProductFeature
        feature={product.features}
        includes={product.includes}
      />
      <ProductGallery
        firstMobileImageUrl={product.gallery.first.mobile}
        firstTabletImageUrl={product.gallery.first.tablet}
        firstDesktopImageUrl={product.gallery.first.desktop}
        secondMobileImageUrl={product.gallery.second.mobile}
        secondTabletImageUrl={product.gallery.second.tablet}
        secondDesktopImageUrl={product.gallery.second.desktop}
        thirdMobileImageUrl={product.gallery.third.mobile}
        thirdTabletImageUrl={product.gallery.third.tablet}
        thirdDesktopImageUrl={product.gallery.third.desktop}        
      />
      <ProductOthers
        firstOtherProduct={firstOtherProduct}
        secondOtherProduct={secondOtherProduct}
        thirdOtherProduct={thirdOtherProduct}
      />
      <CategoryStack />
      <GearCard />
    </div>
  )
}

export default Products