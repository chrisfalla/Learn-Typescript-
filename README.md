# 🚀 Learning Backend

Un proyecto backend educativo construido con **Express.js + TypeScript + PostgreSQL**, diseñado para aprender y practicar desarrollo de APIs REST profesionales con autenticación, seguridad y gestión completa de bases de datos.

> **Nota**: Este es un proyecto educativo para aprender desarrollo backend con TypeScript y Express.

---

## ✨ Características

- **Express.js 5.1** - Framework web rápido y minimalista
- **TypeScript 5.9** - Tipado estático para mayor seguridad y mantenibilidad
- **PostgreSQL 12+** - Base de datos relacional robusta
- **Autenticación JWT** - Tokens seguros con `jsonwebtoken`
- **Encriptación** - Contraseñas hasheadas con `bcryptjs`
- **Seguridad** - Headers de seguridad con `helmet`
- **CORS** - Control de acceso entre orígenes
- **Validación** - Esquemas con `zod`
- **Logging** - Registro de peticiones con `morgan`
- **Variables de entorno** - Configuración con `dotenv`
- **27 Migraciones** - Base de datos completa para e-commerce
- **Migraciones automáticas** - Scripts para migrate, rollback y seed

---

## 📋 Requisitos

- **Node.js** 18+
- **pnpm** 10.24.0 (package manager)
- **PostgreSQL** 12+

---

## 🔧 Instalación Rápida

```bash
# 1. Instalar dependencias
pnpm install

# 2. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de PostgreSQL

# 3. Probar conexión a base de datos
pnpm db:test

# 4. Ejecutar migraciones
pnpm db:migrate

# 5. Poblar datos iniciales (opcional)
pnpm db:seed

# 6. Iniciar servidor en desarrollo
pnpm run dev
```

El servidor estará disponible en `http://localhost:3000`

---

## 📁 Estructura del Proyecto

```
Learning_Backend/
├── src/
│   ├── config/              # Configuración de la aplicación
│   ├── controllers/         # Controladores de rutas (vacío - por implementar)
│   ├── database/
│   │   ├── config/
│   │   │   └── database.ts  # Configuración de conexión a BD
│   │   ├── migrations/      # 27 migraciones SQL
│   │   ├── scripts/
│   │   │   ├── migrate.ts   # Ejecutar migraciones
│   │   │   ├── rollback.ts  # Revertir migraciones
│   │   │   └── seed.ts      # Poblar datos iniciales
│   │   ├── seeds/           # Datos iniciales
│   │   └── test/
│   │       ├── connection.ts    # Configuración de conexión
│   │       └── testConnection.ts # Prueba de conexión
│   ├── middlewares/         # Middlewares personalizados (vacío - por implementar)
│   ├── models/              # Modelos de datos (vacío - por implementar)
│   ├── routes/              # Definición de rutas (vacío - por implementar)
│   ├── services/            # Lógica de negocio (vacío - por implementar)
│   ├── types/               # Tipos TypeScript (vacío - por implementar)
│   └── utils/
│       ├── tables.txt       # Documentación de tablas
│       └── util.ts          # Funciones utilitarias
├── server.ts                # Punto de entrada principal
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración TypeScript
├── .env                     # Variables de entorno (local)
├── .env.example             # Plantilla de variables de entorno
├── .gitignore               # Archivos ignorados por git
├── pnpm-lock.yaml           # Lock file de dependencias
├── README.md                # Este archivo
└── PROJECT_REPORT.md        # Informe detallado del proyecto
```

---

## 🗄️ Base de Datos

### Tablas Implementadas (27 migraciones)

**Módulo de Usuarios & Autenticación:**
- `usuarios` - Usuarios del sistema con autenticación
- `proveedores_autenticacion` - Proveedores OAuth (Google, GitHub, etc.)
- `tokens_autenticacion` - Tokens de sesión y recuperación

**Módulo de Direcciones:**
- `direcciones` - Direcciones de envío de usuarios

**Módulo de Productos & Catálogo:**
- `categorias` - Categorías de productos
- `marcas` - Marcas de productos
- `productos` - Productos principales
- `atributos_producto` - Atributos de productos (color, talla, etc.)
- `valores_atributo` - Valores específicos de atributos
- `variantes_producto` - Variantes de productos
- `variantes_atributos` - Relación entre variantes y atributos
- `imagenes_producto` - Imágenes de productos

