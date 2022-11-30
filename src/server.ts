import * as express from 'express';

const app = express.default();

app.get('/', async (req, resp) => {
    resp.send("Hello World!");
});

app.listen(8000, () => {
    console.log('server listening in port 8000');
})