# Specify the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application with Vite
RUN npm run build

# Expose the port that the application will listen on
EXPOSE 3000

RUN apt-get update && apt-get install -y nginx
RUN rm -rf /var/www/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /var/www/html

# Set the command to start the application
CMD ["npm", "run", "start"]

