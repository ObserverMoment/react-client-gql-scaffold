import { gql } from 'apollo-boost'

const ME = gql`
  query {
    me {
      firstname
      lastname
      email
    }
  }
`

export {ME}
