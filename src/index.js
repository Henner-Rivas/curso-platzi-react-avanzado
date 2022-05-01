/* import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context";
import { ApolloClient, ApolloProvider as Aprovider, InMemoryCache, createHttpLink } from '@apollo/client'


const client = new ApolloClient({
  uri: 'https://petgram-server-hennerdev.vercel.app/graphql',
  request: operation=>{
    const token= window.sessionStorage.getItem('token')
   const authorizaction= token ? `Bearer ${token}` : ''
     operation.setContext({
      headers:{
        authorizaction
      }
     }) 
  }
}) 
 */
import { BrowserRouter } from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom'
import  App  from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, from, HttpLink } from '@apollo/client'
import Context from './Context'
import { onError } from '@apollo/client/link/error'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation)
})
const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location = '/user'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-hennerdev.vercel.app/graphql',
    })
  ])
})


ReactDOM.render(
  <Context.Provider > 
<ApolloProvider client={client}>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ApolloProvider>
  </Context.Provider>
,document.getElementById('app'))

