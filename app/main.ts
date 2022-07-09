import { ApolloServer } from 'apollo-server';
import { typeDefs } from './app.schema';

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({ typeDefs});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
