import { gql } from '@urql/core'

export const QUERY_ONE_PRODUCT_BY_SLUG = gql`
  query OneProductBySlug($productSlug: String!, $categorySlug: String!) {
    product(where: { slug: $productSlug }) {
      id
      name
      slug
      material
      height
      length
      width
      description {
        html
        text
      }
      images {
        id
        url
      }
      categories {
        id
        name
        slug
      }
      collections(first: 1) {
        id
        name
        slug
      }
    }
    # this query for recommended-products
    category(where: { slug: $categorySlug }) {
      id
      name
      image {
        url
      }
      products(first: 5) {
        id
        name
        slug
        images(first: 1) {
          url
        }
        categories(first: 1) {
          name
          slug
        }
        collections(first: 1) {
          id
          name
          slug
        }
      }
    }
  }
`
