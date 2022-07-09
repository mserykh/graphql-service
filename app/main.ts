import { ApolloServer, gql } from 'apollo-server';
import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import services from './app.services';

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs: loadFilesSync(path.join(__dirname, './modules/**/*.graphql')),
  dataSources: () => services,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
