import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:8000/api'
})

export default client
