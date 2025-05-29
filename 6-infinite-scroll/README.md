# **6️⃣ Proyecto 6: "App de Noticias con Scroll Infinito"**

**📌 Conceptos aprendidos:**

-  Scroll infinito con `useInfiniteQuery`.
-  Carga paginada bajo demanda (al llegar al final de la página).

**🎯 Características:**

-  Cargar 10 noticias por "página".
-  Detectar cuándo el usuario llega al final para cargar más.

**🔗 API Sugerida:**

```js
// API Key = d72feb0968d84c8b972fa7b1764bd2dd
const fetchNews = async ({ pageParam = 1 }) => {
   const res = await fetch(
      `https://newsapi.org/v2/top-headlines?category=science&page=${pageParam}&apiKey=d72feb0968d84c8b972fa7b1764bd2dd`
   );
   return res.json();
};

// Uso:
useInfiniteQuery({
   queryKey: ["news"],
   queryFn: fetchNews,
   getNextPageParam: (lastPage) => lastPage.nextPage,
});
```
