const express = require("express");
const app = express();
const port = 3300;


app.use(express.json());

let products = [];
app.post('/', (req, res) => {
    const { id,product_name,price } = req.body;
    const found = products.find(product => product.id === id);
    if (found) {
        return res.status(400).send("Product already exists");
    }
    else{
        products.push(
            {
                id,product_name,price
            }
        );
        res.status(201).send({msg:"Product added"});
    }
   
});

app.get('/',(req,res)=>{
    
    res.json(products);
})

app.delete("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    products = products.filter((value) => value.id !== id);
    res.json("Product deleted");
  } catch (err) {
    res.json({ message: "Something went wrong" });
  }
});


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});