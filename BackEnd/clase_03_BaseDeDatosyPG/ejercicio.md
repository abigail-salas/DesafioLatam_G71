### Ejercicio: Gestión de Recetas

#### Descripción:

Serás un desarrollador que debe construir un servidor Express para gestionar una base de datos de recetas. El servidor debe permitir a los usuarios agregar nuevas recetas y consultar las recetas existentes desde una base de datos PostgreSQL utilizando las rutas **GET** y **POST**.

#### Instrucciones para el ejercicio:

1. **Crea una base de datos llamada `recetas_db` y una tabla `recetas` con las siguientes columnas:**

   - `id` (entero, clave primaria, auto-incremental)
   - `titulo` (cadena, no nulo)
   - `ingredientes` (cadena, no nulo)
   - `preparacion` (cadena, no nulo)
   - `tiempo` (entero, no nulo, en minutos)

2. **Desarrolla las siguientes rutas en Express:**
   - **POST `/recetas`**: Permite agregar una nueva receta a la base de datos. Debe recibir `titulo`, `ingredientes`, `preparacion`, y `tiempo` en el cuerpo de la solicitud.
   - **GET `/recetas`**: Devuelve todas las recetas almacenadas en la base de datos.
   - **GET `/:titulo`**: Filtra las recetas por el titulo.
   - **GET `/cortas`**: Devuelve las recetas que solo duren 20 min o menos.
   - **GET `/:ingredientes`**: Filtra por ingrediente.

#### Requerimientos:

1. Usar el paquete `pg` para conectarse a la base de datos.
2. Crear rutas `GET` con Express para devolver los registros pedidos de la tabla `recetas`.
3. Crear una ruta `POST` con Express para recibir y almacenar una nueva receta en PostgreSQL.
