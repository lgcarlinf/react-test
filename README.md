# Proyecto React con Vite

Este proyecto es una aplicación construida con React y Vite. Incluye un entorno de desarrollo rápido y una configuración lista para producción.

## Requisitos

- Node.js (versión 14 o superior)
- npm (viene con Node.js) o Yarn

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. **Navega al directorio del proyecto:**
  ```bash
  cd <NOMBRE_DEL_PROYECTO>
  ```
3. **Instala las dependencias Con npm:**
  ```bash
  npm install
  ```
  O con Yarn:
  ```bash
  yarn install
  ```
## Ejecución en Desarrollo
Para iniciar el entorno de desarrollo con Vite, ejecuta el siguiente comando:
Con npm:
```bash
npm run dev
```
O con Yarn:
```bash
yarn dev
```
Esto abrirá la aplicación en http://localhost:5173 (por defecto). El servidor se reiniciará automáticamente cada vez que realices cambios en el código.

## Construcción para Producción
Para construir la aplicación para producción, usa el siguiente comando:
Con npm:
```bash
npm run build
```
O con Yarn:
```bash
yarn build
```
Esto generará una carpeta dist con los archivos optimizados para producción.

## Vista Previa de Producción
Para verificar la compilación de producción localmente, puedes ejecutar:
Con npm:
```bash
npm run preview
```
o Con Yarn:
```bash
yarn preview
```
Esto iniciará un servidor en http://localhost:4173 para previsualizar el proyecto en modo producción.
