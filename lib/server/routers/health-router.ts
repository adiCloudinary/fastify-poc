import { FastifyPluginCallback } from "fastify";

export const healthRouter: FastifyPluginCallback = (instance, options, done) => {
  instance.get(
    '/health',
    {
      schema: {
        tags: ['General']
      }
    },
    (request, reply) => {
      console.log('Checking health..');

      reply.send();
    });

  done();
};