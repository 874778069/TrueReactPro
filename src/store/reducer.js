import {combineReducers} from "redux";
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
    GET_LOGINCODEFAIL,
    GET_LOGINCODE,
    GET_INITUSER,
    GET_LOGINOUT,
    GET_HOTINIT,
    GET_SEARCHARR,
    GET_KEYCONTENT,
    RESET
} from "./action-types"


function msiteData(state={},action) {
    switch (action.type) {
        case GET_MSITEDATA:
            return action.data;
        default:
            return state
    }
}

function categoryData(state=[],action) {
    switch (action.type) {
        case GET_CATEGORY:
            return action.data;
        default:
            return state
    }
}

function shiWuArr(state=[],action) {
    switch (action.type) {
        case GET_SHIWU:
            return action.data;
        default :
            return state
    }
}

function daRenArr(state=[],action) {
    switch (action.type) {
        case GET_DARENDATE:
            return action.data;
        default :
            return state
    }
}

function newArr(state=[],action) {
    switch (action.type) {
        case GEI_NEWDATE:
            return action.data;
        default :
            return state
    }
}

function homeArr(state=[],action) {
    switch (action.type) {
        case GET_HOMEDATE:
            return action.data;
        default :
            return state
    }
}

function user(state={},action) {
    switch (action.type) {
        case GET_USERLOGIN:
            return action.data;
        case ERRMSG:
            return {msg:action.data};
        case GET_LOGINCODE :
            return action.data;
        case GET_LOGINCODEFAIL:
            return{cFMsg:action.data};
        case GET_INITUSER:
            return action.data;
        case  GET_LOGINOUT :
            return {};
        default :
            return state
    }
}

function code(state={},action) {
    switch (action.type) {
        case GET_CODE:
            return {sMsg:action.data};
        case GET_CODEFail:
            return {fMsg:action.data};
        case GET_LOGINOUT:
            return {};
        default :
            return state
    }
}

function initArr(state=[],action) {
    switch (action.type) {
        case GET_HOTINIT:
            return action.data;
        default :
            return state
    }
}

function searchArr(state=[],action) {
    switch (action.type) {
        case GET_SEARCHARR:
            return action.data;
        case RESET:
            return [];
        default :
            return state
    }
}

function keyC(state=[],action) {
    switch (action.type) {
        case GET_KEYCONTENT:
            return action.data;
        default :
            return state
    }
}

export default combineReducers({
    msiteData,
    categoryData,
    shiWuArr,
    daRenArr,
    newArr,
    homeArr,
    user,
    code,
    initArr,
    searchArr,
    keyC
})
