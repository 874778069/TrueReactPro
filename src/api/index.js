/*
包含n个接口请求函数的模块
每个函数的返回值是promise
 */
import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = '';
//const BASE = ''; //打包
const wangYi = "/163";

export const reqUserLogin = (name,pwd) => ajax(BASE + "/login_pwd",{name,pwd},"POST");
export const reqCodeLogin = (phone,code) => ajax(BASE + "/login_sms",{phone,code},"POST");
export const reqCode = (phone) => ajax(BASE + "/sendcode",{phone},"GET");
export const reqLoginOut = () => ajax(BASE + "/logout");
export const reqUserData = () => ajax(BASE + "/userinfo");

export const reqSearchInit = () => ajax(wangYi + "/xhr/search/init.json");
export const reqSearchArr = (keywordPrefix) => ajax(wangYi + "/xhr/search/searchAutoComplete.json",{keywordPrefix},"POST")
export const reqKeyContent = (keyword) => ajax(wangYi + `/xhr/search/search.json?keyword=${keyword}&sortType=0&descSorted=false&categoryId=0&matchType=0&floorPrice=-1&upperPrice=-1&size=40&itemId=0&stillSearch=false&searchWordSource=7&_stat_search=autoComplete`)


export const reqMsite = () => ajax("/msite");
export const reqCategory = () => ajax("/classify");
export const reqShiWuArr = () => ajax("/shiwu");
export const reqNewData = () => ajax("/shiwu/new");
export const reqDaRen = () => ajax("/shiwu/daren");
export const reqHome = () => ajax("/shiwu/home");
