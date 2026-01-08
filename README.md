# Sistema de Tickets

Sistema de gestión de tickets de ayuda desarrollado con Next.js 15, Material UI, Redux Toolkit con RTK Query, y React Hook Form. Implementa principios SOLID y Atomic Design para una arquitectura escalable y mantenible.

## 📋 Características

### Funcionalidades Principales

- **🏠 Página Principal**: Vista de inicio con navegación a las diferentes secciones
- **📝 Reportar un Problema**:
  - Formulario completo con validación en tiempo real
  - Campos: Asunto, Prioridad, Detalle, Adjuntar archivo
  - Preview de imágenes antes de subir
  - Validación con Zod y React Hook Form
- **📊 Mis Reportes**:
  - Listado paginado de tickets con tabla responsive
  - Paginación avanzada con navegación (primera, anterior, siguiente, última)
  - Selector de elementos por página (5, 10, 15)
  - Información de paginación (página actual/total, elementos mostrados)
  - Acciones: Ver detalle, Eliminar ticket
  - Estado de carga con spinner
- **🔍 Detalle de Ticket**:
  - Vista completa del ticket
  - Preview de imágenes adjuntas
  - Cambio de estatus del ticket
  - Eliminación de ticket desde la vista de detalle
- **💾 Persistencia**: Almacenamiento local con localStorage
- **🔄 Estado Global**: Gestión de estado con Redux Toolkit + RTK Query

### Características Técnicas

- ✅ **Arquitectura Atomic Design**: Componentes organizados en Atoms, Molecules, Organisms
- ✅ **Principios SOLID**: Aplicados en toda la arquitectura del proyecto
- ✅ **TypeScript**: Tipado estático para mayor seguridad
- ✅ **Validación de Formularios**: React Hook Form + Zod
- ✅ **UI/UX Moderna**: Material UI con tema personalizado
- ✅ **Responsive Design**: Diseño adaptativo para diferentes dispositivos
- ✅ **Optimización**: Carga diferida y feedback visual de operaciones

## 🛠 Tecnologías

### Core

- **Next.js 15.0** - Framework React con App Router
- **React 19.0** - Biblioteca de UI
- **TypeScript 5.6** - Lenguaje de programación tipado

### UI/UX

- **Material UI 6.0** - Biblioteca de componentes UI
- **@mui/icons-material 6.5** - Iconos de Material Design
- **Emotion 11.13** - Biblioteca CSS-in-JS

### Estado y Datos

- **Redux Toolkit 2.2** - Gestión de estado
- **RTK Query 2.2** - Fetching de datos y caché
- **React Redux 9.1** - Bindings de Redux para React

### Formularios y Validación

- **React Hook Form 7.52** - Gestión de formularios
- **Zod 3.23** - Validación de esquemas
- **@hookform/resolvers 3.9** - Integración React Hook Form + Zod

### Desarrollo

- **ESLint 9.0** - Linter de código
- **Next.js ESLint Config** - Configuración ESLint para Next.js

## 🏗 Arquitectura del Proyecto

### Principios SOLID Aplicados

El proyecto implementa los principios SOLID para garantizar un código mantenible, escalable y de alta calidad:

1. **Single Responsibility Principle (SRP)**

   - Cada componente tiene una única responsabilidad
   - Separación de lógica de presentación y lógica de negocio
   - Hooks personalizados para lógica reutilizable

2. **Open/Closed Principle (OCP)**

   - Componentes extensibles mediante props
   - Configuración centralizada en archivos de configuración
   - Utilidades reutilizables que aceptan parámetros

3. **Liskov Substitution Principle (LSP)**

   - Componentes que pueden ser reemplazados sin afectar la funcionalidad
   - Interfaces consistentes en toda la aplicación

4. **Interface Segregation Principle (ISP)**

   - Interfaces específicas y enfocadas
   - Props tipadas solo con lo necesario para cada componente

5. **Dependency Inversion Principle (DIP)**
   - Dependencia de abstracciones (hooks, componentes)
   - Inversión de dependencias mediante props y callbacks
   - Separación entre capas de presentación y lógica

### Atomic Design

La estructura sigue la metodología Atomic Design para organizar los componentes:

- **Atoms**: Componentes básicos e indivisibles (buttons, badges, cards)
- **Molecules**: Combinaciones de átomos que forman unidades funcionales
- **Organisms**: Componentes complejos que combinan moléculas y átomos
- **Pages**: Páginas completas que utilizan los organismos

