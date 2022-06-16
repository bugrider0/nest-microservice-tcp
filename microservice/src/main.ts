import { microservice } from './microservice';
// import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await microservice();

  // setupSwagger(app);

  await app.listen();
}
bootstrap();
