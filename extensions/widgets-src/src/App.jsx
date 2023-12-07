import React from "react";
import { 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Card from "./commponents/Card";

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Card  />
    </QueryClientProvider>
  );
}

export default App;
