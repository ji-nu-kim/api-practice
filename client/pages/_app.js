import React, { userRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.scss';

const App = ({ Component, pageProps }) => {
  const clientRef = userRef(null);
  const getClient = () => {
    if (!clientRef.current) clientRef.current = new QueryClient();
    return clientRef.current;
  };
  return (
    <QueryClientProvider client={getClient()}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

App.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  return { pageProps };
};

export default App;
