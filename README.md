# fastify-poc Microservice
This is a POC to see Fastify abilities to validate a request using JSON schema as well as enforce static typing out of the same code definition.

## Prerequisites:
You need [nvm](https://github.com/nvm-sh/nvm) and [yarn](https://yarnpkg.com/) installed globally.

See `.nvmrc` file in the root folder for the used NodeJS version.

## Installation
Run:
```zsh
> nvm use
> yarn install
```

## Execution
```zsh
> yarn start
```
You can explore the served endpoints via Swagger UI in http://localhost:3000/openapi

## Key information
In folder `src/routers` you'll find the definition of the user-routers for fastify, as well as (`user-defs.ts`) the type and request-validation definitions that apply to those routers.

The POC uses [npm-typebox](https://www.npmjs.com/package/@sinclair/typebox) for the static-type definitions and [npm-fastify-swagger](https://www.npmjs.com/package/fastify-swagger) for integrating the fastify validation definitions with an appropriate Swagger UI.