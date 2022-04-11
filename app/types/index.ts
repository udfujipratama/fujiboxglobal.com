export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type RichText = {
  html: Scalars['String']
  markdown: Scalars['String']
  text: Scalars['String']
}

export type Product = {
  id: Scalars['ID']
  slug: Scalars['String']
  name: Scalars['String']
  description: RichText
  material: Scalars['String']
  width: Scalars['Float']
  height: Scalars['Float']
  length: Scalars['Float']
  images: Images
  categories: Categories
  collections: Collections
}

export type Products = Array<Product>

export type Image = {
  id: Scalars['ID']
  url: Scalars['String']
}

export type Images = Array<Image>

export type Category = {
  id: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  image: Image
}

export type Categories = Array<Category>

export type Collection = {
  id: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  image: Image
}

export type Collections = Array<Collection>

export type MenuItem = {
  title: Scalars['String']
  link: Scalars['String']
}

export type MenuItems = Array<MenuItem>

export type Aggregate = {
  count: Scalars['Int']
}

export type Connection = {
  aggregate: Aggregate
}
