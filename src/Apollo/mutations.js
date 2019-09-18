import { gql } from 'apollo-boost'

/*
input RegisterUserInput {
  firstname: String!
  lastname: String!
  email: String!
  password: String!
  organisationId: ID!
  roleTypeId: ID = 1
}
*/
const REGISTERNEWUSER = gql`
  mutation registerNewUser($input: RegisterUserInput!) {
    registerNewUser(input: $input)
  }
`

const LOGINSINGLEFACTOR = gql`
  mutation loginSingleFactor($email: String!, $password: String!) {
    loginSingleFactor(email: $email, password: $password)
  }
`

const ENROLTWOFACTOR = gql`
  mutation enrolTwoFactor($password: String!) {
    enrolTwoFactor(password: $password) {
      token
      dataURL
    }
  }
`

const LOGINTWOFACTOR = gql`
  mutation loginTwoFactor($code: Int!) {
    loginTwoFactor(code: $code)
  }
`

export {
  REGISTERNEWUSER,
  LOGINSINGLEFACTOR,
  ENROLTWOFACTOR,
  LOGINTWOFACTOR
}
