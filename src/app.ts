import express from "express";
import { TikTokShopApi } from "./tiktok-shop-api";
import {
  TIKTOK_AUTH_URL,
  APP_KEY,
  APP_SECRET,
  SHOP_ID,
  ACCESS_TOKEN_URL
} from './config/constant';

const app = express();
const port = 3001;
app.get("/", async (req, res) => {
  const config = {
    host: '123',
    app_key: APP_KEY,
    app_secret: APP_SECRET,
    shop_id: SHOP_ID
  }
  const test = TikTokShopApi(config)
  const t = test.getAuthURL()
  const q = test.order.getOrderDetail('312312')
  res.send(t);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})