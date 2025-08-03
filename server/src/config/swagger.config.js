import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation for your backend service',
      contact: {
        name: 'API Support',
        url: 'http://yourdomain.com/support',
        email: 'support@yourdomain.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Development server',
      },
      {
        url: 'https://api.yourdomain.com/api',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  // Corrected path using absolute path resolution
  apis: [path.join(__dirname, '../docs/*.yaml')],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  // Production protection middleware
  const swaggerHandler = process.env.NODE_ENV === 'production'
    ? [protectSwagger, swaggerUi.serve, swaggerUi.setup(swaggerSpec)]
    : [swaggerUi.serve, swaggerUi.setup(swaggerSpec)];

  app.use('/api-docs', ...swaggerHandler);
  
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`[Swagger] Docs available at http://localhost:${port}/api-docs`);
}

// Basic authentication for production access
function protectSwagger(req, res, next) {
  if (req.headers['swagger-secret'] === process.env.SWAGGER_SECRET) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
}

export { swaggerSpec, swaggerDocs };