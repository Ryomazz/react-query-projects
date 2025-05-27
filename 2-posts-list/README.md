# **2️⃣ Proyecto 2: "Lista de Posts con Paginación"**

**📌 Conceptos aprendidos:**

-  Paginación con `queryKey` dinámico (ej: `['posts', page]`).
-  Botones "Anterior/Siguiente" para navegar entre páginas.
-  Invalidación de cache al cambiar de página.

**🎯 Características:**

-  Mostrar 10 posts por página.
-  Botones para navegar entre páginas.

**🔗 API Sugerida:**

```js
const fetchPosts = async (page) => {
   const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
   );
   return res.json();
};
```

---

## Steps ✔️

-  Config QueryClient and QueryClientProvider Render a basic interface ✔️
