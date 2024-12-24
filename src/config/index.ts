import dotenv from 'dotenv';
dotenv.config();

const config = {
  DATABASE_URI: process.env.DATABASE_URI || '',
  PORT: process.env.PORT || '5000',
};

export default config;
