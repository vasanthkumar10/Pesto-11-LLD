const express = require("express");
const app = express();

const { getUserData } = require("./userData");
const { getProductData } = require("./productData");

app.get("/", (req, res) => res.send("home page"));

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const userData = await getUserData(id);
  return res.json({
    msg: "success",
    data: userData,
  });
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const productData = await getProductData(id);
  return res.json({
    msg: "success",
    data: productData,
  });
});

app.listen(3000, () => console.log("server started...."));
