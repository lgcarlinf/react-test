import Favorites from '@/pages/Favorites'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/favoritos/')({
  component: () => <Favorites/>,
})
