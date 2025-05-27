import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Buttons from "./Buttons";

async function fetchPostsUsers(page) {
   try {
      const response = await fetch(
         `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      if (!response.ok) throw new Error("Page not found");

      return await response.json();
   } catch (error) {
      throw new Error(error.message);
   }
}

function App() {
   const [page, setPage] = useState(1);
   const { isLoading, error, data } = useQuery({
      queryKey: ["posts", page],
      queryFn: () => fetchPostsUsers(page),
   });

   return (
      <div>
         <h1>Posts</h1>
         {isLoading && <h2>Loading data....</h2>}
         {error && <h2>{error.message}</h2>}
         {data &&
            data.map((post) => {
               return (
                  <article key={post.id}>
                     <h2>{post.title}</h2>
                     <h4>{post.body}</h4>
                     <p>Page: {post.userId}</p>
                  </article>
               );
            })}
         {!isLoading && !error ? (
            <Buttons page={page} setPage={setPage} />
         ) : null}
      </div>
   );
}
export default App;
