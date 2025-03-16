import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts');
    console.log(data)
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching posts');
  }
});

export default router;
