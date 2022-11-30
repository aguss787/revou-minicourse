import bodyParser from 'body-parser';
import * as express from 'express';
import { Sequelize } from 'sequelize-typescript';
import { User } from './models/User';

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "revou.db",
    models: [User],
});

User.sync({alter: true});

const app = express.default();

app.use(
    bodyParser.urlencoded({ extended: true })
);

app.post('/', async (req, resp) => {
    const user = User.build({
        name: req.body["name"],
        age: req.body["age"],
    });

    user.save();

    resp.send(JSON.stringify(user));
});

app.get('/', async (req, resp) => {
    const users = await User.findAll();
    resp.send(JSON.stringify(users));
});

app.listen(8000, () => {
    console.log('server listening in port 8000');
});