import { config } from 'dotenv';

config();

const env = {
  PORT: process.env.PORT || 5001,
  DATABASE_URL: process.env.DATABASE_URL || '',
  AI_API_KEY: process.env.AI_API_KEY || '',
  HUGGINGFACE_API_TOKEN: process.env.HUGGINGFACE_API_TOKEN || process.env.HF_TOKEN || '',
  HUGGINGFACE_MODEL: process.env.HUGGINGFACE_MODEL || process.env.HF_MODEL || 'aion-labs/aion-2.0',
  JWT_SECRET: process.env.JWT_SECRET || '',
  NODE_ENV: process.env.NODE_ENV || 'development',
};

export default env;