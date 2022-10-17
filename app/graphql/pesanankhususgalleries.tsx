import { gql } from '@urql/core'

export const QUERY_ALL_PESANAN_KHUSUS_GALLERIES = gql`
  query AllPesanankhususGalleries {
    pesananKhususGalleries {
      pic {
        url(
          transformation: {
            image: { resize: { width: 500, height: 500, fit: scale } }
          }
        )
      }
    }
  }
`