**Módulo de Inventario:**
- `inventario` - Stock de productos

**Módulo de Proveedores:**
- `proveedores` - Proveedores de productos
- `ordenes_proveedor` - Órdenes de compra a proveedores

**Módulo de Carrito & Órdenes:**
- `carritos` - Carritos de compra
- `items_carrito` - Items en el carrito
- `cupones` - Códigos de descuento
- `ordenes` - Órdenes de compra de clientes
- `items_orden` - Items en las órdenes

**Módulo de Envíos & Facturación:**
- `envios` - Información de envíos
- `facturas` - Facturas de órdenes
- `pagos` - Registro de pagos

**Módulo de Reseñas & Wishlist:**
- `resenas` - Reseñas de productos
- `wishlists` - Listas de deseos
- `wishlist_items` - Items en listas de deseos

**Módulo de Notificaciones:**
- `notificaciones` - Notificaciones del sistema

---

## 📜 Scripts Disponibles

```bash
# 🚀 Desarrollo
pnpm run dev              # Inicia servidor con nodemon (recarga automática)

# 🔨 Compilación
pnpm run build            # Compila TypeScript a JavaScript
pnpm start                # Ejecuta versión compilada

# 🗄️ Base de Datos
pnpm db:test              # Prueba conexión a PostgreSQL
pnpm db:migrate           # Ejecuta todas las migraciones
pnpm db:rollback          # Revierte la última migración
pnpm db:seed              # Puebla datos iniciales
pnpm db:reset             # Rollback + Migrate + Seed (reset completo)
```

---

## 🔐 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (basado en `.env.example`):

```env
# Configuración de Base de Datos
DATABASE_URL=postgresql://usuario:password@localhost:5432/nombre_db
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=learning_backend

# Configuración del Servidor
PORT=3000
NODE_ENV=development

# Configuración JWT
JWT_SECRET=tu_secreto_super_seguro_aqui
JWT_EXPIRES_IN=7d

# Configuración CORS
CORS_ORIGIN=http://localhost:5173
```

---

## 📦 Dependencias Principales

| Paquete | Versión | Propósito |
|---------|---------|----------|
| express | 5.1.0 | Framework web REST |
| typescript | 5.9.3 | Lenguaje tipado |
| pg | 8.16.3 | Driver PostgreSQL |
| jsonwebtoken | 9.0.2 | Autenticación JWT |
| bcryptjs | 3.0.3 | Hash de contraseñas |
| zod | 4.1.13 | Validación de esquemas |
| helmet | 8.1.0 | Seguridad HTTP |
| cors | 2.8.5 | Control CORS |
| morgan | 1.10.1 | Logging HTTP |
| dotenv | 17.2.3 | Variables de entorno |

**DevDependencies:**
- nodemon (3.1.11) - Recarga automática en desarrollo
- ts-node (10.9.2) - Ejecutar TypeScript directamente
- @types/* - Tipos para todas las librerías

---

## 🌐 Endpoints Actuales

### Health Check
- `GET /` - Mensaje de bienvenida
- `GET /health` - Estado del servidor y conexión a BD

```bash
curl http://localhost:3000/health
```

Respuesta:
```json
{
  "status": "ok",
  "database": "connected",
  "timestamp": "2025-12-03T10:30:45.123Z"
}
```

---

## 📚 Documentación con Swagger

### Acceder a Swagger UI

Una vez que el servidor esté corriendo:

```bash
pnpm run dev
```

Abre tu navegador en: **http://localhost:3000/api-docs**

### Documentar Endpoints

Usa comentarios JSDoc con `@swagger` para documentar tus endpoints:

```typescript
/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Obtener lista de usuarios
 *     description: Retorna una lista paginada de usuarios
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       401:
 *         description: No autorizado
 *     security:
 *       - bearerAuth: []
 */
