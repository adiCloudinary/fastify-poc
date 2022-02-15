FROM node:16.14-alpine3.15

WORKDIR /usr/src/app

# Copy source files
COPY . .

# Install dependencies
RUN yarn install --frozen-lockfile

# Expose network
EXPOSE 3000

# Start server
CMD ["yarn", "start"]
