import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ text, action }) => {
  return (
    <button onClick={action} className="bg-[#D87D4A] px-6 py-4 font-[700] text-sm text-[#ffffff] hover:cursor-pointer hover:bg-[#FBAF85] transition">
      {text}
    </button>
  )
}

export default Button