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
    collections(first: 1) {
      id
      name
      slug
    }
    soldOut
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
export const QUERY_CATEGORY_OR_COLLECTION = gql`
  query CategoriesOrCollections($first: Int!, $skip: Int!, $slug: String!) {
    products(
      where: {
        OR: [
          { collections_some: { slug: $slug } }
          { categories_some: { slug: $slug } }
        ]
      }
      orderBy: updatedAt_DESC
      first: $first
      skip: $skip
    ) {
      ...ProductDetails
    }
    productsConnection(
      where: {
        OR: [
          { collections_some: { slug: $slug } }
          { categories_some: { slug: $slug } }
        ]
      }
    ) {
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
export const QUERY_ALL_PRODUCT = gql`
  query AllProducts($first: Int!, $skip: Int!) {
    products(orderBy: updatedAt_DESC, first: $first, skip: $skip) {
      ...ProductDetails
    }
    productsConnection {
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
export const QUERY_PRODUCT = gql`
  query NewProductsCollection {
    newProducts: products(
      last: 10
      where: { collections_some: { slug: "produk-terbaru" } }
    ) {
      ...ProductDetails
    }

    categories {
      id
      slug
      name
      image {
        url
      }
    }
  }

  ${FRAGMENT_PRODUCT}
`
