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
  action: () => void
}

export interface CategoryHeaderProps{
  title: string
}

export interface ButtonProps {
  text: string
  action: () => void
}