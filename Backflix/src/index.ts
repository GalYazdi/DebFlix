import fastify from "fastify";
import cors from "@fastify/cors";
import movieRoutes from "./routes/moviesRoute";
import categoriesRoute from "./routes/categoriesRoute";
import actorRoutes from "./routes/actorsRoutes";

const start = async () => {
  const app = fastify({ logger: true });
  await app.register(cors, { origin: "*" });

  app.register(movieRoutes, { prefix: "/movies" });
  app.register(categoriesRoute, { prefix: "/categories" });
  app.register(actorRoutes, { prefix: "/actors" });

  app.listen({ port: 3000 }, (err, address) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    app.log.info(`Server listening at ${address}`);
  });
};

start();
