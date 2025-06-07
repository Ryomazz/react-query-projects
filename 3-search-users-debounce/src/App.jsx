import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

// `https://jsonplaceholder.typicode.com/users?q=${userName}`

function useDebounceQuery(queryKey, queryFn, searchTerm, delay = 500) {
   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

   useEffect(() => {
      const timer = setTimeout(() => {
         setDebouncedSearchTerm(searchTerm);
      }, delay);

      return () => clearTimeout(timer);
   }, [searchTerm, delay]);

   return useQuery({
      queryKey: [...queryKey, debouncedSearchTerm],
      queryFn: async () => queryFn(debouncedSearchTerm),
      enabled: !!debouncedSearchTerm,
   });
}

function App() {
   const [userName, setUserName] = useState("");
   const { isLoading, error, data } = useDebounceQuery(
      ["users"],
      async (term) => {
         const response = await fetch(
            `https://jsonplaceholder.typicode.com/users?q=${term}`
         );
         return response.json();
      },
      userName.length < 3 ? "" : userName
   );
   return (
      <div>
         <h1>Search User</h1>
         <form>
            <input
               type="text"
               placeholder="Jhon, Thomas, Erwin..."
               value={userName}
               onChange={(e) => setUserName(e.target.value)}
            />
         </form>
         {isLoading && <p>Loading data, please wait....</p>}
         {error && <p>Error: {error} </p>}
         {data &&
            data.map((user) => {
               const { id, name, userName, email, phone } = user;

               return (
                  <article key={id}>
                     <h2>{name}</h2>
                     <h3>{userName}</h3>
                     <p>{email} </p>
                     <p>{phone} </p>
                  </article>
               );
            })}
      </div>
   );
}
export default App;
