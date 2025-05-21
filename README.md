# proyecto8_API_REST_FILES📦
 


Descripción
API de Gestión desarrollada en Node.js con Express y MongoDB, que permite relacionar plataformas de cursos con cursos y usuarios. La aplicación implementa operaciones CRUD para tres colecciones principales e incluye middlewares de autenticación personalizados.
🚀 Características Principales
Tecnologías Utilizadas

Backend: Node.js, Express
Base de Datos: MongoDB, Mongoose
Autenticación: Middlewares personalizados
Gestión de Datos: Operaciones CRUD

Funcionalidades Clave

Gestión de cursos, plataformas y usuarios
Sistema de autenticación y autorización
Semillas de datos para inicialización en cursos
Utilidades de apoyo
Middlewares de seguridad
Cloudinary para tratamiento de imagenes

📂 Estructura del Proyecto
CopyPROYECTO7_API_AUTH/
│
├── node_modules/ # Dependencias del proyecto
│
├── src/
│ ├── api/ # Lógica de la API (controllers/models/routes)
│ ├── config/ # Configuraciones del proyecto (db/jwt)
│ ├── data/ # Datos estáticos cursos
│ ├── middlewares/ # Middlewares de autenticación y validación
│ │ ├── auth.js # Middleware de autenticación
│ │ └── file # Middleware de imagenes
│ ├── utils/ # Funciones utilitarias
│ │ └── seeds/ # Scripts de sembrado de datos
│ │ └── cursos.js# Semillas para cursos
| | └── deletefile/ # Borrado de imagenes cloudinary
│ └── index.js # Punto de entrada del servidor
│
├── .env # Variables de entorno
├── .gitattributes # Configuraciones de Git
├── .gitignore # Archivos ignorados por Git
├── package.json # Configuración del proyecto
├── package-lock.json # Bloqueo de versiones de dependencias
└── README.md # Documentación del proyecto
📦 Instalación y Configuración
Requisitos Previos

Node.js (versión 14 o superior)
MongoDB
npm

Pasos de Instalación

Clonar el repositorio

bashCopygit clone https://github.com/sarafontdevila/proyecto8_API_REST_FILES.git
cd proyecto8_API_REST_FILE

Instalar dependencias

bashCopynpm install

Configurar variables de entorno
Crea un archivo .env con las variables necesarias:

CopyMONGODB_URI=tu_cadena_de_conexion_mongodb
PORT=3000
JWT_SECRET=tu_secreto_jwt

Iniciar el servidor

bash Copy npm start

🌐 Estructura de Middlewares
Autenticación (middlewares/auth.js)

Middleware principal de autenticación
Verificación de tokens
Control de acceso por roles

Semillas de Datos (utils/seeds/cursos.js)

Script para poblar base de datos
Creación de datos iniciales de prueba

🌐 Endpoints de la API

Users

POST /api/v1/users/register: Registro de usuarios
POST /api/v1/users/login: Inicio de sesión
GET /api/v1/users: Obtener perfil/listado de usuarios
PUT /api/v1/users/:id : Actualizar usuario
DELETE /api/v1/users/:id : Eliminar usuario

Cursos

GET /api/v1/cursos: Listar todos los cursos
POST /api/v1/cursos: Crear nuevo curso
PUT /api/v1/cursos/:id: Actualizar curso
DELETE /api/v1/cursos/:id: Eliminar curso

Plataformas

GET /api/v1/plataformas: Listar plataforma
GET /api/v1/plataformas/:id : Encontrar por ID plataforma
POST /api/v1/plataformas: Crear plataforma
PUT /api/v1/plataformas/:id: Actualizar plataforma
DELETE /api/v1/plataformas/:id: Eliminar plataforma

🛡 Características de Seguridad

Autenticación basada en middlewares personalizados
Control de acceso por roles
Protección de rutas sensibles
Validación de tokens JWT

📄 Licencia
Uso libre. Desarrollado por Sara Fontdevila.
