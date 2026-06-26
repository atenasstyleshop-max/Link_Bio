# Atenas Style Shop — Link in Bio

## Estructura de archivos
```
atenas-links/
├── index.html       ← página principal
├── style.css        ← estilos y animaciones
├── main.js          ← efecto ripple al hacer clic
├── assets/
│   ├── logo.png     ← pon tu logo aquí (800x800px, fondo transparente)
│   └── avatar.png   ← opcional: foto de perfil (800x800px circular)
└── README.md
```

## Cómo personalizar los links

Abre `index.html` y busca estos placeholders:

1. **Página web:**
   ```
   href="TU_LINK_WEB_AQUI"
   ```
   Reemplaza por tu URL, ej: `href="https://atenasstyleshop.com"`

2. **WhatsApp Mayorista:**
   ```
   href="https://wa.me/573000000000?text=..."
   ```
   Cambia `573000000000` por tu número con código de país (Colombia = 57)

3. **WhatsApp al Detal:**
   Igual que el anterior, mismo formato.

4. **Catálogo PDF:**
   ```
   href="TU_LINK_CATALOGO_PDF_AQUI"
   ```
   Sube el PDF a Google Drive → clic derecho → Compartir → Obtener enlace

## Cómo agregar tu logo/imagen

1. Guarda tu imagen como `logo.png` en la carpeta `assets/`
2. En `index.html` busca este bloque:
   ```html
   <!-- Reemplaza por: <img src="assets/logo.png" alt="Atenas Style Shop"> -->
   <svg class="logo-svg">...</svg>
   ```
3. Borra la línea del SVG y descomenta la imagen:
   ```html
   <img src="assets/logo.png" alt="Atenas Style Shop">
   ```

## Tamaño ideal de imagen para el avatar
- **Formato:** PNG con fondo transparente
- **Tamaño:** 800 × 800 px
- **Forma:** cuadrada (se recorta en círculo automáticamente)

### Cómo pedirla con IA:
> "Genera una imagen PNG 800x800px con fondo transparente de una mujer estilo ilustración 3D cartoon, cabello oscuro, gafas de sol, sosteniendo cajas rosadas, colores rosa y lila, sin texto, estilo chic y femenino"

## Despliegue en Vercel

1. Crea cuenta en https://vercel.com (gratis)
2. Instala Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Desde la carpeta del proyecto:
   ```
   vercel
   ```
4. Sigue los pasos → obtienes una URL tipo `atenas-links.vercel.app`

### O sin CLI (más fácil):
1. Sube la carpeta a GitHub
2. Entra a vercel.com → "New Project" → conecta tu repo
3. Deploy automático ✓

## Dominio personalizado (opcional)
En Vercel → Settings → Domains → agrega `links.atenasstyleshop.com` o similar
# Link_Bio
