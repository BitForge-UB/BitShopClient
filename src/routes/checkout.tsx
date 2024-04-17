import { createFileRoute } from "@tanstack/react-router";
import api from "../lib/apiHandler";
import React from "react";

import { useQuery } from '@tanstack/react-query'

export const Layout: React.FC<{}> = () => {  
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      api.get("/products/browse/monster").then((res) => {
        return res.data;
      }),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <p>test</p>
      {data.map((item: string) => <p>{item}</p>)}
    </>
  );
};

export const Route = createFileRoute("/checkout")({
  component: Layout,
});
