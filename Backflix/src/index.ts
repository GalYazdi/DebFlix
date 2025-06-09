import fastify from "fastify";
import cors from "@fastify/cors";
import { movieRoutes } from "./routes/moviesRoute";
import { categoriesRoute } from "./routes/categoriesRoute";
import { actorRoutes } from "./routes/actorsRoutes";
import { generateFakeMovies } from "./utils/faker/generateFakeMovies";
import { actors, categories, movies } from "./services/mockDB";
import { generateFakeActors } from "./utils/faker/generateFakeActors";
import { generateFakeCategories } from "./utils/faker/generateFakeCategories";
import { validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { generateFakeData } from "./utils/faker/generateAllData";

const start = async () => {
  const app = fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();
  app.setValidatorCompiler(validatorCompiler);
  try {
    generateFakeData(3);

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
  } catch (error) {
    app.log.error("Failed to start server:", error);
    process.exit(1);
  }
};

start();
