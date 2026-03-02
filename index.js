//Express with Node.js

import express from "express";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
    res.render(`index.ejs`);
});

app.get(`/about`, (req, res) => {
    res.render(`about.ejs`);
});

app.get(`/projects`, (req, res) => {
    res.render(`projects.ejs`);
});

app.get(`/contact`, (req, res) => {
    res.render(`contact.ejs`);
});

app.post(`/contact`, (req, res) => {
    console.log(req.body);
    res.redirect(`/submission`);
});

app.get(`/submission`, (req, res) => {
    res.render(`submission.ejs`);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

