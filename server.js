const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const htmlRoutes = require(`./routes/htmlRoutes.js`);
const apiRoutes = require(`./routes/apiRoutes.js`);

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

htmlRoutes(app);
apiRoutes(app);

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/workout`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));