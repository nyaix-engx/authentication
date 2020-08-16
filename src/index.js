const app = require("./app");
const port = process.env.PORT;
require("dotenv").config();
console.log(process.env.MONGODB_URL);
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
