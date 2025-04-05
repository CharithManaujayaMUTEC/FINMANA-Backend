# Step 1: Use official Node.js image as base
FROM node:16-alpine AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first for better caching
COPY package*.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Copy the rest of the application code 
COPY . .

# Build the React app for production
RUN npm run dev

# Step 5: Install nodemon globally for hot reloading in development
RUN npm install -g nodemon

# Step 6: Copy the rest of the backend code
COPY . .

# Step 7: Expose port (default Node.js port)
EXPOSE 5000

# Step 8: Use `npm run dev` to start the app (assumes you have a "dev" script in package.json)
CMD ["npm", "run", "dev"]
