# Sistema de Tickets

Sistema de gestión de tickets de ayuda desarrollado con Next.js, Material UI, Redux Toolkit con RTK Query, y React Hook Form.

## Características

- **Reportar un problema**: Formulario completo con validación
- **Mis reportes**: Listado paginado de tickets
- **Gestión de tickets**: Ver detalle y eliminar tickets
- **Persistencia**: Almacenamiento en localStorage
- **Estado global**: Redux Toolkit con RTK Query

## Tecnologías

- Next.js 15 (App Router)
- TypeScript
- Material UI
- Redux Toolkit + RTK Query
- React Hook Form + Zod
- Atomic Design

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── reportar/
│   ├── mis-reportes/
│   └── ticket/[id]/
├── components/
│   ├── atoms/             # Componentes atómicos
│   ├── molecules/         # Componentes moleculares
│   ├── organisms/         # Componentes orgánicos
│   └── providers/         # Providers (Redux, MUI)
├── store/                  # Redux store
│   ├── api/               # RTK Query APIs
│   └── store.ts
├── types/                  # TypeScript types
└── utils/                  # Utilidades
```

## Scripts

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

