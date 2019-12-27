const Koa = require("koa");
const Router = require("koa-router");
// const config = require('./config')[process.env.NODE_ENV || 'development'];
const Request = require('./request');
const json = require('koa-json')

const app = new Koa();
const router = new Router();

// const log = config.log();
app.use(json());

router.get('/getBanner', async (ctx, next) => {
    const getBannerAPI = Request("JUEJIN", "getBanner", null);
    const result = await getBannerAPI();
    console.log(result.data);
    ctx.body = result.data;
    next();
});

router.get('/getLatestXiaoce', async (ctx, next) => {
    const getLatestXiaoceAPI = Request("JUEJIN", "getLatestXiaoce", null);
    const result = await getLatestXiaoceAPI();
    console.log(result.data);
    ctx.body = result.data;
    next();
});

//此方法先暂时设置成get，实际的值是从UI界面传过来的，现在仅仅是测试api
router.get('/getRecommendedArticals', async (ctx, next) => {
    const getRecommendedArticalsAPI = Request("JUEJIN", "getRecommendedArticals", null);
    const result = await getRecommendedArticalsAPI({
        method: "post",
        requestData: {"category":"frontend","order":"heat","offset":0,"limit":30}
    });
    console.log(result.data.data.length);
    ctx.body = result.data;
    next();
});

//此方法先暂时设置成get，实际的值是从UI界面传过来的，现在仅仅是测试api
router.get('/getHighscoreGithub', async (ctx, next) => {
    const getHighscoreGithubAPI = Request("JUEJIN", "getHighscoreGithub", null);
    const result = await getHighscoreGithubAPI({
        method: "post",
        requestData: {"category":"trending","period":"day","lang":"css","offset":0,"limit":30}
    });
    console.log(result.data.data instanceof Array);
    console.log(result.data.data.length);
    ctx.body = result.data;
    next();
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
    console.log("server started at port 3000!");
})

