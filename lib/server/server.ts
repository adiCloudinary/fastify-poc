import fastify, { FastifyInstance } from "fastify";
import { fastifySwagger, SwaggerOptions } from "fastify-swagger";
import { healthRouter } from "./routers/health-router";
import { baseSwaggerOasRoot } from "./swagger-oas-root";

export const createServer = (oasAdditionalDefs?: SwaggerOptions): FastifyInstance => {
  const server = fastify();

  server.register(fastifySwagger, { ...baseSwaggerOasRoot, ...oasAdditionalDefs });
  server.register(healthRouter);

  return server;
};