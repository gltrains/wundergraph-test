import { configureWunderGraphApplication, introspect } from '@wundergraph/sdk';
import operations from './wundergraph.operations'

const weather = introspect.graphql({
	apiNamespace: 'weather',
	url: 'https://weather-api.wundergraph.com/',
});

const countries = introspect.graphql({
	apiNamespace: 'countries',
	url: 'https://countries.trevorblades.com/',
});

configureWunderGraphApplication({
	apis: [weather, countries],
	operations,
	security: {
		enableGraphQLEndpoint: true,
	},
	options: {
		listen: {
			host: "127.0.0.1",
			port: "8822"
		}
	}
});