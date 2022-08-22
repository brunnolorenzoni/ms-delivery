import 'dotenv/config';
import app from './app'

const API_PORT = process.env.PORT;

app.listen(API_PORT, () => {
  console.log(`App is running on port: ${API_PORT}!`);
  console.log(`http://localhost:${API_PORT}/`);
});