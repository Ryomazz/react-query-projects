import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

async function fetchPokemon(name) {
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

   if (!response.ok) throw new Error("Pokemon not found");
   return await response.json();
}

function App() {
   const [name, setName] = useState(null);
   const { isLoading, error, data } = useQuery({
      queryKey: ["pokemon", name],
      queryFn: () => fetchPokemon(name),
      enabled: Boolean(name),
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      setName(e.target.name.value);
      e.target.name.value = "";
   };

   if (data) console.log(data);

   return (
      <div>
         <h1>Search Pokemon</h1>
         <form className="form" onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Pikachu, Charizard, Bulbasur..."
               name="name"
            />
            <button>Search</button>
         </form>
         {isLoading && <h1>Loading data...</h1>}
         {error && <h1>Error: {error.message} </h1>}
         {data && (
            <section>
               <h2>{String(data?.name).toUpperCase()} </h2>
               <img src={data?.sprites?.front_default} alt={data?.name} />
               {data?.stats.map((stat) => {
                  return (
                     <p key={stat.stat.name}>
                        {stat.stat.name} --- {stat.base_stat}{" "}
                     </p>
                  );
               })}
            </section>
         )}
      </div>
   );
}
export default App;
