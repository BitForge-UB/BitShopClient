import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";
import Navbar from "../assets/Components/Navbar";

const queryClient = new QueryClient();

export const Layout: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="min-h-screen min-w-full">
      <Navbar />
      <Outlet />
    </div>
    </QueryClientProvider>
  );
};

export const Route = createRootRoute({
  component: Layout,
});
