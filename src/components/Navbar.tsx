import { Search } from "./Search";

export const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-4 px-8 py-2 border-b border-b-zinc-800">
      <div className="flex flex-row items-center gap-4">
        <a className="text-lg text-blue-500">BitShop</a>
      </div>

      <div className="flex flex-row items-center justify-between gap-4">
        <Search />
      </div>
    </div>
  );
};
