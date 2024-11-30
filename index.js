const Koa = require("koa");
const app = new Koa();

// Ana sayfa (index)
app.use(async (ctx) => {
  const url = ctx.request.url;

  if (url === "/") {
    ctx.response.status = 200;
    ctx.response.body = "<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>";
  } else if (url === "/hakkimda") {
    ctx.response.status = 200;
    ctx.response.body = "<h1>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h1>";
  } else if (url === "/iletisim") {
    ctx.response.status = 200;
    ctx.response.body = "<h1>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h1>";
  } else {
    ctx.response.status = 404;
    ctx.response.body = "<h1>404 SAYFA BULUNAMADI</h1>";
  }
});

// Sunucuyu başlat
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
