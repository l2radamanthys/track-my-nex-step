import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  return <div>Hello "/admin/dashboard"!</div>
}
