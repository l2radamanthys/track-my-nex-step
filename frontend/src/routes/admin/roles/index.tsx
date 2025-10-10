import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/roles/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/roles/"!</div>
}
