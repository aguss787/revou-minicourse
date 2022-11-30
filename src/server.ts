import * as express from 'express';

const app = express.default();

app.post('/', async (req, resp) => {
    resp.send("Hello World from POST!");
});

app.get('/', async (req, resp) => {
    resp.send("Hello World from GET!");
});

app.listen(8000, () => {
    console.log('server listening in port 8000');
})