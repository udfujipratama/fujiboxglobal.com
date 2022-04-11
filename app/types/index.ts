export type Image = {
  url: string
}

export type Product = {
  id: string
  slug: string
  name: string
  description: string
  width: number
  height: number
  length: number
  images: Array<Image>
}

export type Category = {
  id: string
  name: string
  slug: string
  image: Image
}

export type Collection = {
  id: string
  name: string
  slug: string
  image: Image
}
