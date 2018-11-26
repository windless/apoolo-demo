// import { ApolloClient } from 'react-apollo';
import ApolloClient from "apollo-boost";

const ServerHost= 'https://api.graph.cool';
const DemoPath = '/simple/v1/tododemo';

const ServerUrl = `${ServerHost}${DemoPath}`;

const ClientConfig = {
  uri: ServerUrl,
  clientState: {
    defaults: {
      localContent: 'lllll',
    },
    resolvers: {

    },
  }
};

const Client = new ApolloClient(ClientConfig);

export default Client;
export const writeData = Client.writeData;
export const query = Client.query;