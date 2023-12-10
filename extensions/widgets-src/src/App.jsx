import React from "react";
import { 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Card from "./commponents/Card";

const queryClient = new QueryClient()
function App({rvxpo_clientId,rvxpo_url,rvxpo_shopDomain,rvxpo_productId}) {
  console.log(rvxpo_clientId,rvxpo_url,rvxpo_productId,rvxpo_shopDomain,'rvxpo_clientId');
  return (
    <QueryClientProvider client={queryClient}>
      <Card productId={rvxpo_productId} />
    </QueryClientProvider>
  );
}

export default App;
