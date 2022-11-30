import bodyParser from 'body-parser';
import * as express from 'express';

const app = express.default();

app.use(
    bodyParser.urlencoded({ extended: true })
);

app.post('/', async (req, resp) => {
    resp.send("Hello " + req.body["name"] + " (" + req.body["age"] + ")");
});

app.get('/', async (req, resp) => {
    resp.send("Hello World from GET!");
});

app.listen(8000, () => {
    console.log('server listening in port 8000');
});