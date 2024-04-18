import { useState } from "react";

export const Search: React.FC = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        className="p-2 bg-transparent border border-zinc-900 hover:border-zinc-800 focus:border-blue-700 transition-all duration-100 rounded-lg"
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

      {suggestions.length > 0 && (
        <div className="absolute z-10 bg-white w-full border border-zinc-900">
          {suggestions.map((suggestion) => (
            <div className="p-2 border-b border-zinc-900">{suggestion}</div>
          ))}
        </div>
      )}
    </div>
  );
};
