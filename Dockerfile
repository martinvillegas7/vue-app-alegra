FROM node:18

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install pnpm globally
RUN npm install -g pnpm

# Expose the port
EXPOSE 3000

# Set the entrypoint
ENTRYPOINT ["/app/entrypoint.sh"]
