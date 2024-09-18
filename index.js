const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.set('trust proxy', true);
app.use("/test", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.send(`Your IP address is ${ip}`);
});
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log("Server is running on port 3008");
});
