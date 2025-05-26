# Primer Roadmap de proyectos

¡Excelente idea! Aquí tienes un **roadmap de proyectos con React Query** (sin dependencias adicionales, solo React) donde cada app introduce un nuevo concepto y aumenta en dificultad.

---

## **🚀 Roadmap de Proyectos con React Query**

_(Ordenados de fácil a avanzado)_

### **1️⃣ Proyecto 1: "Buscador de Pokémon"**

**📌 Conceptos aprendidos:**

-  Primer contacto con `useQuery`.
-  Fetching básico de API (`fetch` o `axios`).
-  Manejo de estados de carga (`isLoading`) y error (`isError`).

**🎯 Características:**

-  Buscar Pokémon por nombre o ID.
-  Mostrar imagen, tipo y stats.

**🔗 API Sugerida:**

```js
const fetchPokemon = async (name) => {
   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
   return res.json();
};
```

---

### **2️⃣ Proyecto 2: "Lista de Posts con Paginación"**

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

### **3️⃣ Proyecto 3: "Buscador de Usuarios con Debounce"**

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

### **4️⃣ Proyecto 4: "To-Do App con Mutaciones"**

**📌 Conceptos aprendidos:**

-  Mutaciones (`useMutation`) para crear/eliminar/actualizar.
-  Revalidación automática (`invalidateQueries`).
-  Optimistic updates (actualizar UI antes de confirmar la API).

**🎯 Características:**

-  Agregar, borrar y marcar to-dos como completados.
-  Persistencia en API falsa (ej: `json-server` o `mockapi.io`).

**🔗 API Sugerida:**

```js
const addTodo = async (newTodo) => {
   const res = await fetch("https://mockapi.io/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
   });
   return res.json();
};
```

---

### **5️⃣ Proyecto 5: "Dashboard con Datos en Tiempo Real"**

**📌 Conceptos aprendidos:**

-  Refetch automático (`refetchInterval`).
-  Sincronización en segundo plano (`staleTime` vs `cacheTime`).
-  Mostrar datos actualizados sin recargar la página.

**🎯 Características:**

-  Gráfico (simulado) que se actualiza cada 5 segundos.
-  Notificaciones de cambios recientes.

**🔗 API Sugerida:**

```js
const fetchStats = async () => {
   const res = await fetch("https://api.example.com/stats");
   return res.json();
};

// Configuración de la query:
useQuery({
   queryKey: ["stats"],
   queryFn: fetchStats,
   refetchInterval: 5000,
});
```

---

### **6️⃣ Proyecto 6: "App de Noticias con Scroll Infinito"**

**📌 Conceptos aprendidos:**

-  Scroll infinito con `useInfiniteQuery`.
-  Carga paginada bajo demanda (al llegar al final de la página).

**🎯 Características:**

-  Cargar 10 noticias por "página".
-  Detectar cuándo el usuario llega al final para cargar más.

**🔗 API Sugerida:**

```js
const fetchNews = async ({ pageParam = 1 }) => {
   const res = await fetch(
      `https://newsapi.org/v2/top-headlines?page=${pageParam}`
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

---

## **📌 ¿Qué sigue después?**

Una vez domines estos proyectos, puedes:

1. **Integrar Zustand** para manejar estado global (ej: tema oscuro, usuario autenticado).
2. **Usar React Router** para navegación entre páginas.
3. **Aprender Testing** con React Testing Library + Jest.

---

### **🔍 ¿Por qué este orden?**

-  Empieza con lo **más básico** (fetching) y avanza a **casos reales complejos** (scroll infinito, optimizaciones).
-  Cada proyecto **refuerza lo anterior** y añade un nuevo desafío.
-  Sin dependencias externas: **solo React y React Query**.

# Segundo Roadmap de proyectos

¡Claro! Aquí tienes un **roadmap de proyectos con React Query** (sin otras dependencias, solo React) donde cada uno introduce un concepto nuevo y refuerza los anteriores, en orden de dificultad creciente:

---

### **📌 Nivel 1: Fundamentos de Fetching**

#### **Proyecto 1: Lista de Posts (useQuery básico)**

**Conceptos:**

-  Fetching de datos con `useQuery`.
-  Estados: `isLoading`, `isError`, `data`.  
   **Descripción:**
-  Muestra una lista de posts desde una API (ej: JSONPlaceholder).  
   **API:**

```javascript
fetch("https://jsonplaceholder.typicode.com/posts");
```

---

### **📌 Nivel 2: Parámetros y Búsqueda**

