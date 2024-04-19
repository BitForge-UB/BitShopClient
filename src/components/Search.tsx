import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export const Search: React.FC = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for products..."
        className="p-2 pr-2 bg-transparent border text-Title! border-none hover:border-Title! focus:border-Title! focus:outline-none focus:ring-2 focus:ring-Title transition-all duration-100 rounded-lg"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setSuggestions(["test", "test2"]);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            window.location.href = `/search?q=${search}`;
          }
        }}
      />
      
      <IoSearchSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 text-Title" />

      {suggestions.length > 0 && (
        <div className="absolute z-10 bg-white w-full border border-Title">
          {suggestions.map((suggestion) => (
            <div className="p-2 border-b border-Title">{suggestion}</div>
          ))}
        </div>
      )}
    </div>
  );
};