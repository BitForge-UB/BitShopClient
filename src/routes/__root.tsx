import { Outlet } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen min-w-full">
      <Outlet />
    </div>
  );
};

export const Route = createRootRoute({
  component: Layout,
});
