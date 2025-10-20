# PWA App Shell

Aplicación web progresiva construida con React y Vite que implementa el patrón App Shell para funcionar sin conexión.

## Instalación

```bash
cd pwa-app-shell
npm install
npm run dev
```

La aplicación estará disponible en http://localhost:5173

## Arquitectura

### App Shell
El App Shell es la estructura mínima de la aplicación que se carga instantáneamente:

- Header: Título y estado de conexión
- Content: Catálogo de productos
- Footer: Información de versión

### Estructura del Proyecto
```
src/
├── components/
│   ├── Header.jsx        # Encabezado con indicador online/offline
│   └── Footer.jsx        # Pie de página
├── views/
│   └── ProductsView.jsx  # Vista de productos
└── App.jsx               # Componente principal
```

## Configuración PWA

El archivo `vite.config.js` configura el plugin PWA:

- Service Worker: Cachea automáticamente todos los recursos
- Manifest: Define nombre, iconos y colores de la app
- Workbox: Maneja las estrategias de caché

## Cómo probar sin conexión

1. Abre la aplicación en Chrome
2. Presiona F12 para abrir DevTools
3. Ve a la pestaña Network
4. Selecciona "Offline" en el dropdown
5. Recarga la página

La aplicación seguirá funcionando porque el Service Worker cachea los recursos en la primera visita.

## Tecnologías

- React 18
- Vite 6
- vite-plugin-pwa
- Workbox
