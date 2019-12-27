const API = require("../../API");

const defaultParams = {
    method: "get",
    requestData: null
};

const commonProcessFlow = async($axios, url, method, requestData) => {
    let result = null;
    if(method === "get"){
        if(requestData) {
            result = await $axios[method](url, {
                params: requestData
            });
        }else{
            result = await $axios[method](url);
        }
    }else if(method === "post"){
        result = await $axios[method](url, requestData);
    }
    return result;
}

class JuejinService {

    async getBanner($axios, params=defaultParams, logger) {
        const method = params.method.toLocaleLowerCase();
        const requestData = params.requestData;
        return commonProcessFlow($axios, API.GET_BANNER, method, requestData);
    }

    async getLatestXiaoce($axios, params=defaultParams, logger) {
        const method = params.method.toLocaleLowerCase();
        const requestData = params.requestData;
        return commonProcessFlow($axios, API.GET_LASTEST_XIAOCE, method, requestData);
    }

    async getRecommendedArticals($axios, params=defaultParams, logger) {
        const method = params.method.toLocaleLowerCase();
        const requestData = params.requestData;
        return commonProcessFlow($axios, API.GET_RECOMMENDED_ARTICLES, method, requestData);
    }

    async getHighscoreGithub($axios, params=defaultParams, logger) {
        const method = params.method.toLocaleLowerCase();
        const requestData = params.requestData;
        return commonProcessFlow($axios, API.GET_HIGHSCORE_GITHUB, method, requestData);
    }
}

const juejinService = new JuejinService();

module.exports = juejinService;
