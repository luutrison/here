import { SETTING } from "../ob/setting.js";
import { CHECK } from "./check.js";
import { CONVERT } from "./data.js";



class METHOD {

    static TO_SESSION() {
        try {
            var session = String.toString(props).split(SETTING.EQUAL_SYMBOL)
            return {
                name: session[SETTING.NUMBER_ZERO],
                data: session[SETTING.NUMBER_ONE]
            }
        } catch (error) {
            console.error(error);
        }
    }
}


class SESSION {



    static GET(name) {
        try {
            var cookie = document.cookie.split(SETTING.SEMICOLON_SYMBOLN);
            var cookies = {}

            if (CHECK.IS_OBJECT(cookie)) {
                cookie.forEach(element => {
                    var item = METHOD.TO_SESSION(element)
                    cookies[item.name] = item
                });
            }
            else {
                var item = cookies.push(METHOD.TO_SESSION(cookies))
                cookies[item.name] = item
            }

            return cookies[name]
        } catch (error) {

        }


    }

    static SET(props) {
        try {
            var iprops = SESSION_PROP.SESSION(props)

            document.cookie = SETTING.COOKIE_APP_NAME + SETTING.EQUAL_SYMBOL
                + iprops.name + SETTING.SEMICOLON_SYMBOL + SETTING.COOKIE_EXPIRES
                + iprops.expires + SETTING.SEMICOLON_SYMBOL + SETTING.COOKIE_PATH
                + iprops.path;
        } catch (error) {
            console.error(error);
        }
    }

    static UPDATE() {

        try {
            var cookie = document.cookie;

            var date =  new Date(Date.now() + CONVERT.HOURS_TO_MINI_SECOND(SETTING.COOKIE_EXPIRES_HOURS_DEFAULT)).toUTCString()
    
           
    
            this.SET({
                name: "name-is",
                data: "data",
                path: "/",
                expires: date
            })
    
            console.log(cookie);
        } catch (error) {
            console.error(error);
        }
      
    }

}

class SESSION_PROP {

    static SESSION(props) {
        return {
            name: props.name,
            data: props.data,
            path: props.path,
            expires: props.expires
        }
    }
}

export { SESSION }