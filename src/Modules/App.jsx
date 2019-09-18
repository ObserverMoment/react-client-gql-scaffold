import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../Apollo/ApolloClient'
import Register from './Auth/Register'
import Login from './Auth/Login'
import Home from './Home'

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/auth/login' component={Login} />
        <Route path='/auth/register' component={Register} />
      </Router>
    </ApolloProvider>
  )
}

export default App
