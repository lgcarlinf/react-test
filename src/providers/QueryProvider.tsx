import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const QueryProvider:FC<PropsWithChildren<{}>> = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries:{
            staleTime: 10 * 60 * 1000,
          }
        },
      });

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
} 