## 📁 Estructura del Proyecto

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout principal con Providers
│   ├── page.tsx                 # Página principal (/)
│   ├── reportar/                # Página de reportar ticket
│   │   └── page.tsx
│   ├── mis-reportes/            # Página de listado de tickets
│   │   └── page.tsx
│   └── ticket/[id]/             # Página de detalle de ticket
│       └── page.tsx
│
├── components/                   # Componentes organizados por Atomic Design
│   ├── atoms/                   # Componentes atómicos reutilizables
│   │   ├── PriorityBadge/      # Badge de prioridad
│   │   ├── StatusBadge/        # Badge de estatus
│   │   ├── ThemedButton/       # Botón con estilos temáticos
│   │   ├── StyledCard/         # Card estilizado
│   │   ├── CardIconWrapper/    # Wrapper para íconos de cards
│   │   └── GradientOverlay/    # Overlay con gradiente
│   │
│   ├── molecules/               # Componentes moleculares organizados por contexto
│   │   ├── Home/               # Componentes para página principal
│   │   │   └── HomeCard/       # Card de navegación principal
│   │   │
│   │   ├── ReportTicket/       # Componentes para formulario de reporte
│   │   │   ├── FormField/      # Campo de formulario genérico
│   │   │   ├── PrioritySelect/ # Selector de prioridad
│   │   │   └── FileUpload/     # Subida de archivos con preview
│   │   │
│   │   ├── TicketList/         # Componentes para lista de tickets
│   │   │   ├── TicketActions/  # Acciones de ticket (ver/eliminar)
│   │   │   ├── TicketTableRow/ # Fila de tabla de tickets
│   │   │   └── EnhancedPagination/ # Paginación avanzada
│   │   │
│   │   ├── TicketDetail/       # Componentes para detalle de ticket
│   │   │   ├── TicketHeader/   # Encabezado del ticket
│   │   │   ├── TicketActionsBar/ # Barra de acciones
│   │   │   ├── DetailField/    # Campo de detalle
│   │   │   ├── StatusSelect/   # Selector de estatus
│   │   │   └── ImagePreview/   # Preview de imágenes
│   │   │
│   │   └── shared/             # Componentes compartidos
│   │       └── DeleteConfirmDialog/ # Diálogo de confirmación
│   │
│   ├── organisms/               # Componentes orgánicos (secciones completas)
│   │   ├── HomeHeader/         # Header de página principal
│   │   ├── ReportTicketForm/   # Formulario completo de reporte
│   │   ├── TicketList/         # Lista completa de tickets
│   │   ├── TicketTable/        # Tabla de tickets
│   │   ├── TicketDetail/       # Detalle completo de ticket
│   │   └── TicketDetailContent/ # Contenido del detalle
│   │
│   └── providers/               # Providers de la aplicación
│       └── Providers.tsx       # Redux y MUI Theme providers
│
├── config/                       # Configuración de la aplicación
│   ├── theme.ts                # Configuración del tema de Material UI
│   └── homeCards.ts            # Configuración de cards de inicio
│
├── constants/                    # Constantes de la aplicación
│   ├── paginationConstants.ts  # Constantes de paginación
│   └── ticketConstants.ts      # Constantes de tickets (prioridades, estatus)
│
├── hooks/                        # Custom hooks
│   ├── useTicketForm.ts        # Hook para formulario de ticket
│   ├── useTicketList.ts        # Hook para lista de tickets
│   └── useTicketDetail.ts      # Hook para detalle de ticket
│
├── schemas/                      # Esquemas de validación
│   └── ticketSchema.ts         # Esquema Zod para formulario de ticket
│
├── store/                        # Redux store
│   ├── store.ts                # Configuración del store
│   └── api/                    # RTK Query APIs
│       └── ticketsApi.ts       # API de tickets (CRUD con localStorage)
│
├── types/                        # Tipos TypeScript
│   └── ticket.ts               # Tipos relacionados con tickets
│
└── utils/                        # Utilidades
    ├── dateFormatter.ts        # Utilidades para formatear fechas
    ├── delay.ts                # Utilidades para delays controlados
    ├── storage.ts              # Utilidades para localStorage
    └── styles/                 # Utilidades de estilos
        └── buttonStyles.ts     # Utilidades para estilos de botones
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo en http://localhost:3000

# Producción
npm run build        # Construye la aplicación para producción
npm run start        # Inicia el servidor de producción
```

## 📚 Documentación Adicional

Para información detallada sobre instalación, configuración y uso del proyecto, consulta:

- [📄 Documentación completa en HackMD](https://hackmd.io/@MgZpyuwoQY6qKQ_HI1Op-w/Doc-AngeelRdz)

## 🎨 Características de Diseño

- **Tema Personalizado**: Paleta de colores basada en `#132d55` con gradientes y variaciones
- **Componentes Estilizados**: Componentes MUI personalizados con tema consistente
- **Responsive Design**: Diseño adaptativo para móviles, tablets y desktop
- **Feedback Visual**: Spinners, estados de carga y transiciones suaves
- **Accesibilidad**: Componentes accesibles con ARIA labels y navegación por teclado

## 🔒 Principios de Calidad de Código

- ✅ **TypeScript Strict Mode**: Tipado estricto para mayor seguridad
- ✅ **ESLint**: Linter configurado para Next.js
- ✅ **Código Limpio**: Nombres descriptivos, funciones pequeñas, responsabilidad única
- ✅ **Comentarios**: Documentación en componentes complejos
- ✅ **Estructura Modular**: Separación clara de responsabilidades

## 📝 Notas de Desarrollo

- **LocalStorage**: Los datos se persisten en `localStorage` del navegador
- **Estado Global**: Redux Toolkit con RTK Query maneja el estado de la aplicación
- **Validación**: Todos los formularios usan Zod para validación de esquemas
- **Formato de Fechas**: Fechas formateadas en español (es-ES) con AM/PM
- **Imágenes**: Las imágenes se convierten a base64 para almacenamiento

## 📄 Licencia

Proyecto privado - Prueba Técnica
