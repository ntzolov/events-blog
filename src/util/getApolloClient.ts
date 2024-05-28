import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const endpoint = process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT || '';
const adminSecret = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || '';

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: endpoint,
    }),
    headers: {
      "x-hasura-admin-secret": adminSecret,
    },
  });
});

// export const getApolloClient = () => getClient();
