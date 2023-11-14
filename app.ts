import express from 'express';
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send(`Hello World!`);
});

app.get('/:id', (req, res)=>{
    console.log(`Query Parameter: ${JSON.stringify(req.query)}`);
    console.log(`Headers ${JSON.stringify(req.headers)}`);
    console.log(`Method ${JSON.stringify(req.method)}`);

    res.send(`Hello ${req.params.id}`)
})

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`);
})