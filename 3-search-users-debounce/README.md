# **3️⃣ Proyecto 3: "Buscador de Usuarios con Debounce"**

**📌 Conceptos aprendidos:**

-  Búsqueda en tiempo real con `debounce` (para evitar llamadas excesivas a la API).
-  `queryKey` dependiente de input (`['users', searchTerm]`).

**🎯 Características:**

-  Input de búsqueda que espera 300ms antes de hacer fetch.
-  Lista de usuarios filtrados.

**🔗 API Sugerida:**

```js
const fetchUsers = async (searchTerm) => {
   const res = await fetch(
      `https://jsonplaceholder.typicode.com/users?q=${searchTerm}`
   );
   return res.json();
};
```

---

## Steps ✔️

-  Implement the first interface
