import express from "express";

const app = express();

// enable JSON body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

export default app;