FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install -g pnpm
RUN pnpm install

# Copy source code
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["pnpm", "dev"]
