const axios = require("axios");
const router = require("express").Router();

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
router.get("/articles", (req, res) => {
  axios
  .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey, { params: req.query })
  .then(({ data: { response } }) => res.json(response))
  .catch(err => res.status(422).json(err));

 
});
//still need to add dates
module.exports = router;
