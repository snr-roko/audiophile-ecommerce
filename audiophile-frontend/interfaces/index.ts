import * as React from "react"
import { StaticImageData } from "next/image"

export interface ReactComponentProps {
  children: React.ReactNode
}

export interface CategoryCardProps {
  imageUrl: string | StaticImageData
  new: boolean
  title: string
  category: string
  description: string
}

export interface CategoryHeaderProps{
  title: string
}
