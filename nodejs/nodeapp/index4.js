const express = require("express");
const app = express();
const port = 3300;

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// })

app.get('/products',(req,res)=>{
    res.status(201).json([ {id:1,name:"Apple"}, {id:2,name:"Mobile"} ]);
})

app.get('/ab*cd',(req,res)=>{
    res.send("Hello....");
})

// app.get('/:name',(req,res)=>{
//     res.send(req.params.name);
// })


// app.get('/name/:user',(req,res)=>{
//     res.send(req.params.user);
// });

app.get('/name/:name/age/:age',(req,res)=>{
    res.send(req.params.name+" " + req.params.age);
});

// app.get('/:age/:user',(req,res)=>{
//     res.send(req.params.user +" "+ req.params.age);
// });


// app.get('/name',(req,res)=>{
//     res.send("good morning");
// })


// app.get('/',(req,res)=>{
//     res.send(req.headers.authorization);
// })

// app.get('/',(req,res)=>{
//     res.send(req.query.name+" "+req.query.age);
// })


// **Different types of request **

// app.get('/',(req,res)=>{
//     res.send("Get request");
// })

// app.post('/',(req,res)=>{
//     res.send("Post request");
// })

// app.delete('/',(req,res)=>{
//     res.send("Delete request");
// })

// app.put('/',(req,res)=>{
//     res.send("Put request");
// })

// app.patch('/',(req,res)=>{
//     res.send("Patch request");
// })

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});

