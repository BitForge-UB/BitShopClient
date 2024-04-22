import { createFileRoute } from '@tanstack/react-router'

export const Layout: React.FC = () => {
  return (
    <div>
      <h1>Betaling</h1>
      <p>Totalen blir {}</p>
    </div>
  )
}


export const Route = createFileRoute('/checkout/payment')({
  component: Layout,
})