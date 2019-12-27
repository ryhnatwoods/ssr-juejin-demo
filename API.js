const BASE_EXT_URL = "https://extension-ms.juejin.im";
const BASE_XIAOCE_URL = "https://xiaoce-timeline-api-ms.juejin.im"

const GET_BANNER = `${BASE_EXT_URL}/extension/banner`;

const GET_LASTEST_XIAOCE = `${BASE_XIAOCE_URL}/v1/getNewestXiaoce`;

const GET_RECOMMENDED_ARTICLES = `${BASE_EXT_URL}/resources/gold`;

const GET_HIGHSCORE_GITHUB = `${BASE_EXT_URL}/resources/github`;

module.exports = {
    GET_BANNER,
    GET_LASTEST_XIAOCE,
    GET_RECOMMENDED_ARTICLES,
    GET_HIGHSCORE_GITHUB
}
