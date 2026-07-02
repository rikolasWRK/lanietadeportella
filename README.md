# La Nieta de Portella 🍰✨

> Pastelería Fina, Bocaditos Gourmet & Café de Especialidad — Tarapoto, Perú.

Este repositorio contiene el código fuente de la plataforma web oficial de **La Nieta de Portella**, una web interactiva, responsiva y de alta gama visual diseñada para presentar sus colecciones de postres y facilitar pedidos directos.

---

## 🎨 Características del Proyecto

- **Experiencia Visual Premium:** Tipografía curada (`Poppins` para lectura y `Abril Fatface` para títulos de marca) combinada con un esquema de color cálido y editorial (tonos crema y chocolate oscuro).
- **Navegación 3D en Categorías:** Tarjetas interactivas con perspectiva tridimensional (`rotateX(12deg)` y elevación en hover), ilustradas con siluetas personalizadas que se transforman dinámicamente.
- **Sistema de Rutas SPA:** Enrutamiento del lado del cliente utilizando `react-router-dom` con `HashRouter`, permitiendo subpáginas dedicadas para colecciones (ej. `#/categoria/tortas`) de manera fluida y compatible con GitHub Pages.
- **Carrito de Pedido con Persistencia:** Carrito completo (agregar, cantidades, eliminar, total) que sobrevive a recargas gracias a `localStorage` y arma un único mensaje de pedido en WhatsApp con todos los productos.
- **Catálogo Real por Categoría:** Cada categoría lista sus productos reales con detalle expandible (ingredientes y características) y acción de compra directa.
- **Canal Integrado de Consultas (WhatsApp):** Botón flotante siempre visible más pedidos pre-redactados para el carrito, cada producto y la personalización de tortas.
- **Páginas de Soporte:** FAQ con acordeón, Políticas de Privacidad, Términos de Servicio, Libro de Reclamaciones (Indecopi) y una página 404 a medida.
- **Animaciones Físicas y Fluidas:** Animación de la barra de navegación basada en la física de resortes (`useSpring` de Framer Motion) para evitar transiciones abruptas al scrollear.
- **Despliegue Continuo (CI/CD):** Automatización mediante GitHub Actions para compilar y publicar la última versión en GitHub Pages con cada actualización.

---

## 🛠️ Stack Tecnológico

- **Frontend:** React 19 (TypeScript)
- **Empaquetador:** Vite 6
- **Estilos:** Tailwind CSS v4 (con variables de tema personalizadas)
- **Animaciones:** Framer Motion (Motion/React)
- **Iconografía:** Lucide React
- **Calidad de código:** ESLint 9 (flat config) + Prettier

---

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes de UI (secciones + tarjetas)
│   ├── Navigation.tsx   # Header + carrito con badge + nav por scroll
│   ├── Hero.tsx
│   ├── Catalog.tsx      # Grilla de categorías (enlaza a /categoria/:id)
│   ├── CategoryPage.tsx # Listado real de productos por categoría
│   ├── ProductCard.tsx  # Tarjeta de producto con "Agregar al carrito"
│   ├── CartDrawer.tsx   # Panel lateral del carrito
│   ├── FloatingWhatsApp.tsx
│   ├── ScrollToTop.tsx
│   └── pages/           # Páginas de contenido (FAQ, legal, 404, reclamos)
├── context/
│   └── CartContext.tsx  # Estado global del carrito + persistencia
├── lib/                 # Utilidades compartidas
│   ├── asset.ts         # Resuelve rutas de /public respetando el base URL
│   ├── whatsapp.ts      # Enlaces y mensajes de pedido a WhatsApp
│   └── useSectionNav.ts # Scroll a secciones (evita el choque HashRouter/anchor)
├── constants.ts         # Catálogo de productos y datos de contacto
├── types.ts             # Tipos de dominio (Product, CartItem, ...)
└── index.css            # Tema de Tailwind (@theme) y utilidades
```

---

## 💻 Desarrollo Local

Para ejecutar y editar este proyecto en tu propia máquina:

### 1. Clonar el repositorio e instalar dependencias

```bash
npm install
```

### 2. Iniciar el servidor de desarrollo

Corre la aplicación localmente en [http://localhost:3000/lanietadeportella/](http://localhost:3000/lanietadeportella/):

```bash
npm run dev
```

### 3. Verificar tipados, linting y formato

```bash
npm run typecheck   # Chequeo de tipos con TypeScript
npm run lint        # Análisis estático con ESLint
npm run format      # Formatea el código con Prettier
```

### 4. Compilar para producción

Genera los archivos optimizados dentro de la carpeta `/dist`:

```bash
npm run build
```

---

## 🚀 Publicación / Despliegue en GitHub Pages

El proyecto está configurado con **GitHub Actions**. Cada vez que realizas un cambio y lo subes a la rama principal:

```bash
git add .
git commit -m "feat: descripción de tus cambios"
git push origin main
```

La plataforma de GitHub compilará el código automáticamente y actualizará el sitio web público en:
👉 **[https://rikolaswrk.github.io/lanietadeportella/](https://rikolaswrk.github.io/lanietadeportella/)**
