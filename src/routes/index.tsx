import { createFileRoute } from "@tanstack/react-router";

export const Homepage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the homepage!</h1>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Homepage,
});
