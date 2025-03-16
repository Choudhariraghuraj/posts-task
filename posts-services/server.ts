import express from 'express';
import cors from 'cors';
import postsRouter from './routes/posts';

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postsRouter);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
