const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static('./static'));
// app.get("/", (_, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.listen(PORT, () => {
  console.log(`Мой текст и порт: ${PORT}!`);
});
