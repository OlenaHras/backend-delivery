const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());

app.get("/shops", (req, res) => res.type("json").send(json));
app.put("/order", (req, res) => {
  return res.status(201).type("json").send(req.body);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const json = `
[
 {
  "id": "dfghfgh",
  "name": "Crispy Chicken",
  "menu": [
   {
    "id": 1,
    "title": "Champions Feast",
    "img": "https://imgur.com/1YPEDDr.jpg",
    "price": "23"
   },
   {
    "id": 2,
    "title": "Variety Duo Bucket",
    "img": "https://imgur.com/VSj1v4s.jpg",
    "price": "12"
   },
   {
    "id": 3,
    "title": "Coleslaw",
    "img": "https://imgur.com/BcgDK7H.jpg",
    "price": "6"
   },
   {
    "id": 4,
    "title": "Classic Burger Meal",
    "img": "https://imgur.com/KksHCsj.jpg",
    "price": "7"
   },
   {
    "id": 5,
    "title": "Veggie Twister",
    "img": "https://imgur.com/I7GibOh.jpg",
    "price": "5"
   },
   {
    "id": 6,
    "title": "Mega Family Feast",
    "img": "https://imgur.com/3mSNycM.jpg",
    "price": "29"
   },
   {
    "id": 7,
    "title": "Hot Wings Lrg. Bucket",
    "img": "https://imgur.com/qRIue45.jpg",
    "price": "18"
   }
  ]
 },
 {
  "id": "yukyuuyk",
  "name": "McDack",
  "menu": [
   {
    "id": 8,
    "title": "Big Mac",
    "img": "https://imgur.com/92GpRll.jpg",
    "price": "4"
   },
   {
    "id": 9,
    "title": "Double Quarter Pounder",
    "img": "https://imgur.com/cdoHXWy.jpg",
    "price": "10"
   },
   {
    "id": 11,
    "title": "10 Piece Chicken McNuggets",
    "img": "https://imgur.com/rqJ2mMf.jpg",
    "price": "8"
   },
   {
    "id": 12,
    "title": "Sausage Burrito",
    "img": "https://imgur.com/my88gQp.jpg",
    "price": "5"
   },
   {
    "id": 121,
    "title": "Flurry with OREO",
    "img": "https://i.imgur.com/q4CWj3W.jpg",
    "price": "8"
   },
   {
    "id": 13,
    "title": "Spicy McCrispy",
    "img": "https://imgur.com/3bc8UwO.jpg",
    "price": "4"
   }
  ]
 },
 {
  "id": "dffgjfgj",
  "name": "Big Burger",
  "menu": [
   {
    "id": 14,
    "title": "SIGNATURE STEAKHOUSE WHOPPER",
    "img": "https://imgur.com/iX7jYYQ.jpg",
    "price": "8"
   },
   {
    "id": 15,
    "title": "TRIPLE WHOPPER JR WITH CHEESE",
    "img": "https://imgur.com/jBLzk7j.jpg",
    "price": "10"
   },
   {
    "id": 16,
    "title": "FISH'N CRISP",
    "img": "https://imgur.com/Y3xDLQb.jpg",
    "price": "7"
   },
   {
    "id": 17,
    "title": "RYE CHEESY CARAMELIZED ONION",
    "img": "https://imgur.com/UdQEwjd.jpg",
    "price": "5"
   },
   {
    "id": 18,
    "title": "SALAD",
    "img": "https://imgur.com/nINrdyc.jpg",
    "price": "5"
   },
   {
    "id": 19,
    "title": "FRENCH FRIES",
    "img": "https://imgur.com/LUv9MwF.jpg",
    "price": "4"
   },
   {
    "id": 20,
    "title": "ONION RINGS",
    "img": "https://imgur.com/KegrSOn.jpg",
    "price": "7"
   }
  ]
 }
]
`;
