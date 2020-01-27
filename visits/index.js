const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379
});
client.set("visits", 0);

app.get("/", (req, res) => {
  client.get("visits", (er, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(9876, () => {
  console.log("Listening on port 9876");
});
