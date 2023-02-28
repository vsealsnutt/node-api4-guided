const server = require("./api/server.js");

const port = 9000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


//As of Nov. 2022, no more free tier on heroku. Do not have to deploy.