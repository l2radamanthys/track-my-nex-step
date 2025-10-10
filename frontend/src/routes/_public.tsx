import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
  component: PublicLayout,
})

function PublicLayout() {
  return (
    <div>
      <nav>Navbar público</nav>
      <Outlet />
    </div>
  )
}
