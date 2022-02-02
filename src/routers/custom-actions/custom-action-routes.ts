import { FastifyPluginCallback } from "fastify";
import { CustomAction, CustomActionDtoType } from "./custom-action-defs";

export const createCustomAction: FastifyPluginCallback = (instance, options, done) => {
  instance.post<{ Body: CustomActionDtoType }>(
    '/customActions',
    {
      schema: {
        description: "Create a new custom action",
        tags: ['Custom Actions'],
        body: CustomAction,
        response: {
          200: {}
        }
      }
    },
    (request, reply) => {
      console.log(`Creating App: ${JSON.stringify(request.body)}`);

      reply.status(200).send();
    });

  done();
}