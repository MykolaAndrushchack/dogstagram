import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { onError } from 'apollo-link-error';
import { from } from 'apollo-link';

import { resolvers, typeDefs } from './resolvers';
import Logout from './Components/Logout/Logout';

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql'
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? token : ''
		}
	};
});

// const logoutLink = onError(({ networkError }) => {
// 	console.log(networkError);
// 	if (networkError.statusCode === 401) Logout();
// });

const cache = new InMemoryCache();

const client = new ApolloClient({
	link: from([authLink, httpLink]),
	cache,
	typeDefs,
	resolvers
});

cache.writeData({
	data: {
		isLoggedIn: !!localStorage.getItem('token')
	}
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
