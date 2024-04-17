import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/checkout")({
  component: () => <>
    <div>
      <p className="text-xl">Utsjekking</p>
      
    </div>
  </>,
});
