require("dotenv").config();

const fs = require("fs");
const https = require("https");
const cors = require("cors");
const express = require("express");
const { sequelize } = require("./models");
const { user } = require("./models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const app = express();
const PORT = process.env.PORT || 8080;

// sequelize
//   .query("SET FOREIGN_KEY_CHECKS = 0")
//   .then(() => sequelize.sync({ force: true }))
//   .then(() => sequelize.query("SET FOREIGN_KEY_CHECKS = 1"))
//   .then(() => console.log("DB연결 성공"));

sequelize.sync({ force: false }).then(() => console.log("DB연결 성공"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.post("/", async (req, res, next) => {
  const { name, surveyCheck1, surveyCheck2, surveyCheck3, surveyCheck4 } =
    req.body;
  const alredy = await user.findOne({ where: { name } });
  if (!alredy) {
    await user.create({
      name,
      surveyCheck1,
      surveyCheck2,
      surveyCheck3,
      surveyCheck4,
    });
    res.status(201).send("생성됨");
  } else {
    res.status(200).send("이미있는");
  }
});

app.get(
  "/:name/:surveyCheck1/:surveyCheck2/:surveyCheck3/:surveyCheck4",
  async (req, res) => {
    let { name, surveyCheck1, surveyCheck2, surveyCheck3, surveyCheck4 } =
      req.params;

    const findAlready = await user.findOne({
      where: { name },
    });
    surveyCheck1 = findAlready.surveyCheck1;
    surveyCheck2 = findAlready.surveyCheck2;
    surveyCheck3 = findAlready.surveyCheck3;
    surveyCheck4 = findAlready.surveyCheck4;

    const threeMatch = await user.findAll({
      where: {
        name: { [Op.ne]: name },
        [Op.or]: [
          { surveyCheck1, surveyCheck2, surveyCheck3 },
          { surveyCheck2, surveyCheck3, surveyCheck4 },
          { surveyCheck1, surveyCheck2, surveyCheck4 },
          { surveyCheck1, surveyCheck3, surveyCheck4 },
        ],
      },
    });

    return res.status(200).send({ threeMatch, findAlready });
  }
);

if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const key = fs.readFileSync(__dirname + "/key.pem", "utf-8");
  const cert = fs.readFileSync(__dirname + "/cert.pem", "utf-8");
  const credentials = { key, cert };

  https
    .createServer(credentials, app)
    .listen(PORT, () => console.log(`서버 구동(https): PORT번호: ${PORT}`));
} else
  app.listen(PORT, () => console.log(`서버 구동(http): PORT번호: ${PORT}`));
