import { microservice } from './microservice';

async function bootstrap() {
  const app = await microservice();
  await app.listen();
}
bootstrap();
