import {
    reqMsite,
    reqCategory,
    reqShiWuArr,
    reqDaRen,
    reqNewData,
    reqHome,
    reqUserLogin,
    reqCode,
    reqCodeLogin,
    reqUserData,
    reqLoginOut,
    reqSearchInit,
    reqSearchArr,
    reqKeyContent
} from "./../api/index.js"

import {
    GET_MSITEDATA,
    GET_CATEGORY,
    GET_SHIWU,
    GET_DARENDATE,
    GEI_NEWDATE,
    GET_HOMEDATE,
    GET_USERLOGIN,
    ERRMSG,
    GET_CODE,
    GET_CODEFail,
    GET_LOGINCODE,
    GET_LOGINCODEFAIL,
    GET_INITUSER,
    GET_LOGINOUT,
    GET_HOTINIT,
    GET_SEARCHARR,
    GET_KEYCONTENT,
    RESET
} from "./action-types";

export const getMsiteData = (obj) => ({type:GET_MSITEDATA,data:obj});
export const getCategoryData = (arr) => ({type:GET_CATEGORY,data:arr});
export const getShiWu = (arr) => ({type:GET_SHIWU,data:arr});
export const getDarenD = (arr) => ({type:GET_DARENDATE,data:arr});
export const getNewD = (arr) => ({type:GEI_NEWDATE,data:arr});
export const getHomeD = (arr) => ({type:GET_HOMEDATE,data:arr});
export const getLogin = (obj) => ({type:GET_USERLOGIN,data:obj});
export const getErr = (str) => ({type:ERRMSG,data:str});
export const getCode = (str) => ({type:GET_CODE,data:str});
export const getCodeFail = (str) => ({type:GET_CODEFail,data:str});
export const getCodeLogin = (obj) => ({type:GET_LOGINCODE,data:obj});
export const getCodeLoginFail = (obj) => ({type:GET_LOGINCODEFAIL,data:obj});
export const getInitUser = (obj) => ({type:GET_INITUSER,data:obj});
export const getLoginOut = (num) => ({type:GET_LOGINOUT,data:num});
export const getInitHot = (arr) => ({type:GET_HOTINIT,data:arr});
export const getSearchArr = (arr) => ({type:GET_SEARCHARR,data:arr});
export const getKeyContent = (arr) => ({type:GET_KEYCONTENT,data:arr});
export const getReset = () => ({type:RESET});



export function reqMsiteD(cb) {
    return async dispatch => {
        const result = await reqMsite();
        if(result.code==0){
            dispatch(getMsiteData(result.data));
            cb && cb()
        }
    }
}

export function reqCategoryData() {
    return async dispatch => {
        const result = await reqCategory();
        if(result.code == 0){
            dispatch(getCategoryData(result.data))
        }
    }
}

export function reqShiWu() {
    return async dispatch => {
        const result = await reqShiWuArr();
        if (result.code == 0){
            dispatch(getShiWu(result.data))
        }
    }
}

export function reqDaRenD() {
    return async dispatch => {
        const result = await reqDaRen();
        if (result.code == 0){
            dispatch(getDarenD(result.data))
        }
    }
}

export function reqNewD() {
    return async dispatch => {
        const result = await reqNewData();
        if (result.code == 0){
            dispatch(getNewD(result.data))
        }
    }
}

export function reqHomeArr() {
    return async dispatch => {
        const result = await reqHome();
        if (result.code == 0){
            dispatch(getHomeD(result.data))
        }
    }
}

export function reqLogin(username, pwd) {

    return async dispatch => {
        const result = await reqUserLogin(username,pwd);
        if (result.code == 0){
            dispatch(getLogin(result.data))
        }else {
            dispatch(getErr(result.msg))
        }
    }
}

export function reqC(phone) {
    return async dispatch => {
        const result = await reqCode(phone);
        if (result.code == 0){
            dispatch(getCode("发送验证码成功"))
        }else {
            dispatch(getCodeFail(result.msg))
        }
    }
}

export function reqCL(phone, code) {
    return async dispatch => {
        const result = await reqCodeLogin(phone,code)
        if(result.code == 0){
            dispatch(getCodeLogin(result.data))
        }else {
            dispatch(getCodeLoginFail(result.msg))
        }
    }
}

export function reqIU() {
    return async dispatch => {
        const result = await reqUserData();
        if(result.code == 0){
            dispatch(getInitUser(result.data))
        }
    }
}

export function reqLOUT() {
    return async dispatch => {
        const result = await reqLoginOut();
        if(result.code == 0){
            dispatch(getLoginOut(result.code))
        }
    }
}

export function reqInitHot() {
    return async dispatch => {
        const result = await reqSearchInit();
        if(result.code == 200){
            dispatch(getInitHot(result.data.hotKeywordVOList))
        }
    }
}

export function reqSA(keyword) {
    return async dispatch => {
        const result = await reqSearchArr(keyword);
        if(result.code == 200){
            dispatch(getSearchArr(result.data))
        }
    }
}

export function reqKeyC(keyword) {
    return async dispatch => {
        const result = await reqKeyContent(keyword);
        if(result.code == 200){
            dispatch(getKeyContent(result.data.directlyList))
        }
    }
}
