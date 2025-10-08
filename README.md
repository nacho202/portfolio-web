# Portfolio Astro

Un portfolio moderno y responsive construido con Astro, Tailwind CSS y MDX. Incluye modo oscuro automático, content collections para proyectos y páginas dinámicas.

## 🚀 Características

- ⚡ **Astro** - Framework moderno y rápido
- 🎨 **Tailwind CSS** - Estilos utilitarios con modo oscuro
- 📝 **MDX** - Proyectos escritos en Markdown con JSX
- 📱 **Responsive** - Diseño adaptativo para todos los dispositivos
- 🌙 **Modo oscuro** - Automático basado en preferencias del sistema
- 🔍 **SEO optimizado** - Meta tags y estructura semántica
- 📊 **Content Collections** - Gestión tipada de contenido

## 📁 Estructura del Proyecto

```
src/
├── layouts/
│   └── Layout.astro          # Layout principal con SEO
├── components/
│   └── ProjectCard.astro    # Componente para tarjetas de proyectos
├── pages/
│   ├── index.astro          # Página de inicio
│   ├── about.astro          # Sobre mí
│   ├── contact.astro        # Contacto
│   └── projects/
│       ├── index.astro      # Listado de proyectos
│       └── [slug].astro    # Página dinámica de proyecto
├── content/
│   ├── config.ts            # Configuración de collections
│   └── projects/            # Archivos MDX de proyectos
└── public/
    └── projects/            # Imágenes de proyectos
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd portfolio-astro

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo en http://localhost:4321
npm run build    # Construir para producción
npm run preview  # Vista previa de la build
```

## 📝 Cómo Agregar un Nuevo Proyecto

### 1. Crear archivo MDX

Crea un nuevo archivo en `src/content/projects/` con el nombre del proyecto:

```bash
src/content/projects/mi-nuevo-proyecto.mdx
```

### 2. Estructura del Frontmatter

```mdx
---
title: "Nombre del Proyecto"
description: "Descripción breve del proyecto"
image: "/projects/imagen-proyecto.jpg"
tags: ["React", "Node.js", "MongoDB"]
pubDate: 2024-03-15
featured: false
github: "https://github.com/usuario/proyecto"
live: "https://proyecto-demo.vercel.app"
---

## Contenido del Proyecto

Aquí puedes escribir el contenido detallado del proyecto usando Markdown...

### Características

- Lista de características
- Más información
- Detalles técnicos
```

### 3. Campos del Frontmatter

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `title` | string | ✅ | Título del proyecto |
| `description` | string | ✅ | Descripción breve |
| `image` | string | ✅ | Ruta a la imagen principal |
| `tags` | string[] | ✅ | Array de tecnologías |
| `pubDate` | date | ✅ | Fecha de publicación |
| `featured` | boolean | ❌ | Si es proyecto destacado |
| `github` | string | ❌ | URL del repositorio |
| `live` | string | ❌ | URL del demo en vivo |

### 4. Agregar Imagen

Coloca la imagen del proyecto en `public/projects/` y referencia en el frontmatter:

```yaml
image: "/projects/mi-proyecto.jpg"
```

## 🚀 Despliegue en Vercel

### Opción 1: Deploy Automático

1. **Conectar repositorio**:
   - Ve a [Vercel](https://vercel.com)
   - Conecta tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Astro

2. **Configuración automática**:
   - Framework: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Variables de entorno** (si las necesitas):
   - Ve a Settings → Environment Variables
   - Agrega las variables necesarias

### Opción 2: Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configuración de Dominio

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones

## 🎨 Personalización

### Colores

Edita `tailwind.config.mjs` para cambiar la paleta de colores:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... más tonos
  }
}
```

### Tipografía

Modifica las fuentes en `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
}
```

### Layout

Personaliza el layout principal en `src/layouts/Layout.astro`:
- Meta tags SEO
- Navegación
- Footer
- Scripts globales

## 📊 SEO y Performance

### Meta Tags

El layout incluye meta tags optimizados:
- Open Graph para redes sociales
- Twitter Cards
- Meta description
- Canonical URLs

### Optimizaciones

- **Imágenes**: Usa formatos modernos (WebP, AVIF)
- **Lazy loading**: Implementado en imágenes
- **Compresión**: Astro optimiza automáticamente
- **Caching**: Headers optimizados para Vercel

## 🔧 Configuración Avanzada

### Content Collections

Para agregar nuevos tipos de contenido, edita `src/content/config.ts`:

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    // ... más campos
  }),
});

export const collections = {
  projects,
  blog, // Nuevo collection
};
```

### Integraciones

El proyecto está preparado para:
- **Analytics**: Google Analytics, Plausible
- **Formularios**: Netlify Forms, Formspree
- **CMS**: Sanity, Strapi, Contentful
- **Comentarios**: Disqus, Giscus

## 🐛 Solución de Problemas

### Error: "Cannot find module"

```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "MDX not working"

Verifica que el archivo tenga extensión `.mdx` y el frontmatter esté correcto.

### Error: "Images not loading"

Asegúrate de que las imágenes estén en `public/` y las rutas empiecen con `/`.

## 📚 Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDX](https://mdxjs.com/)
- [Vercel Docs](https://vercel.com/docs)

## 📄 Licencia

MIT License - ver archivo LICENSE para más detalles.

---

**¿Necesitas ayuda?** Abre un issue en el repositorio o contacta a través de [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
