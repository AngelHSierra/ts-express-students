const express = require('express');

const app = express();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {

    res.send({
        message: "Hello Romeo !"
    });
});