#### **Proyecto 2: Buscador de Usuarios (Query Keys dinámicas)**

**Conceptos:**

-  Queries dependientes de variables (ej: `searchTerm`).
-  `queryKey` como array `['users', searchTerm]`.  
   **Descripción:**
-  Filtra usuarios por nombre usando un input.  
   **API:**

```javascript
fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`);
```

---

### **📌 Nivel 3: Mutaciones (CRUD básico)**

#### **Proyecto 3: Añadir/Eliminar Posts (useMutation)**

**Conceptos:**

-  Crear/eliminar datos con `useMutation`.
-  `invalidateQueries` para refrescar datos.  
   **Descripción:**
-  Formulario para añadir posts y botón para eliminarlos.  
   **API:**

```javascript
// POST
fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: {...} });
// DELETE
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' });
```

---

### **📌 Nivel 4: Paginación y Optimización**

#### **Proyecto 4: Posts Paginados (keepPreviousData)**

**Conceptos:**

-  Paginación con `_page` y `_limit`.
-  `keepPreviousData` para transiciones suaves.  
   **Descripción:**
-  Botones "Anterior/Siguiente" para navegar entre páginas de posts.  
   **API:**

```javascript
fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
```

---

### **📌 Nivel 5: Actualización Optimista**

#### **Proyecto 5: Editar Posts (onMutate, onError, onSettled)**

**Conceptos:**

-  Actualización optimista de UI antes de la respuesta del servidor.
-  Rollback con `onError`.  
   **Descripción:**
-  Editar título de un post y ver cambios al instante.  
   **API:**

```javascript
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
   method: "PATCH",
   body: JSON.stringify({ title: newTitle }),
});
```

---

### **📌 Nivel 6: Queries Dependientes**

#### **Proyecto 6: Perfil de Usuario (Queries en cadena)**

**Conceptos:**

-  Queries que dependen de datos previos (`enabled`).  
   **Descripción:**
-  Primero fetch al usuario, luego a sus posts.  
   **API:**

```javascript
// 1. Fetch user
fetch(`https://jsonplaceholder.typicode.com/users/1`);
// 2. Luego sus posts (solo si user existe)
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
```

---

### **📌 Nivel 7: Infinite Scroll (useInfiniteQuery)**

#### **Proyecto 7: Lista Infinita de Comentarios**

**Conceptos:**

-  `useInfiniteQuery` y `fetchNextPage`.
-  Botón "Cargar más".  
   **API:**

```javascript
fetch(
   `https://jsonplaceholder.typicode.com/comments?_page=${pageParam}&_limit=20`
);
```

---

### **📌 Nivel 8: Manejo de Cache Avanzado**

#### **Proyecto 8: Prefetching al hacer hover**

**Conceptos:**

-  `prefetchQuery` para cargar datos antes de necesitarlos.  
   **Descripción:**
-  Al hacer hover en un post, precarga sus comentarios.  
   **API:**

```javascript
queryClient.prefetchQuery(["comments", postId], () => fetchComments(postId));
```

---

### **📌 Nivel 9: WebSockets (Actualización en Tiempo Real)**

#### **Proyecto 9: Chat Básico (Integración con WS)**

**Conceptos:**

-  Actualizar cache manualmente con `setQueryData`.  
   **Descripción:**
-  Mensajes que se actualizan en tiempo real con WebSockets.  
   **Mock de WebSocket:**

```javascript
const ws = new WebSocket("ws://dummy");
ws.onmessage = (e) => {
   queryClient.setQueryData("messages", (old) => [...old, e.data]);
};
```

---

### **📌 Nivel 10: Testing (Mocking Queries)**

#### **Proyecto 10: Tests para tu Todo App**

**Conceptos:**

-  Mockear `useQuery` y `useMutation`.
-  Verificar que la UI reacciona a estados (loading, error).  
   **Herramientas:**
-  `@testing-library/react` (ya viene en Create React App).

---

### **📊 Roadmap Visual:**

```
1. Fetching → 2. Búsqueda → 3. CRUD → 4. Paginación → 5. Optimistic UI →
6. Queries Dependientes → 7. Infinite Scroll → 8. Prefetching → 9. WebSockets → 10. Testing
```

### **🔑 Clave:**

-  Cada proyecto usa **solo React y React Query** (nada de Redux, Zustand, etc).
-  Puedes usar `json-server` para mockear un backend local si JSONPlaceholder se queda corto.

¿Quieres que profundice en la implementación de alguno? ¡Avísame! 😊
