import { CategoryStackCardProps } from "@/interfaces"
import Image from "next/image"

const CategoryStackCard: React.FC<CategoryStackCardProps> = ({ imageUrl, category, action }) => {
  return (
    <div className="relative bg-[#F1F1F1] rounded-sm w-full h-auto p-5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image 
          src={imageUrl} 
          alt={`${category} thumbnail`}
          className="object-contain"
        />
      </div>
      <div className="mt-15">
        <h3 className="text-sm mb-2 text-center text-[#000000]">{category}</h3>
        <div onClick={action} className="flex gap-2 justify-center items-center">
          <h2 className="text-center text-[#000000]/50 text-sm">SHOP</h2>
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CategoryStackCard