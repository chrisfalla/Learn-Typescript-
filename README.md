# Learning Backend

Un proyecto backend educativo construido con Express.js y TypeScript, diseñado para aprender y practicar desarrollo de APIs REST con autenticación, seguridad y gestión de bases de datos.

## Características

- **Express.js 5.1** - Framework web rápido y minimalista
- **TypeScript** - Tipado estático para mayor seguridad
- **PostgreSQL** - Base de datos relacional con driver `pg`
- **Autenticación JWT** - Tokens seguros con `jsonwebtoken`
- **Encriptación** - Contraseñas hasheadas con `bcryptjs`
- **Seguridad** - Headers de seguridad con `helmet`
- **CORS** - Control de acceso entre orígenes
- **Validación** - Esquemas con `zod`
- **Logging** - Registro de peticiones con `morgan`
- **Variables de entorno** - Configuración con `dotenv`

## Requisitos

- Node.js 18+
- pnpm 10.24.0
- PostgreSQL 12+

## Instalación

```bash
# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores
```

## Estructura del Proyecto

```
src/
├── config/        # Configuración de la aplicación
├── controllers/   # Controladores de rutas
├── middleware/    # Middleware personalizado
├── models/        # Modelos de datos
├── repositories/  # Acceso a datos (patrón repository)
├── routes/        # Definición de rutas
├── services/      # Lógica de negocio
├── types/         # Tipos TypeScript
└── utils/         # Utilidades y helpers

sql/
├── migrations/    # Migraciones de base de datos
└── queries/       # Queries SQL reutilizables
```

## Scripts Disponibles

```bash
# Desarrollo (con nodemon)
pnpm run dev

# Compilar TypeScript
pnpm run build

# Ejecutar en producción
pnpm start

# Tests
pnpm test
```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Base de datos
DATABASE_URL=postgresql://user:password@localhost:5432/learning_db

# JWT
JWT_SECRET=tu_secreto_super_seguro
JWT_EXPIRY=7d

# Servidor
PORT=3000
NODE_ENV=development
```

## Dependencias Principales

| Paquete | Versión | Propósito |
|---------|---------|----------|
| express | 5.1.0 | Framework web |
| typescript | 5.9.3 | Lenguaje tipado |
| pg | 8.16.3 | Driver PostgreSQL |
| jsonwebtoken | 9.0.2 | Autenticación JWT |
| bcryptjs | 3.0.3 | Hash de contraseñas |
| zod | 4.1.13 | Validación de esquemas |
| helmet | 8.1.0 | Seguridad HTTP |
| cors | 2.8.5 | Control CORS |
| morgan | 1.10.1 | Logging HTTP |
| dotenv | 17.2.3 | Variables de entorno |

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor en modo desarrollo
pnpm run dev

# El servidor estará disponible en http://localhost:3000
```

## Licencia

ISC

## Notas

Este es un proyecto educativo para aprender desarrollo backend con TypeScript y Express.
