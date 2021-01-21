import cookie from "js-cookie"

export const setToken = (token)=>{
    cookie.set("token",token)
}

export const getToken = ()=>{
    if(cookie.get("token")){
        return true;
    }
    return false;
}
export const removeToken= () => {
    cookie.remove("token")
}
