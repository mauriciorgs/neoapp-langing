![NeoApp Ingeniería SAS](https://img.shields.io/badge/NeoApp%20Ingenier%C3%ADa-Landing%20Page-0052CC?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=fff)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)

# NeoApp Ingeniería SAS – Landing Page Corporativa

Landing page moderna para **NeoApp Ingeniería SAS**, construida con **React + Vite + TypeScript**, enfocada en desempeño, claridad del mensaje comercial y facilidad de mantenimiento.

> Este README está pensado tanto para desarrolladores como para personas de negocio que necesitan entender cómo usar, mantener y actualizar el sitio.

---

## 🚀 Vista rápida

- **Tecnologías**: React 19, Vite 7, TypeScript, CSS Modules.
- **Objetivo**: Presentar servicios, experiencia, aliados y llamado a la acción de NeoApp.
- **Enfoque**: Carga rápida, estructura modular por secciones (`features`) y contenido fácil de editar.

---

## 📑 Tabla de contenidos

1. [Características principales](#-características-principales)
2. [Stack tecnológico](#-stack-tecnológico)
3. [Estructura del proyecto](#-estructura-del-proyecto)
4. [Requisitos previos](#-requisitos-previos)
5. [Instalación y ejecución local](#-instalación-y-ejecución-local)
6. [Scripts disponibles](#-scripts-disponibles)
7. [Guía de contenido (dónde editar cada sección)](#-guía-de-contenido-dónde-editar-cada-sección)
8. [Buenas prácticas de desarrollo](#-buenas-prácticas-de-desarrollo)
9. [Despliegue](#-despliegue)
10. [Roadmap / mejoras futuras](#-roadmap--mejoras-futuras)
11. [Licencia](#-licencia)
12. [Contacto](#-contacto)

---

## ✨ Características principales

- **Diseño modular**: Cada sección principal está aislada en la carpeta `src/features`, lo que facilita su mantenimiento y evolución.
- **Responsive**: Maquetación pensada para escritorio, tablet y móvil (dependiendo de los estilos definidos en los CSS Modules).
- **Rápida y ligera**: Vite como bundler + React 19 para una experiencia moderna.
- **Fácil de personalizar**: Textos y contenido visual organizados por componente.

---

## 🧱 Stack tecnológico

- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 7
- **Lenguaje**: TypeScript 5
- **Estilos**: CSS Modules + hojas globales (`globals.css`, `variables.css`)
- **Calidad de código**: ESLint + reglas para React y TypeScript

---

## 🗂 Estructura del proyecto

Estructura relevante para el frontend:

```text
neoapp-langing/
├─ src/
│  ├─ app/
│  │  ├─ main.tsx          # Punto de entrada de la aplicación
│  │  └─ NeoApp.tsx        # Componente raíz de la landing
│  ├─ features/
│  │  ├─ hero/             # Sección principal (hero) de la página
│  │  ├─ about/            # Sección "Sobre nosotros"
│  │  ├─ services/         # Sección de servicios
│  │  ├─ projects/         # Experiencia / proyectos destacados
│  │  ├─ partners/         # Aliados / partners
│  │  ├─ cta/              # Llamado a la acción (Call To Action)
│  │  └─ footer/           # Pie de página
│  └─ styles/
│     ├─ globals.css       # Estilos globales
│     └─ variables.css     # Variables de color, tipografías, etc.
├─ index.html
├─ package.json
└─ vite.config.ts
```

---

## ✅ Requisitos previos

- **Node.js** ≥ 18
- Gestor de paquetes:
  - `pnpm` (recomendado porque existe `pnpm-lock.yaml`), o
  - `npm` / `yarn` (si prefieres, ajustando los comandos).

Comprueba tu versión de Node:

```bash
node -v
```

---

## 🛠 Instalación y ejecución local

1. **Clonar el repositorio**

```bash
git clone <https://github.com/mauriciorgs/neoapp-langing.git>
cd neoapp-langing
```

2. **Instalar dependencias**

Con `pnpm` (recomendado):

```bash
pnpm install
```

O con `npm`:

```bash
npm install
```

3. **Levantar entorno de desarrollo**

```bash
pnpm dev
# o
npm run dev
```

Por defecto Vite expone la aplicación en algo como `http://localhost:5173/` (la URL exacta se mostrará en la terminal).

---

## 📜 Scripts disponibles

Definidos en `package.json`:

- **`pnpm dev` / `npm run dev`**  
  Levanta el servidor de desarrollo con recarga en caliente (hot reload).

- **`pnpm build` / `npm run build`**  
  Compila la aplicación para producción (genera archivos estáticos optimizados).

- **`pnpm preview` / `npm run preview`**  
  Sirve localmente la build de producción para probar antes de desplegar.

- **`pnpm lint` / `npm run lint`**  
  Ejecuta ESLint sobre el código para verificar el estilo y posibles errores.

---

## 🧩 Guía de contenido (dónde editar cada sección)

Para modificar textos, imágenes o estructura de cada bloque de la landing:

- **Hero (sección principal)**  
  Archivo: `src/features/hero/Hero.tsx`  
  Estilos: `src/features/hero/Hero.module.css`

- **Sobre nosotros / About**  
  Archivo: `src/features/about/About.tsx`  
  Estilos: `src/features/about/About.module.css`

- **Servicios**  
  Archivo: `src/features/services/Services.tsx`  
  Estilos: `src/features/services/Services.module.css`

- **Experiencia / Proyectos**  
  Archivo (temporal): `src/features/projects/temp_Experience.tsx`  
  Estilos: `src/features/projects/Experience.module.css`

- **Partners / Aliados**  
  Archivo: `src/features/partners/Partners.tsx`  
  Estilos: `src/features/partners/Partners.module.css`

- **Call To Action (CTA)**  
  Archivo: `src/features/cta/CallToAction.tsx`  
  Estilos: `src/features/cta/CallToAction.module.css`

- **Footer**  
  Archivo: `src/features/footer/Footer.tsx`  
  Estilos: `src/features/footer/Footer.module.css`

- **Composición general de la página**  
  Archivo: `src/app/NeoApp.tsx`  
  Aquí se ensamblan las secciones (`Hero`, `About`, `Services`, etc.) en el layout final.

Si necesitas internacionalización (multi-idioma) o manejar el contenido desde un CMS, se puede añadir una capa intermedia (por ejemplo, archivos de configuración JSON o integración con un headless CMS).

---

## 🌱 Buenas prácticas de desarrollo

- **Tipado estricto**: Mantener los componentes y props tipados en TypeScript.
- **Componentes pequeños**: Si una sección crece demasiado, dividirla en subcomponentes.
- **Estilos coherentes**: Reutilizar variables de `variables.css` (colores, fuentes, espaciados).
- **Linting**: Ejecutar `pnpm lint` antes de hacer commits o desplegar.
- **Commits descriptivos**: Explicar qué cambiaste y por qué (no solo “fix” o “update”).

---

## ☁️ Despliegue

Este proyecto genera una **SPA estática** lista para ser desplegada en:

- Vercel
- Netlify
- GitHub Pages
- Cualquier hosting de archivos estáticos

### Build de producción

```bash
pnpm build
# o
npm run build
```

Esto generará la carpeta `dist/` con los archivos listos para subir al proveedor de hosting.

En Vercel/Netlify típicamente debes configurar:

- **Comando de build**: `pnpm build` o `npm run build`
- **Directorio de salida**: `dist`

---

## 🧭 Roadmap / mejoras futuras

- Internacionalización (ES / EN).
- Mejorar accesibilidad (A11Y) y soporte para lectores de pantalla.
- Integrar analítica (ej. Google Analytics, Plausible) y/o formularios de contacto reales.
- Añadir pruebas unitarias básicas para componentes críticos.

---

## 📄 Licencia

Este proyecto es propiedad de **NeoApp Ingeniería SAS**.  
El uso, distribución o modificación queda sujeto a los acuerdos internos de la compañía.

---

## 📬 Contacto

- **Empresa**: NeoApp Ingeniería SAS  
- **Sitio web**: _(añadir URL oficial cuando esté disponible)_  
- **Email**: _(añadir correo de contacto oficial, por ejemplo `contacto@neoapp.com`)_  
- **LinkedIn / Redes**: _(añadir enlaces si aplica)_

