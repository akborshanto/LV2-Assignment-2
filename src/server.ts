import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function server() {
  try {
    await mongoose.connect(config.DATABASE_URI);
    console.log('Connected to MongoDB');

    app.listen(config.PORT, () => {
 
      console.log(`Server running on http://localhost:${config.PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

server();
