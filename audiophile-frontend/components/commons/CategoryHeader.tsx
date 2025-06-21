import { CategoryHeaderProps } from "@/interfaces";

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title }) => {
  return (
    <h1 className="bg-[#191919] text-[#ffffff] p-10 text-center font-[800] text-3xl w-full">{title}</h1>
  )
}

export default CategoryHeader