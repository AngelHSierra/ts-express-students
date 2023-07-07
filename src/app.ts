import * as express from 'express'
// import { userInterface } from './interface/userInterface'
// import * as fs from 'fs';

// const rawData = fs.readFileSync('users.json');
// const jsonData = JSON.parse(rawData.toString());
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log( `Express is listening on port http://localhost${port}`)
    });

app.get('/users', (req, res) => {
    const { eyeColor, hairColor } = req.query;

    const filteredUsers = users.filter(
        user => user.eyeColor === eyeColor && user.hairColor === hairColor
    );
    
    res.json(filteredUsers);
});


