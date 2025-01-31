import express from "express";
import colors from "colors";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const PORT = 3030;
let appointments = [];
const timeStamp = new Date();
const formatDate = timeStamp.toLocaleDateString();



app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post("/submit-order", (req, res) => {
  appointments.push(req.body);
  res.send(
    `<h1>Thank you for scheduling an appointment ${req.body.fname} </h1>
    <br>
    <h3> We will see you on ${req.body.date} at ${req.body.appTime} </h3>
    `
  );
});

app.get("/admin/appointments", (req, res) => {

  let applyToPage = "";
  for(let items of appointments)
  {
    applyToPage += `<p>Name: ${items.fname} ${items.lname} <br> Date: ${items.date} <br> Time Of submission:${formatDate}</p>`;
  }

  res.send(applyToPage);
});

app.listen(PORT, () => {
  console.log(PORT, `Server is running at http://localhost:${PORT}`.bgMagenta);
});


