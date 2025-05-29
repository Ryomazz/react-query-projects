import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

// `https://newsapi.org/v2/top-headlines?category=science&page=${pageParam}&apiKey=d72feb0968d84c8b972fa7b1764bd2dd`

async function fetchHeadlines({ pageParam }) {
   const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=science&pageSize=5&page=${pageParam}&apiKey=d72feb0968d84c8b972fa7b1764bd2dd`
   );
   return response.json();
}

function App() {
   const {
      data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetching,
      isFetchingNextPage,
      status,
   } = useInfiniteQuery({
      queryKey: ["headlines"],
      queryFn: fetchHeadlines,
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
         /*console.log(
            lastPage.articles.length == 0 ? pages.length + 1 : undefined
         );*/

         return lastPage.articles.length == 0 ? undefined : pages.length + 1;
      },
   });

   return (
      <div>
         <h1>Infinite Scroll</h1>
         {data?.pages.map((page, i) => {
            return (
               <div key={i}>
                  {page.articles.map((article) => {
                     return (
                        <section
                           key={article?.title}
                           style={{
                              margin: "5rem 0",
                              padding: "1rem",
                              backgroundColor: "#555",
                           }}
                        >
                           <h2 style={{ color: "hotpink" }}>
                              {article?.title}
                           </h2>
                           <h3>{article.description} </h3>
                           <p>{article?.content} </p>
                        </section>
                     );
                  })}
               </div>
            );
         })}
         <div>
            {!hasNextPage ? (
               <h2>There is not more data to display</h2>
            ) : (
               <button
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetchingNextPage}
               >
                  Load More Data
               </button>
            )}
         </div>
      </div>
   );
}
export default App;
