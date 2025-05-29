import fastify from "fastify";
import movieRoutes from "./routes/moviesRoute";
import actorRoutes from "./routes/actorsRoutes";

const app = fastify({ logger: true });
app.register(movieRoutes, { prefix: "/movies" });
app.register(actorRoutes, { prefix: "/actors" });

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening at ${address}`);
});