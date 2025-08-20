// config/database.ts
import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  // SQLite (dev fallback)
  if (client === 'sqlite') {
    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        },
        useNullAsDefault: true,
      },
    };
  }

  // Postgres (Render)
  return {
    connection: {
      client: 'postgres',
      connection: env('DATABASE_URL'),
      pool: { min: 0, max: 10 },
      // Force SSL for Render-managed Postgres
      ssl: { rejectUnauthorized: false },
    },
  };
};
