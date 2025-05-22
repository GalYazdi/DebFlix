import fastify from "fastify";
import movieRoutes from "./routes/movieRoutes";


const app = fastify({ logger: true });
app.register(movieRoutes, { prefix: "/movies" });

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening at ${address}`);
});

