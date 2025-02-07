# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Install git (required for cloning the repository)
RUN apk add --no-cache git

# Set the working directory inside the container
WORKDIR /app

# Clone the React project from GitHub
RUN git clone https://github.com/NitinSirsath/minimal-portfolio.git .

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Install a lightweight web server to serve the app
RUN npm install -g serve

# Expose the port the app will run on
# RUN npx serve dist -l 3000     
EXPOSE 3000

# Command to serve the app
CMD ["npx", "serve", "dist", "-l", "3000"]