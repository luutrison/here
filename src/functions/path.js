import { SETTING, SETTING_PATH } from "../ob/setting.js";

class PATH {

    static TO_PAGES(url) {

        return SETTING_PATH.TO_PAGE + url
    }

    static GET(url){
        return window.location.origin + url;
    }
}

export {PATH}