import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useBrowseProducts } from "../../hooks/useProduct";

const Search: React.FC = () => {
  const { q }: { q: string } = useSearch({ strict: false });

  const { isFetching, data, error } = useBrowseProducts(q);

  if (!q) {
    return (
      <div>
        <p>No search query provided</p>
      </div>
    );
  }

  if (isFetching) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {error.message}</p>;

  if (!data)
    return (
      <div>
        <p>No data found</p>
      </div>
    );

  return (
    <div>
      <p>Search query: {q}</p>

      {data.map((item: { title: string; imagePath: string }) => (
        <>
          <h1>{item.title}</h1>

          <img src={item.imagePath} alt={item.title} />
        </>
      ))}
    </div>
  );
};

export const Route = createFileRoute("/search/")({
  component: Search,
});
