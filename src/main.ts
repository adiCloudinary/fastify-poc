import { createServer } from "../lib/server/server";
import { createUsersRouter } from "./routers/users/user-routers";

const server = createServer();

server.register(createUsersRouter);

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