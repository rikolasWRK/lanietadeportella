# La Nieta de Portella 🍰✨
> Pastelería Fina, Bocaditos Gourmet & Café de Especialidad — Tarapoto, Perú.

Este repositorio contiene el código fuente de la plataforma web oficial de **La Nieta de Portella**, una web interactiva, responsiva y de alta gama visual diseñada para presentar sus colecciones de postres y facilitar pedidos directos.

---

## 🎨 Características del Proyecto

* **Experiencia Visual Premium:** Tipografía curada (`Poppins` para lectura y `Abril Fatface` para títulos de marca) combinada con un esquema de color cálido y editorial (tonos crema y chocolate oscuro).
* **Navegación 3D en Categorías:** Tarjetas interactivas con perspectiva tridimensional (`rotateX(12deg)` y elevación en hover), ilustradas con siluetas personalizadas que se transforman dinámicamente.
* **Sistema de Rutas SPA:** Enrutamiento del lado del cliente utilizando `react-router-dom` con `HashRouter`, permitiendo subpáginas dedicadas para colecciones (ej. `#/categoria/tortas`) de manera fluida y compatible con GitHub Pages.
* **Canal Integrado de Consultas (WhatsApp):** Botones de llamada a la acción contextualizados para iniciar chats de pedido pre-redactados en WhatsApp para cada producto y personalización de tortas.
* **Animaciones Físicas y Fluidas:** Animación de la barra de navegación basada en la física de resortes (`useSpring` de Framer Motion) para evitar transiciones abruptas al scrollear.
* **Despliegue Continuo (CI/CD):** Automatización mediante GitHub Actions para compilar y publicar la última versión en GitHub Pages con cada actualización.

---

## 🛠️ Stack Tecnológico

* **Frontend:** React 19 (TypeScript)
* **Empaquetador:** Vite
* **Estilos:** Tailwind CSS v4 (con variables de tema personalizadas)
* **Animaciones:** Framer Motion (Motion/React)
* **Iconografía:** Lucide React

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

### 3. Verificar tipados y linting
```bash
npm run lint
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