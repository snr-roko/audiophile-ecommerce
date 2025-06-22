import CategoryHeader from "@/components/commons/CategoryHeader";
import CategoryCard from "@/components/commons/CategoryCard";
import mobileEarphoneImage from "@/public/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"
import tabletEarphoneImage from "@/public/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg"
import desktopEarphoneImage from "@/public/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
import CategoryStack from "@/components/commons/CategoryStack"
import GearCard from "@/components/commons/GearCard";
import { useRouter } from "next/router";

const Earphones: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <CategoryHeader title="EARPHONES" />
      <div className="px-7 lg:px-40 py-20 flex flex-col gap-30 w-full bg-[#FFFFFF]">
        <div>
          <CategoryCard
            mobileImageUrl={mobileEarphoneImage}
            tabletImageUrl={tabletEarphoneImage}
            desktopImageUrl={desktopEarphoneImage}
            new={true}
            title="YX1 WIRELESS"
            category="EARPHONES"
            description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
            action={() => router.push('/products/yx1-earphones')}
          />
        </div>
        <CategoryStack />
        <GearCard />
      </div>
    </div>
  )
}

export default Earphones