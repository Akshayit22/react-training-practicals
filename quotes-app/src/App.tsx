import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QuoteGenerator from "./components/QuoteGenerator";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 1 } },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <QuoteGenerator />
      </QueryClientProvider>
    </>
  );
}

export default App;
