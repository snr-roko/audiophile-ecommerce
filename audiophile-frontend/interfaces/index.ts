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