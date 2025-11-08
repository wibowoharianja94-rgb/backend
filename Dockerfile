# Gunakan Node LTS slim supaya layer lebih stabil
FROM node:22
# Tentukan working directory
WORKDIR /app

# Salin file konfigurasi npm
COPY package*.json ./

# Install hanya dependencies produksi
RUN npm install --production

# Salin seluruh source code backend
COPY . .

# Expose port sesuai app.js
EXPOSE 3000

# Jalankan server
CMD ["npm", "start"]
