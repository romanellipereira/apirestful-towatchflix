const app = require('./src/app.js');
const port = 8030 ;

app.listen(port, () => {
    console.log(`App rodando em localhost:${port}`);
});