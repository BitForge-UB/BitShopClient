import { Outlet } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";
import Navbar from "../assets/Components/Navbar";

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen min-w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export const Route = createRootRoute({
  component: Layout,
});
