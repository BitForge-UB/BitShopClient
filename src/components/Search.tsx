import { useState } from "react";

export const Search: React.FC = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        className="p-2 bg-transparent border text-Title border-Title hover:border-Title focus:border-Title transition-all duration-100 rounded-lg"
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
        <div className="absolute z-10 bg-white w-full border border-Title">
          {suggestions.map((suggestion) => (
            <div className="p-2 border-b border-Title">{suggestion}</div>
          ))}
        </div>
      )}
    </div>
  );
};
