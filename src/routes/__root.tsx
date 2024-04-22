import { Outlet } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";
import  Navbar  from "../components/Navbar";
import Chatbot from "../components/Chatbot";

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen min-w-full">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
        <Chatbot />
      </div>
    </div>
  );
};

export const Route = createRootRoute({
  component: Layout,
});
