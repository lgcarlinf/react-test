import { createRouter, RouterProvider } from "@tanstack/react-router"
import { routeTree } from './routeTree.gen'
import { QueryProvider } from "./providers/QueryProvider"
import { ReduxProvider } from "./providers/ReduxProvider"


declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const router = createRouter({ routeTree })

function App() {

  return (
    <QueryProvider>
      <ReduxProvider>
        <RouterProvider router={router} />
      </ReduxProvider>
    </QueryProvider>
  )
}

export default App
