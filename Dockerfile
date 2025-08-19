# ---- Build (Vite) ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Runtime (Nginx) ----
FROM nginx:alpine
# Config Nginx (escucha en 8080 y SPA fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Archivos estáticos de Vite
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
