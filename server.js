'use strict';

const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`Develop/public`));

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/workout_db`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

app.use(require("./Develop/routes/api"));
app.use(require("./Develop/routes/html"));

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});