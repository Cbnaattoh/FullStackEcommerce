import express, {json, urlencoded} from 'express';
import productRoutes from './routes/products/index';
import authRoutes from './routes/auth/index';
const port = 3000;
const app = express()
app.get('/', (req, res) => {
    res.send('Hello People!')});
//products endpoints
app.use(urlencoded({extended: false}));
app.use(json());

app.use('/products', productRoutes);
app.use('/auth', authRoutes);
app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      }) ;