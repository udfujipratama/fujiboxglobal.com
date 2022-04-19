import { gql } from '@urql/core'

export const FRAGMENT_PRODUCT = gql`
  fragment ProductDetails on Product {
    id
    slug
    name
    images(first: 1) {
      url
    }
    categories(first: 1) {
      name
      slug
    }
  }
`

export const QUERY_SEARCH_PRODUCTS = gql`
  query SearchProducts($first: Int!, $skip: Int!, $searchQuery: String!) {
    products(
      orderBy: updatedAt_DESC
      first: $first
      skip: $skip
      where: { OR: [{ name_contains: $searchQuery }] }
    ) {
      ...ProductDetails
    }

    productsConnection(where: { OR: [{ name_contains: $searchQuery }] }) {
      aggregate {
        count
      }
    }

    categories {
      id
      slug
      name
    }

    collections {
      id
      slug
      name
    }
  }

  ${FRAGMENT_PRODUCT}
`
