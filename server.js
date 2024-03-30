const path = require('path');
const { createServer } = require('http-server');

const port = process.env.PORT || 8080;
const server = createServer({
    root: path.join(__dirname),
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
