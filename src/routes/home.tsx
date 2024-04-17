import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../assets/Components/Button";

export const Route = createFileRoute("/home")({
  component: () => (
    <div>
      <Button variant={"secondary"}>
        <h1>HEI</h1>
      </Button>
    </div>
  ),
});
