import fastify from "fastify";
import cors from "@fastify/cors";
import { movieRoutes } from "./routes/moviesRoute";
import { categoriesRoute } from "./routes/categoriesRoute";
import { actorRoutes } from "./routes/actorsRoutes";
import { validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { generateFakeData } from "./utils/faker/generateAllData";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import yaml from "js-yaml"
import fs from "fs";
import { OpenAPIV3 } from "openapi-types";

const start = async () => {
  const app = fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();
  app.setValidatorCompiler(validatorCompiler);
  try {
    generateFakeData(3);

    await app.register(cors, { origin: "*" });

    const swaggerDoc = yaml.load(
      fs.readFileSync("./swagger.yaml", "utf8")
    ) as OpenAPIV3.Document;
    await app.register(fastifySwagger, {
      mode: "static",
      specification: { document: swaggerDoc },
    });

    await app.register(fastifySwaggerUi, { routePrefix: "/docs" });

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
    app.log.error("Failed to start server:");
    app.log.error(error)
    process.exit(1);
  }
};

start();
