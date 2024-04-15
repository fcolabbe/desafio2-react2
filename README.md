# Natural Pic

Natural Pic es una nueva plataforma dedicada a fotógrafos que promueve el interés por el cuidado ambiental y las fotos de paisajes naturales sin filtros. En este proyecto, se implementará un 
sistema de likes usando Context API para el manejo de estado global y React Router para la creación de las vistas Home y Favoritos.

## Características

1. **Contexto con Context API**: Se crea un contexto que puede ser importado desde cualquier componente de la aplicación.
2. **Proveedor de contexto**: El contexto creado se utiliza como un componente para envolver toda la aplicación.
3. **Estado global con useState**: El proveedor de contexto tiene un estado creado con el hook `useState` que se pasa como valor.
4. **Uso del contexto**: Se utiliza el hook `useContext` para acceder al estado global desde los componentes que lo necesiten, especialmente en la funcionalidad de marcar y desmarcar favoritos.

## Requisitos

1. Crear un contexto con Context API que se pueda importar desde cualquier componente de la aplicación.
2. Usar el contexto creado como un componente para envolver toda la aplicación.
3. Asignar como valor del Provider un estado creado con el hook `useState`.
4. Hacer uso del hook `useContext` para acceder al estado global desde los componentes que lo necesiten, sobre todo en la funcionalidad de marcar y desmarcar favoritos.

## Tecnologías utilizadas

- React
- Vite
- Context API
- React Router
- Fetch o Axios (para consumir los datos del archivo `photos.json`)

## Instrucciones de instalación y uso

1. Crea un nuevo proyecto Vite:
```
npm create vite natural-pic -- --template react
```
2. Instala las dependencias:
```
cd natural-pic
npm install
```
3. Inicia el servidor de desarrollo:
```
npm run dev
```
4. Abre tu navegador y visita `http://localhost:5173` para ver la aplicación en funcionamiento.

## Estructura del proyecto

```
DESAFIO2-REACT2
├── public
│   └── photos.json
├── src
│   ├── assets
│   │   ├── heart-filled.svg
│   │   ├── heart-icon-red.png
│   │   ├── heart-icon.png
│   │   └── heart.svg
│   ├── components
│   │   ├── Gallery.jsx
│   │   ├── IconHeart.jsx
│   │   └── Navbar.jsx
│   ├── views
│   │   ├── Favorites.jsx
│   │   └── Home.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```