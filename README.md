# 🎵 Proyecto Final: Plataforma Musical Creo (Clemens Höberth)

Este proyecto es una plataforma web dedicada al artista **Creo**. Combina un backend robusto para la gestión de canciones e interacciones con un frontend dinámico diseñado para la mejor experiencia de usuario.

> **⚠️ Nota:** Este repositorio es una muestra del desarrollo técnico y el historial de cambios. No representa el entorno de producción final.

---

## 🚀 Requisitos para la ejecución

Asegúrate de tener instalados los siguientes componentes antes de comenzar:
- **PHP** (>= 8.1)
- **Composer** (para gestionar el framework Laravel y librerías)
- **Node.js** & **npm** (para el frontend en React)
- **MySQL** o MariaDB

---

## 🔧 Instalación y Configuración

Sigue estos pasos en orden para levantar el entorno local:

### 1. Configuración del Backend (Laravel)
No es necesario instalar Laravel globalmente; se descargará localmente con Composer.

1. **Instalar dependencias de PHP:**
   ```bash
   composer install
    ```
2.  **Configurar la Base de Datos y APP_KEY:**
    Edita el archivo `.env` con tus credenciales de MySQL (
        DB_DATABASE = creo_web, 
        DB_USERNAME = 'tu_usuario', 
        DB_PASSWORD = 'tu_contraseña'
        ).
    Edita el archivo `.env` con tus credenciales de MySQL.
    Y luego ejecutar para generar la clave y limpiar caché:
    ``` bash
    php artisan key:generate
    php artisan config:clear
    ```
3.  **Ejecutar Migraciones y Seeders:**
    Crea las tablas necesarias (canciones, usuarios, interacciones) y los datos que incluyen:
    ```bash
    php artisan migrate:fresh --seed
    ```
4.  **Vincular Almacenamiento:**
    Para que las portadas y los audios sean visibles desde la web:
    ```bash
    php artisan storage:link
    ```
5.  **Iniciar Servidor API:**
    ```bash
    php artisan serve
    ```

### 2. Configuración del Frontend (React)

1.  **Instalar dependencias de JavaScript:**
    ```bash
    npm install
    ```
2.  **Ejecutar en modo desarrollo:**
    ```bash
    npm run dev
    ```

---

## 🛰️ API y Rutas Destacadas

La API está diseñada para ser amigable con el SEO y los desarrolladores:
*   **API de Canciones:** Endpoints optimizados que responden mediante identificadores únicos (/api/songs/{id}).
* **Sistema de Interacción:** "Me gusta" y "Favoritos" integrados con el perfil de usuario mediante relaciones de Eloquent.
* **Base de Datos Musical:** Registro detallado de temas, incluyendo fechas de lanzamiento exactas extraídas de metadatos de YouTube.
* **Identidad Artística:** Incluye biografía técnica sobre la trayectoria del artista y su antiguo alias Hyperdemented.


---

## 📝 Notas de Desarrollo

*   **Identidad del Artista:** Se ha incluido una biografía técnica que respeta la transición del alias **Hyperdemented** al nombre actual **Creo**.
*   **Precisión de Datos:** Las fechas de lanzamiento se gestionan bajo formato `YYYY-MM-DD`, obtenidas de los metadatos oficiales de YouTube para asegurar fidelidad histórica.
*   **Seguridad:** El sistema verifica el estado del usuario (`active`) antes de permitir interacciones con el catálogo musical.

---

## 🛠️ Tecnologías Utilizadas

*   **Backend:** [Laravel 10+](https://laravel.com)
*   **Frontend:** [React](https://reactjs.org) con [Vite](https://vitejs.dev)
*   **Base de Datos:** MySQL
*   **Estilos:** Tailwind CSS (opcional, si lo usas)
*   **Gestión de Estado:** Hooks de React (UseState, UseEffect)   

---
*Desarrollado como tributo a la obra de Clemens Höberth.*