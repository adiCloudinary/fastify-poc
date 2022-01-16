import { FastifyPluginCallback } from "fastify";
import { GetUserQuery, GetUserQueryType, User, UserDtoType } from "./user-defs";

export const createUsersRouter: FastifyPluginCallback = (instance, options, done) => {
  instance.post<{ Body: UserDtoType }>(
    '/users',
    {
      schema: {
        description: 'Body of create-user request',
        tags: ['Users'],
        body: User,
        response: {
          200: {}
        }
      }
    },
    (request, reply) => {
      console.log(`Creating user: ${JSON.stringify(request.body)}`);

      reply.status(200).send();
    });

  instance.get<{ Querystring: GetUserQueryType, Reply: UserDtoType }>(
    '/users',
    {
      schema: {
        tags: ['Users'],
        querystring: GetUserQuery,
        response: {
          "200": User
        }
      }
    },
    (request, reply) => {
      console.log(`Querying for ${request.query.name} and ${request.query.age}`);

      reply.status(200).send({
        name: 'my-name',
        age: 12,
        proffessions: ['fisherman'],
        email: 'myemail@cloudinary.com'
      });
    }
  )

  done();
}