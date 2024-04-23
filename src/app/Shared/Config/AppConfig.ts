import 'dotenv/config';

export const port: number = Number(process.env.PORT) ?? 3000;

export const dbConfig = {
  host: String(process.env.DB_HOST),
  user: String(process.env.DB_USER),
  password: String(process.env.DB_PASS),
  database: String(process.env.DB_NAME),
  port: Number(process.env.DB_PORT),
  dialect: String(process.env.DB_DIALECT),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
