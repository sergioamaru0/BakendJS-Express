# Backend Microservicio con Node.js + Express

Este proyecto es un microservicio desarrollado con Node.js y Express que se conecta a una base de datos PostgreSQL. Proporciona una API REST para realizar operaciones sobre una tabla de usuarios.

---

## Características
- **Conexión a PostgreSQL** utilizando la librería `pg`.
- **API REST** que incluye rutas para obtener y agregar usuarios.
- Uso de **Sequelize** para la gestión de la base de datos (migraciones incluidas).
- Rutas protegidas para operaciones específicas desde el backend.

---

## Estructura de la Tabla `usuarios`

```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100),
  edad INT
);
```

> **Nota**: No es necesario ejecutar manualmente el script SQL anterior, ya que Sequelize gestiona la creación de la tabla a través de migraciones.

---

## Rutas de la API

### GET `/api/users`
- **Descripción**: Obtiene todos los registros de la tabla `usuarios`.
- **URL**: `http://localhost:3000/api/users`
- **Respuesta**: 
```json
[
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "correo": "juan.perez@example.com",
    "edad": 30
  },
  {
    "id": 2,
    "nombre": "Ana López",
    "correo": "ana.lopez@example.com",
    "edad": 25
  }
]
```

### POST `/api/users`
- **Descripción**: Permite agregar nuevos usuarios desde el backend. Esta ruta no es accesible desde el frontend.
- **URL**: `http://localhost:3000/api/users`
- **Cuerpo del request**: 
```json
{
  "nombre": "Carlos García",
  "correo": "carlos.garcia@example.com",
  "edad": 28
}
```
- **Respuesta**:
```json
{
  "message": "Usuario agregado correctamente",
  "usuario": {
    "id": 3,
    "nombre": "Carlos García",
    "correo": "carlos.garcia@example.com",
    "edad": 28
  }
}
```

---

## Requisitos Previos
1. **Node.js** (v14 o superior).
2. **PostgreSQL** (configurado y en ejecución).
3. Herramienta como **Postman** o **cURL** para probar la API.

---

## Configuración e Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/tu-repo.git
   cd tu-repo
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura el archivo `.env` con las credenciales de tu base de datos:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=tu_base_de_datos
   ```

4. Ejecuta las migraciones para crear la tabla:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. Inicia el servidor:
   ```bash
   npm start
   ```

---

## Pruebas de la API

1. **GET `/api/users`**: 
   - Utiliza **Postman** o cualquier cliente HTTP.
   - Realiza una solicitud GET a `http://localhost:3000/api/users`.
   - Verifica los datos en formato JSON.

2. **POST `/api/users`**: 
   - Envía un cuerpo JSON con los datos del nuevo usuario.
   - La respuesta incluirá el usuario creado.

---

## Ejemplo de Uso en Postman
### GET `/api/user`
![image](https://github.com/user-attachments/assets/6bc49f6c-bd85-4f27-939d-eb299c11c651)


### POST `/api/user`
![image](https://github.com/user-attachments/assets/bf541954-c479-487b-8ac1-2c456e8aa4c3)


---

## Tecnologías Utilizadas
- **Node.js** y **Express**: Para construir el servidor.
- **PostgreSQL**: Base de datos relacional.
- **Sequelize**: ORM para manejar la base de datos.
- **pg**: Librería para la conexión con PostgreSQL.

---

## Autor
**Sergio Andrés Bareño**

