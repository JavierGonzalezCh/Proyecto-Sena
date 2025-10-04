# Proyecto E-commerce con React - SENA

Bienvenido/a al proyecto base para crear nuestro **E-commerce con React**.  
Este documento te explicará paso a paso cómo instalarlo, ejecutarlo y entender su estructura, incluso si nunca has trabajado con React antes.

---

## 1. ¿Qué es este proyecto?

Este es un **proyecto inicial de tienda online (e-commerce)** hecho con [React](https://react.dev/), una biblioteca de JavaScript que nos permite construir interfaces interactivas de forma sencilla.

Queremos mantener las cosas **simples y claras**, así que **no usamos Tailwind, ni Redux, ni otras herramientas avanzadas**. Solo React, CSS y un poco de organización.

---

## 2. Empezar a trabajar en el proyecto

A continuación se explica **detalladamente** cómo preparar tu máquina y empezar a trabajar en el proyecto. Sigue los pasos en el orden indicado.

### 2.1 Requisitos previos
Antes de empezar debes tener instalados:
- **Node.js** (recomendado v18 o superior). Comprueba con:
  ```bash
  node -v
  ```
- **NPM** (se instala junto con Node). Comprueba con:
  ```bash
  npm -v
  ```
- **Git** Comprueba con:
  ```bash
  git -v
  ```
Si al ejecutar los comandos anteriores obtienes números de versión, estás listo.

### 2.2 Clonar el repositorio

Clona el repositorio a tu máquina local con:
```bash 
git clone https://github.com/JavierGonzalezCh/Proyecto-Sena.git
```

Después entra en la carpeta que se creó. El nombre exacto de la carpeta lo decide git según el repo (normalmente Proyecto-Sena):
```bash 
cd Proyecto-Sena
```
o si tu sistema creó "proyecto-sena":
```bash 
cd proyecto-sena
```
### 2.3 Instalar las dependencias

Dentro de la carpeta del proyecto instala las dependencias con:
```bash
npm install
```

Esto creará la carpeta node_modules y descargará todo lo necesario para ejecutar el proyecto.

Si falla npm install, anota el error y compártelo con el equipo; las soluciones comunes son borrar node_modules y package-lock.json y volver a ejecutar npm install:
```bash
rm -rf node_modules package-lock.json
npm install
```
### 2.4 Crear una nueva rama (paso importante)

Antes de empezar a trabajar, crea una rama nueva para tu tarea. Así evitamos conflictos y mantenemos main limpio.

Asegúrate de estar en la rama principal y actualizada:
```bash
git checkout main 
git pull origin main 
```
Crea y cámbiate a tu nueva rama. Usa un nombre descriptivo, por ejemplo feature/product-list o fix/header-bug:
```bash
git checkout -b feature/nombre-corto-descriptivo
```

Alternativa moderna (git >= 2.23):
```bash
git switch -c feature/nombre-corto-descriptivo
```

Confirma que estás en la rama correcta:
```bash
git branch
```

### 2.5 Ejecutar el servidor de desarrollo

Con las dependencias instaladas y estando en la rama de trabajo, ejecuta:
```bash
npm run dev
```

Abre en el navegador la dirección que te muestre la terminal (normalmente http://localhost:5173/). Cada vez que guardes cambios, la página se recarga automáticamente.

En este momento puedes empezar a trabajar en el código (abre el proyecto en tu editor; por ejemplo en VS Code: code .).

### 2.5 Hacer cambios, commitear y subir tu rama
Una vez consideres que terminaste con tus cambios, revisa qué archivos cambiaste:
```bash
git status
```

Añade los cambios que quieres commitear:
```bash
git add .
```

Crea un commit con un mensaje claro:
```bash
git commit -m "feat: agregar página de lista de productos"
```

Mensajes sugeridos: 
- feat: ... para nuevas funcionalidades, 
- fix: ... para correcciones, 
- docs: ... para cambios en documentación.

Sube la rama al repositorio remoto y establece el upstream:
```bash
git push -u origin feature/nombre-corto-descriptivo
```
## 3. Estructura de carpetas
  
Cada archivo de componente o página tiene su propio archivo CSS con el mismo nombre, para mantener orden y separar los estilos.


```
src/
├── components/          # Componentes reutilizables (botones, tarjetas, navbar, etc.)
│   ├── ProductCard/     # Carpeta de un componente específico
│   │   ├── ProductCard.jsx
│   │   └── ProductCard.css
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
├── pages/               # Páginas principales del sitio (Home, Productos, Carrito, etc.)
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.css
│   ├── Products/
│   │   ├── Products.jsx
│   │   └── Products.css
│   ├── Cart/
│   │   ├── Cart.jsx
│   │   └── Cart.css
├── App.jsx              # Componente principal con las rutas
├── main.jsx             # Punto de entrada de la aplicación
└── index.css            # Estilos globales (colores, fuentes, márgenes generales)
```
Descripción de carpetas y archivos

### 3.1 Componentes
Aquí se guardan componentes pequeños y reutilizables, como botones, encabezados, tarjetas de producto, etc.

Ejemplo:
```
src/
└── components/          # Componentes reutilizables (botones, tarjetas, navbar, etc.)
    ├── ProductCard/     # Carpeta de un componente específico
    │   ├── ProductCard.jsx
    │   └── ProductCard.css
    └── Navbar/
        ├── Navbar.jsx
        └── Navbar.css
```

🔸 Siempre que crees un nuevo componente .jsx, dbes crearlo en una carpeta nueva con su correspondiente su archivo de estilos .css con el mismo nombre.

### 3.2 Paginas

Aquí se encuentran las páginas principales del sitio, como:

Ejemplo:
```
src/
└── pages/               # Páginas principales del sitio (Home, Productos, Carrito, etc.)
    ├── Home/
    │   ├── Home.jsx
    │   └── Home.css
    ├── Products/
    │   ├── Products.jsx
    │   └── Products.css
    └── Cart/
        ├── Cart.jsx
        └── Cart.css

```

### 3.3 App.jsx

Este archivo define las rutas principales y conecta las páginas entre sí.
Ejemplo básico usando react-router-dom:
``` Javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
También puede tener su propio archivo de estilos (App.css) si quieres dar formato general a la estructura del sitio.

### 3.4 main.jsx

Es el punto de entrada del proyecto.
Aquí se carga el componente App dentro del HTML principal (index.html). *En principio, este archivo no debe ser modificado*

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


Normalmente no se toca mucho este archivo.


### Recomendaciones para el equipo

- Siempre importa el archivo CSS del mismo componente o página.
- Usa nombres de clases descriptivos (por ejemplo, .product-card o .navbar-container).
- Evita escribir todos los estilos en index.css; mantén los estilos separados por archivo.
- Revisa que cada archivo .jsx tenga su .css correspondiente.
- Si necesitas crear nuevas carpetas, como una de utils o de hooks o instalar nuevas dependencias sientanse en la libertad de hacerlo

