import * as React from "react"
import { StaticImageData } from "next/image"

export interface ReactComponentProps {
  children: React.ReactNode
}

export interface CategoryCardProps {
  mobileImageUrl: string | StaticImageData
  tabletImageUrl: string | StaticImageData
  desktopImageUrl: string | StaticImageData
  new: boolean
  title: string
  category: string
  description: string
  swap?:boolean
  action: () => void
}

export interface CategoryHeaderProps{
  title: string
}

export interface ButtonProps {
  text: string
  action: () => void
}

export interface CategoryStackCardProps {
  imageUrl: string | StaticImageData
  category: string
  action: () => void
}

export interface ProductInfoProps {
  mobileImageUrl: string | StaticImageData
  tabletImageUrl: string | StaticImageData
  desktopImageUrl: string | StaticImageData
  price: number
  new: boolean
  title: string
  category: string
  description: string
  slug: string
  action: () => void
}

export interface ProductDetailProps {
  mobileMainImageUrl: string | StaticImageData
  tabletMainImageUrl: string | StaticImageData
  desktopMainImageUrl: string | StaticImageData
  price: number
  new: boolean
  title: string
  category: string
  description: string
  slug: string
  action: () => void
}

export interface ProductIncludesProps {
  quantity: number
  item: string
}

export interface ProductFeatureProps {
  feature: string
  includes: ProductIncludesProps[] 
}

export interface ProductGalleryProps {
  firstMobileImageUrl: string | StaticImageData
  firstTabletImageUrl: string | StaticImageData
  firstDesktopImageUrl: string | StaticImageData
  secondMobileImageUrl: string | StaticImageData
  secondTabletImageUrl: string | StaticImageData
  secondDesktopImageUrl: string | StaticImageData
  thirdMobileImageUrl: string | StaticImageData
  thirdTabletImageUrl: string | StaticImageData
  thirdDesktopImageUrl: string | StaticImageData
}

export interface ProductOtherCardProps {
  mobileImageUrl: string | StaticImageData
  tabletImageUrl: string | StaticImageData
  desktopImageUrl: string | StaticImageData
  item: string
  action: () => void  
}

export interface ProductOthersProps {
  firstOtherProduct: ProductOtherCardProps
  secondOtherProduct: ProductOtherCardProps
  thirdOtherProduct: ProductOtherCardProps
}

export interface CartItemProps {
  item: string
  slug: string
  quantity: number
  price: number
  imageUrl?: string | StaticImageData
}

export interface CartProps {
  items: CartItemProps[]
}

export interface ImageProps {
  mobile: string | StaticImageData
  tablet: string | StaticImageData
  desktop: string | StaticImageData
}

export interface GalleryProps {
  first: ImageProps
  second: ImageProps
  third: ImageProps
}

export interface OtherProps {
  slug: string,
  name: string,
  image: ImageProps
}

export interface ProductProps {
  slug: string,
  name: string,
  image: ImageProps
  category: string,
  new: boolean,
  price: number,
  description: string,
  includes: ProductIncludesProps[],
  features: string
  gallery: GalleryProps
  others: OtherProps[]
}


export interface CartComponentProps {
  showModal?: boolean
  setShowModal?: (show: boolean) => void
}

export interface CartItemExtendedProps extends CartItemProps {
  onRemove: () => void
  onUpdateQuantity: (quantity: number) => void
}

export interface ProductDetailWithCart extends ProductDetailProps {
  onAddToCart?: () => void
}

export interface ProductInfoWithCart extends ProductInfoProps {
  onAddToCart?: () => void
}