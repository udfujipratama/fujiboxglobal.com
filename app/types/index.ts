export type TProduct = {
  id: string
  slug: string
  name: string
  description: string
  width: number
  height: number
  length: number
  images: Array<{ url: string }>
}

export type Tcategory = {
  id?: string
  name?: string
  slug: string
  image: { url: string }
}
