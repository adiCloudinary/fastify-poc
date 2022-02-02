export const baseSwaggerOasRoot = {
  routePrefix: '/openapi',
  openapi: {
    info: {
      title: 'Fastify POC',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0'
    },
    servers: [
      { url: 'http://localhost:3000' }
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'General', description: 'General endpoints' }
    ]
  },
  hideUntagged: true,
  exposeRoute: true
};