router.get('/usuarios', (req, res) => {
  // Tu código aquí
});
```

Para una guía completa, consulta **[SWAGGER_GUIDE.md](./SWAGGER_GUIDE.md)**

---

## 📖 Documentación Completa

Este proyecto incluye documentación detallada en varios archivos:

| Documento | Propósito |
|-----------|-----------|
| **README.md** | Guía de inicio rápido y referencia general |
| **PROJECT_REPORT.md** | Informe detallado del proyecto, estado y dependencias |
| **ARCHITECTURE.md** | Documentación de arquitectura, patrones y flujos |
| **SWAGGER_GUIDE.md** | Guía completa para documentar endpoints con Swagger |

### Cómo Usar la Documentación

1. **Nuevo en el proyecto?** → Lee `README.md`
2. **Necesitas entender la arquitectura?** → Lee `ARCHITECTURE.md`
3. **Quieres documentar un endpoint?** → Lee `SWAGGER_GUIDE.md`
4. **Necesitas detalles técnicos?** → Lee `PROJECT_REPORT.md`

### Características de Swagger

- ✅ Documentación interactiva de API
- ✅ Prueba endpoints directamente desde el navegador
- ✅ Autenticación JWT integrada
- ✅ Esquemas y validación automática
- ✅ Exportar especificación OpenAPI

---

## 🚀 Guía de Inicio Rápido

### 1. Clonar y configurar
```bash
git clone <repo>
cd Learning_Backend
pnpm install
```

### 2. Configurar base de datos
```bash
cp .env.example .env
# Editar .env con tus credenciales de PostgreSQL
```

### 3. Verificar conexión
```bash
pnpm db:test
```

### 4. Crear tablas
```bash
pnpm db:migrate
```

### 5. Iniciar desarrollo
```bash
pnpm run dev
```

---

## 📊 Estado del Proyecto

### ✅ Completado
- [x] Estructura de carpetas base
- [x] Configuración de TypeScript
- [x] Dependencias instaladas (169 paquetes)
- [x] 27 migraciones de base de datos
- [x] Scripts de migración, rollback y seed
- [x] Servidor Express con rutas de health check
- [x] Configuración de seguridad (helmet, cors)
- [x] Logging con morgan
- [x] Variables de entorno

### 🔄 En Progreso
- [ ] Implementar controladores (controllers)
- [ ] Crear rutas de API (routes)
- [ ] Implementar servicios de negocio (services)
- [ ] Crear modelos de datos (models)
- [ ] Implementar middlewares de autenticación

### ⏳ Pendiente
- [ ] Autenticación JWT completa
- [ ] Endpoints de usuarios
- [ ] Endpoints de productos
- [ ] Endpoints de órdenes
- [ ] Endpoints de carrito
- [ ] Tests unitarios e integración
- [ ] Documentación de API (Swagger/OpenAPI)
- [ ] Manejo de errores global
- [ ] Rate limiting
- [ ] Caché

---

## 🛠️ Desarrollo

### Estructura de Carpetas Recomendada

Cada módulo debe seguir este patrón:

```
src/
├── controllers/
│   └── usuariosController.ts
├── routes/
│   └── usuariosRoutes.ts
├── services/
│   └── usuariosService.ts
├── models/
│   └── usuariosModel.ts
├── types/
│   └── usuario.types.ts
└── middlewares/
    └── authMiddleware.ts
```

### Ejemplo de Flujo

1. **Route** recibe la petición
2. **Middleware** valida y autentica
3. **Controller** procesa la lógica
4. **Service** ejecuta la lógica de negocio
5. **Model** accede a la base de datos
6. Respuesta se envía al cliente

---

## 🔗 Recursos Útiles

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [JWT Introduction](https://jwt.io/introduction)
- [Zod Documentation](https://zod.dev/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## 📝 Notas Importantes

- El proyecto usa **pnpm** como package manager (no npm ni yarn)
- TypeScript está configurado en modo **strict**
- Las migraciones están diseñadas para un **e-commerce completo**
- La estructura sigue patrones profesionales (MVC + Services)
- Seguridad implementada desde el inicio (helmet, cors, bcrypt)
- Todas las contraseñas deben estar hasheadas con bcryptjs
- Los tokens JWT deben validarse en cada petición protegida

---

## 📄 Licencia

ISC

---

## 👨‍💻 Autor

Learning Backend - Proyecto Educativo

**Última actualización**: Diciembre 3, 2025
