import express from 'express'
const app=express();
const port = 3000;
app.use(express.json()) //means data will come in json format

let teaData=[];
let nextId=1;

//Add the tea
//to take data from frontend we use post
app.post('/teas',(req,res)=>{
    //means from json data we extract name and price
    const {name,price}=req.body //if everything comes in body
    const newTea={id:nextId++,name,price}
    teaData.push(newTea);
    res.status(201).send(newTea);
})

//Get all tea
app.get('/teas',(req,res)=>{
    res.status(200).send(teaData);
})

//get tea by id
app.get('/teas/:id',(req,res)=>{
    const tea=teaData.find(t=>t.id === parseInt(req.params.id)) //if anything comes in url we extract from params
    if(!tea){
        return res.status(404).send('Tea not found')
    }
    res.status(200).send(tea);
})

//update
app.put('/teas/:id',(req,res)=>{
    const tea = teaData.find((t) => t.id === parseInt(req.params.id));

    if (!tea) {
      return res.status(404).send("Tea not found");
    }
    const {name,price}=req.body
    tea.name=name
    tea.price=price
    res.send(200).send(tea);
})

//delete tea

app.delete('/teas/:id',(req,res)=>{
    const index=teaData.findIndex(t => t.id === parseInt(req.params.id))
    if(index==-1){
        return res.status(404).send("Tea not found");
    }
    teaData.splice(index,1);
    return res.status(204).send("Deleted");
})

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}...`);
});