import express from "express";
import colors from "colors";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const PORT = 3030;
let appointments = [];

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post("/submit-order", (req, res) => {
  console.log(req.body);
  appointments.push(req.body);
});

app.get("/admin/appointments", (req, res) => {
  res.send(appointments);
});

app.listen(PORT, () => {
  console.log(PORT, `Server is running at http://localhost:${PORT}`.bgMagenta);
});
