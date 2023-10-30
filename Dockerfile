# Use an official Node.js runtime as the base image
FROM node:14-alpine as build-image

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight nginx image to serve the app
FROM nginx:alpine

# Copy the built app from the build stage
COPY --from=build-image /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]