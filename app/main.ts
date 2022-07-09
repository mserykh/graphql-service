import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers, services } from './app.module';

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => services,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
