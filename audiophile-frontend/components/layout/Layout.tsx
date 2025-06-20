import Header from "./Header"
import Footer from "./Footer"
import { ReactComponentProps } from "@/interfaces"

const Layout: React.FC<ReactComponentProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto font-[Manrope]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout