import { Router } from "express";


const router = Router();
router.get('/',(req, res) => {
    res.send('The available products')  
});

router.get('/:id',(req, res) => {
  console.log(req.params)
  res.send('This product is available')  
});
router.post('/',(req, res) => {
  res.send('New product available')  
});
export default router;