import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

  export const Route = createRootRoute({
    component: () => (
      <div className='h-screen flex flex-col justify-between '>
       <Navbar />
        <Outlet />
        <Footer/>
      </div>
    ),
  })