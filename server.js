import express from 'express'

const app = express();
const port = 8080;

app.get('/', (req, res)=> {
    res.send(`That's a great server!`);
})

app.get('/about', (req, res)=> {
    res.send(`This page is about us!`);
})

app.get('/section', (req, res)=> {
    res.send(`This is a section page!`);
})

app.get('/pages', (req, res)=> {
    res.send(`This is a page!`);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})