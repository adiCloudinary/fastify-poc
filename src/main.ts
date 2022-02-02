import { createServer } from "../lib/server/server";
import { createUsersRouter } from "./routers/users/user-routers";
import { createCustomAction } from "./routers/custom-actions/custom-action-routes";
import { baseSwaggerOasRoot } from "../lib/server/swagger-oas-root";

baseSwaggerOasRoot.openapi.tags.concat([
  { name: 'Users', description: 'User related end-points' },
  { name: 'Custom Actions', description: 'Custom Action endpoints'}
]);
const server = createServer();

server.register(createUsersRouter);
server.register(createCustomAction);

const start = async () => {
  try {
    await server.listen(3000);

    server.swagger();

    console.log(`Server now listening on port 3000...`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();