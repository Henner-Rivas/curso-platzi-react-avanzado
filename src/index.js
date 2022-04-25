import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'


const client = new ApolloClient({
  uri: 'https://petgram-server-hennerdev.vercel.app/graphql'
}) 



ReactDOM.render(
<ApolloProvider client={client}>
    <App />
  </ApolloProvider>
,document.getElementById('app'))
