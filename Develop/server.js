const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Develop/public"));

require("./routes/apiroute")(app);
require("./routes/htmlRoute")(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
