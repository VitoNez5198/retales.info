# Sistema de Registro de Consumo de Retales

## Descripción
Este proyecto es una aplicación web que permite a los trabajadores registrar el consumo de retales de aluminio. La aplicación ayuda a mantener un historial de consumos y genera reportes para optimizar el control de inventario.

## Tecnologías
- Backend: Node.js, Express.js
- Base de Datos: PostgreSQL
- Frontend: HTML, CSS, JavaScript
- Autenticación: JSON Web Tokens (JWT)

## Funcionalidades
- Autenticación de usuarios (registro e inicio de sesión)
- Registro de consumo de retales (tipo, color, cantidad, medida)
- Historial de consumos con filtros y búsqueda
- Reportes de consumo (opcional)

## Instalación
1. Clona el repositorio: `git clone <URL-del-repositorio>`
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` en la raíz del proyecto y agrega las variables necesarias:

DATABASE_URL=tu_url_de_base_de_datos JWT_SECRET=tu_secreto_jwt


4. Ejecuta la aplicación: `npm start`

## Uso
Accede a la aplicación en `http://localhost:3000` después de ejecutar el servidor.
