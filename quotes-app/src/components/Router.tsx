import { createBrowserRouter} from "react-router-dom";
import QuoteGenerator from "./QuoteGenerator";
import Bookmark from "./Bookmark";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <QuoteGenerator />
      </QueryClientProvider>
    ),
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/login",
    element: <div>Login page</div>,
  },
  {
    path: "/bookmark",
    element: <Bookmark />,
    errorElement: <h1>Error</h1>,
  },
]);