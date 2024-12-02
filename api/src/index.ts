import express from 'express';
import productRoutes from './routes/products/index';
const port = 3000;
const app = express()
app.get('/', (req, res) => {
    res.send('Hello People!')});
//products endpoints

app.use('/products', productRoutes);
app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      }) ;