import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHCMS_ENDPOINT as string

export const graphqlClient = new GraphQLClient(endpoint)