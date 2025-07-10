# Usamos una imagen base ligera con Node
FROM node:22-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos solo los archivos de configuración primero para aprovechar el cache
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto en que corre Vite
EXPOSE 5173

# Comando por defecto (sobrescribible desde docker-compose)
CMD ["npm", "run", "dev"]