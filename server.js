const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;


/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());


/* =========================
   HOME API
========================= */

app.get("/", function (req, res) {

  res.json({
    status: "success",
    message: "NovaMine API is running"
  });

});


/* =========================
   HEALTH CHECK
========================= */

app.get("/health", function (req, res) {

  res.json({
    status: "healthy",
    service: "novamine-api"
  });

});


/* =========================
   START SERVER
========================= */

app.listen(PORT, function () {

  console.log(
    "NovaMine API running on port " + PORT
  );

});
