import express from 'express';
import injectRoutes from './routes/index';

const app = express();

app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: true }));

injectRoutes(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
