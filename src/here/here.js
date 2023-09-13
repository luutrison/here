
const SETTING = {
    NORMAL: {
        NUMBER_ZERO: 0,
        NUMBER_ONE: 1,
        NUMBER_TWO: 2,
        NUMBER_THREE: 3,
        NUMBER_FOUR: 4,
        NUMBER_FIVE: 5,
        SEMICOLON_SYMBOL: ";",
        DOT_SYMBOL: ".",
        RIGHT_SLASH_SYMBOL: "/",
        LEFT_SLASH_SYMBOL: "\\",
        EQUAL_SYMBOL: "=",
        LEFT_BRACKET_SYMBOL: "(",
        RIGHT_BRACKET_SYMBOL: ")",
        COMMA_SYMBOL: ",",
        COOKIE_EXPIRES: "expires=",
        COOKIE_PATH: "path=",
        STRING_EMPRY: "",
        NHAY_SYMBOL: "\"",
        NHAY_CHAR_SYMBOL: "`",
        NHAY_SYMBOL_SPECIAL: "\\\"",
        BREAK_LINE_SYMBOL: "\n",
        SPACE: " "
    },
    SPLIT: {
        RENDER: "RENDER",
        VIEW: "VIEW",
        FROM: "FROM",
        RUNABLE: "_____IS_____RUNABLE_____OK_____"
    },
    THIS: {
        CONTAINER: $("#container")
    },
    PATH: {
        TO_PAGE: "/pages/"
    },
    TAG: {
        SCOPE_I_NAME: "scopei",
        SCOPE_II_NAME: "scopeii",
        LIB_I_NAME: "libi",
        LIB_II_NAME: "libii",

        HEAD_NAME: "head",
        SCRIPT_NAME: "script",
        BODY_NAME: "body",
        STYLE_NAME: "style",
        LINK_NAME: "link",
    },
    COOKIE: {
        COOKIE_APP_NAME: "_CA_",
        COOKIE_EXPIRES_HOURS_DEFAULT: 5,
    },
    ATTRIBUTE: {
        SRC_NAME: "src",
        HREF_NAME: "href",
        NAME_NAME: "name",
        NAME_REL: "rel"
    },
    ATTRIBUTE_VALUE: {
        REL_STYLESHEET: "stylesheet",
    },
    EVENT: {
        ONLOAD: "onload"
    },
    ROUTE: {
        DEFAULT_ROUTE_PATH: "./pages/route.json"
    },
    MESSAGE: {
        PATH_INVALID: "PATH of file is invalid (Path must start with ./ or /)",
        INVALID_DATA: "DATA is invalid !",
    },
    PAGE: {
        DEFAULT_PAGE_LIB_CSS: () => [
            {
                load: true,
                src: "./here/css",
                name: ""
            },

            {
                load: true,
                src: "./designs/fonts/cuprum/cuprum.css",
                name: ""
            }
        ],

        DEFAULT_PAGE_LIB_SCRIPT: () => [
            {
                load: true,
                src: "./libs/jquery/jquery.min.js"
            },
            {
                load: true,
                src: "./libs/axios/axios.min.js"
            },
            {
                load: true,
                src: "./here/js"
            }
        ],

        INCLUDE: ["components", "designs", "extends", "functions", "here", "libs", "ob", "pages"]

    },
    LIB: {

    }
}



var HERE = (props) => {

    var THIS = {}

    THIS.EX = {

        ERROR: (err) => {
            console.error(err);
        },
        PATH: (path) => {
            try {
                var origin = document.location.origin;
                var pathArr = [...path];

                var snum = THIS.SETTING.NORMAL
                if (String.toString(path).search(origin) < 0) {

                    if (pathArr[snum.NUMBER_ZERO] == snum.DOT_SYMBOL) {
                        pathArr = pathArr.slice(snum.NUMBER_ONE, pathArr.length)
                    }
                    if (pathArr[snum.NUMBER_ZERO] != snum.RIGHT_SLASH_SYMBOL) {
                        pathArr = snum.RIGHT_SLASH_SYMBOL + pathArr.join(SETTING.NORMAL.STRING_EMPRY)
                    }

                    path = origin + pathArr.join(THIS.SETTING.NORMAL.STRING_EMPRY)
                }
                return path;
            } catch (error) {
                THIS.EX.ERROR(err);
            }
        },

        ARRAY_TO_STRING: (arr) => {
            try {
                if (!THIS.CHECK.IS_EMPRY(arr)) {
                    var str = THIS.SETTING.NORMAL.STRING_EMPRY;
                    arr.forEach(element => {
                        str += element;
                    });
                    return str
                }
                else {
                    THIS.EX.ERROR(error)
                    return SETTING.NORMAL.STRING_EMPRY
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        ARRAY_LENGTH: (arr) => {
            try {
                if (!THIS.CHECK.IS_EMPRY(arr)) {
                    return arr.length - SETTING.NORMAL.NUMBER_ONE
                }
                else {
                    THIS.EX.ERROR(SETTING.MESSAGE.INVALID_DATA)
                    return SETTING.NORMAL.NUMBER_ZERO
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }

    }


    THIS.THIS = {
        GET: ({ path }) => {
            try {
                return new Promise((resolve, reject) => {
                    console.log(THIS.EX.PATH(path));
                    fetch(THIS.EX.PATH(path)).then((response) => {
                        const res = THIS.PROPS.RESPONSE({ url: response.url, response: response })
                        resolve(res)
                    }).catch(err => reject(err))

                });


            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        GET_JSON: ({ path }) => {
            try {
                return new Promise((resolve, reject) => {
                    THIS.THIS.GET({ path: path }).then(res => {
                        const iResponse = THIS.PROPS.RESPONSE(res)
                        iResponse.response.json().then(data => {
                            const iData = THIS.PROPS.RESPONSE({ url: iResponse.url, response: data })
                            resolve(iData)
                            console.log(iData);
                        })

                    }).catch(err => reject(err))

                });
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        GET_TEXT: ({ path }) => {
            try {
                return new Promise((resolve, reject) => {
                    THIS.THIS.GET({ path: path }).then(res => {
                        const iResponse = THIS.PROPS.RESPONSE(res)
                        iResponse.response.text().then(data => {
                            const iData = THIS.PROPS.RESPONSE({ url: iResponse.url, response: data })
                            resolve(iData)
                            console.log(iData);
                        })
                    }).catch(err => reject(err))

                });
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        }

    }

    THIS.CONVERT = {

        EMPTY_ARRAY: (arr) => {
            try {
                return arr = []
            } catch (error) {
                THIS.EX.ERROR(error);
            }
        },
        TO_STRING: (props) => {
            try {
                const iProps = THIS.PROPS.TO_STRING_PROPS(props)
                if (iProps.specialSymbol) {
                    return THIS.SETTING.NORMAL.NHAY_CHAR_SYMBOL + iProps.specialSymbol + iProps.content + iProps.specialSymbol + SETTING.NORMAL.NHAY_CHAR_SYMBOL;

                }
                else {
                    return THIS.SETTING.NORMAL.NHAY_CHAR_SYMBOL + iProps.content + SETTING.NORMAL.NHAY_CHAR_SYMBOL;

                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },
        TO_STRING_NO_BREAK: (props) => {
            try {
                return props.replaceAll(THIS.SETTING.NORMAL.BREAK_LINE_SYMBOL, THIS.SETTING.NORMAL.STRING_EMPRY);
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        TO_STRING_WITH_NHAY_SPECIAL: (props) => {
            try {
                return props.replaceAll(THIS.SETTING.NORMAL.NHAY_SYMBOL, THIS.SETTING.NORMAL.NHAY_SYMBOL_SPECIAL);
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        }

        ,
        TO_SINGLE_LINE: (props) => {
            try {
                const arr = [...String.toString(props)]
                var content = props
                var maxSpace = 0;
                var maxNow = 0;
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element == THIS.SETTING.NORMAL.SPACE) {
                        if (index != THIS.EX.ARRAY_LENGTH(arr) && arr[index + THIS.SETTING.NORMAL.NUMBER_ONE]) {
                            maxNow += 1;
                            if (maxNow > maxSpace) {
                                maxSpace = maxNow
                            }
                        }
                        else {
                            maxNow = 0;
                        }
                    }
                }

                for (let index = maxSpace; index > THIS.SETTING.NORMAL.NUMBER_ONE; index--) {
                    var spaces = THIS.SETTING.NORMAL.STRING_EMPRY;
                    for (let i = 0; i < index; i++) {
                        spaces += THIS.SETTING.NORMAL.SPACE
                    }
                    content = content.replaceAll(spaces, THIS.SETTING.NORMAL.STRING_EMPRY)
                }
                return content


            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        TO_RUNABLE_JAVASCRIPT: (props) => {


            try {
                const num_zero = THIS.SETTING.NORMAL.NUMBER_ZERO
                const num_one = THIS.SETTING.NORMAL.NUMBER_ONE
                const stringContent = THIS.CONVERT.TO_STRING({ specialSymbol: THIS.SETTING.SPLIT.RUNABLE, content: props })
                var split_one = split_one = stringContent.split(THIS.SETTING.SPLIT.RENDER)
                var split_three = ""
                var split_four = ""
                var split_five = ""
                if (split_one.length) {
                    split_three = split_one[num_one].split(THIS.SETTING.SPLIT.FROM)

                }
                if (split_three.length) {
                    split_four = split_three[num_one].split(THIS.SETTING.NORMAL.LEFT_BRACKET_SYMBOL)

                }
                if (split_four.length) {
                    split_five = split_four[num_one].split(THIS.SETTING.NORMAL.RIGHT_BRACKET_SYMBOL)
                }

                if (split_five.length) {
                    const content = split_five[num_zero]

                    const other = stringContent.split(THIS.SETTING.SPLIT.RENDER)[num_one].split(THIS.SETTING.NORMAL.RIGHT_BRACKET_SYMBOL)

                    var path = "";

                    for (let index = 1; index < other.length; index++) {
                        if (index != THIS.EX.ARRAY_LENGTH(other)) {
                            path += other[index] + THIS.SETTING.NORMAL.RIGHT_BRACKET_SYMBOL
                        }
                        else {
                            path += other[index]
                        }

                    }

                    const contentln = THIS.CONVERT.TO_STRING({content: content})

                    const runable = split_one[num_zero] + THIS.SETTING.SPLIT.RENDER +
                        split_three[num_zero] + THIS.SETTING.SPLIT.FROM +
                        split_four[num_zero] + THIS.SETTING.NORMAL.LEFT_BRACKET_SYMBOL +
                        contentln + THIS.SETTING.NORMAL.RIGHT_BRACKET_SYMBOL + path;
                    return runable

                }
                else {
                    return props
                }


            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        TO_NORMAL_RUNABLE: (props) => {
            try {
                const changeOne = THIS.SETTING.NORMAL.NHAY_CHAR_SYMBOL + THIS.SETTING.SPLIT.RUNABLE
                const changeTwo = THIS.SETTING.SPLIT.RUNABLE + THIS.SETTING.NORMAL.NHAY_CHAR_SYMBOL
                props = props.replaceAll(changeOne, THIS.SETTING.NORMAL.STRING_EMPRY)
                props = props.replaceAll(changeTwo, THIS.SETTING.NORMAL.STRING_EMPRY)
                return props
            } catch (error) {

            }
        }

    }


    THIS.CHECK = {
        IS_EMPRY: (ob) => {
            if (!ob || ob.length == 0) {
                return true
            }
            else {
                return false
            }
        },

        IS_OBJECT: (ob) => {
            try {
                if (Object.entries(ob) && Object.entries(ob).length > 0) {
                    return true
                }
                else {
                    return false
                }
            } catch (error) {
                return false
            }

        },

        OK: (method) => {


            SESSION.UPDATE()

            method()

        },

        MAP_PATH: ({ path, subpath }) => {
            try {
                var arrPath = [...path]
                var zeroChar = arrPath[THIS.SETTING.NORMAL.NUMBER_ZERO]

                if (zeroChar != THIS.SETTING.NORMAL.DOT_SYMBOL &&
                    zeroChar != THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL) {
                    THIS.EX.ERROR(THIS.SETTING.MESSAGE.PATH_INVALID);
                    return THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL
                }
                else {
                    return path + subpath;
                }
            } catch (error) {
                THIS.EX.ERROR(THIS.SETTING.MESSAGE.PATH_INVALID);
            }

        }

    }




    //#region HERE_PROPS

    THIS.PROPS = {

        HERE: (props) => {

            if (!THIS.CHECK.IS_EMPRY(props)) {
                return {
                    REQUIRE: props.REQUIRE,
                    RENDER: props.RENDER
                }
            }
        },

        RESPONSE: (props) => {
            return {
                url: props.url,
                response: props.response
            }
        },


        TO_STRING_PROPS: (props) => {

            return {
                specialSymbol: props.specialSymbol,
                content: props.content
            }
        },

        REQUIRE_SCRIPT: (props) => {
            return {
                load: props.load,
                url: props.url,
                name: props.name
            }
        },

        REQUIRE: (props) => {
            return {
                LIB_CSS: THIS.PROPS.HAVE_PROPS_LIST(props.LIB_CSS),
                LIB_SCRIPT: THIS.PROPS.HAVE_PROPS_LIST(props.LIB_SCRIPT),
                CSS: THIS.PROPS.HAVE_PROPS_LIST(props.CSS),
                SCRIPT: THIS.PROPS.HAVE_PROPS_LIST(props.SCRIPT)
            }

        },


        SET_VIEW: (props) => {
            return {
                view: props.view,
                // css: THIS.PROPSVIEW_OB_PROPS.ADD_CSS(
                //     {
                //         path: props.css.path,
                //         context: props.css.context,
                //         keep: props.css.keep
                //     }
                // ),
                // event: props.event
            }
        },


        HAVE: (props) => {

            const MAP_LIST_ITEM = (props) => {
                var LIST = [THIS.PROPS.HAVE_PROPS()];
                LIST = THIS.CONVERT.EMPTY_ARRAY(LIST)
                props.forEach(element => {
                    if (!THIS.CHECK.IS_EMPRY(element)) {
                        LIST.push(THIS.PROPS.HAVE_PROPS(element))
                    }
                });
                return LIST
            }

            return {
                LIB_CSS: MAP_LIST_ITEM(props.LIB_CSS),
                LIB_SCRIPT: MAP_LIST_ITEM(props.LIB_SCRIPT),
                CSS: MAP_LIST_ITEM(props.CSS),
                SCRIPT: MAP_LIST_ITEM(props.SCRIPT)
            }

        },


        HAVE_PROPS: (props) => {
            try {
                if (!THIS.CHECK.IS_EMPRY(props) && !THIS.CHECK.IS_EMPRY(props.src)) {
                    return {
                        src: props.src,
                        load: props.load,
                        name: props.name
                    }
                }

            } catch (error) {
                THIS.EX.ERROR(error);
            }

        },

        HAVE_PROPS_LIST: (props) => {
            try {
                if (!THIS.CHECK.IS_EMPRY(props)) {
                    var LIST = [THIS.PROPS.HAVE_PROPS()];
                    var LIST = THIS.CONVERT.EMPTY_ARRAY();
                    props.forEach(element => {
                        LIST.push(
                            {
                                src: props.src,
                                load: props.load,
                                name: props.name
                            }
                        )
                    });
                    return LIST;
                }

            } catch (error) {
                THIS.EX.ERROR(error);
            }

        },
    }

    //#endregion HERE_PROPS



    THIS.SETTING = SETTING


    //#region HERE_DOM
    THIS.DOM = {
        SET_EVENT_METHOD: (event) => {
            try {
                event()
            } catch (error) {
                THIS.EX.ERROR(error);
            }
        },
        ON_LOAD_METHOD: ({ element, event }) => {
            THIS.DOM.SET_EVENT_METHOD(() => {
                $(element).on(THIS.SETTING.EVENT.ONLOAD, function (e) {
                    event(e);
                });
            })
        },
        SET_EVENT_BY_NAME: ({ element, name, callback }) => {
            $(element).on(name, function (e) {
                callback(e)
            });
        }

    }
    //#endregion HERE_DOM

    THIS.HAVE = THIS.PROPS.HAVE({
        LIB_CSS: THIS.SETTING.PAGE.DEFAULT_PAGE_LIB_CSS(),
        LIB_SCRIPT: THIS.SETTING.PAGE.DEFAULT_PAGE_LIB_SCRIPT(),
        CSS: [],
        SCRIPT: []
    })


    THIS.CSS = {

    }

    THIS.SCRIPT = {
        SET: ({ url, callback }) => {

            try {
                var collorii = $(SETTING.TAG.COLORII_NAME)

                if (THIS.CHECK.IS_EMPRY(collorii)) {
                    var tag = document.createElement(SETTING.TAG.COLORII_NAME)
                    $(SETTING.TAG.BODY_NAME).append(tag)
                }

                var newii = document.createElement(SETTING.TAG.SCRIPT_NAME);
                $(newii).attr(SETTING.ATTRIBUTE.SRC_NAME, url);

                $(collorii).append(newii);

                var CURRENT = THIS

                THIS.DOM.SET_EVENT(() => {
                    $(newii).on(SETTING.EVENT.ONLOAD, function () {
                        var item = CURRENT.HAVE.find(x => x.url == url);

                        var loadedProps = CURRENT.PROPS.REQUIRE({
                            load: true,
                            url: url
                        })

                        if (!CURRENT.CHECK.IS_EMPRY(item)) {
                            item = loadedProps
                        }
                        else {
                            CURRENT.HAVE.push(loadedProps)
                        }
                        callback()
                    });
                })
            } catch (error) {
                THIS.EX.ERROR(error);
            }


        }

    }


    THIS.REQUIRE = (props) => {

        try {


            var iprops = THIS.PROPS.HERE(props)
            var ALLREADY = true

            //#region REQUIRE FUNC

            const CREATE_CSS_TAG = ({ path, src, name }) => {
                var tag = document.createElement(THIS.SETTING.TAG.LINK_NAME)
                $(tag).attr(THIS.SETTING.ATTRIBUTE.NAME_REL, THIS.SETTING.ATTRIBUTE_VALUE.REL_STYLESHEET)
                $(tag).attr(THIS.SETTING.ATTRIBUTE.HREF_NAME, THIS.CHECK.MAP_PATH({ path: path, subpath: src }))
                $(tag).attr(THIS.SETTING.ATTRIBUTE.NAME_NAME, name)
                return tag;
            }

            const CREATE_SCRIPT_TAG = ({ path, src, name }) => {
                var tag = document.createElement(THIS.SETTING.TAG.SCRIPT_NAME)
                $(tag).attr(THIS.SETTING.ATTRIBUTE.SRC_NAME, src)
                $(tag).attr(THIS.SETTING.ATTRIBUTE.NAME_NAME, name)
                return tag;
            }

            const REQUIRE_THINGS = ({ tagName, tagAppend, propsThings, isSucces, haveObject, methodCreateTag }) => {
                try {
                    var require = $(tagName)
                    if (THIS.CHECK.IS_EMPRY(require)) {
                        var tag = document.createElement(tagName)
                        $(tagAppend).append(tag)
                    }

                    if (!THIS.CHECK.IS_EMPRY(propsThings)) {
                        propsThings.forEach(element => {
                            var item = haveObject.find(x => x.name == element.name)
                            if (THIS.CHECK.IS_EMPRY(item)) {
                                isSucces = false
                                var tag = methodCreateTag({ name: element.name, src: element.src, path: props.PATH })

                                haveObject.push({
                                    src: element.src,
                                    name: element.name,
                                    load: false,
                                })

                                $(tagName).append(tag);


                                THIS.DOM.SET_EVENT_BY_NAME({
                                    name: THIS.SETTING.EVENT.ONLOAD,
                                    element: tag,
                                    callback: (e) => {
                                        var item = haveObject.find(x => x.name == element.name)
                                        item.load = true
                                        // iprops.REQUIRE(iprops)
                                    }
                                })


                            }
                            else {
                                if (!item.load) {
                                    isSucces = false;
                                }
                            }
                        });
                    }
                } catch (error) {
                    console.error(error);
                }


            }

            const REQUIRE_LIB_CSS = () => {

                if (iprops.REQUIRE.LIB_CSS) {
                    REQUIRE_THINGS({
                        tagName: THIS.SETTING.TAG.LIB_I_NAME,
                        tagAppend: THIS.SETTING.TAG.HEAD_NAME,
                        propsThings: iprops.REQUIRE.LIB_CSS,
                        isSucces: ALLREADY,
                        haveObject: THIS.HAVE.LIB_CSS,
                        methodCreateTag: CREATE_CSS_TAG
                    })
                }


            }

            const REQUIRE_LIB_SCRIPT = () => {

                REQUIRE_THINGS({
                    tagName: THIS.SETTING.TAG.LIB_II_NAME,
                    tagAppend: THIS.SETTING.TAG.BODY_NAME,
                    propsThings: iprops.REQUIRE.LIB_SCRIPT,
                    isSucces: ALLREADY,
                    haveObject: HAVE.LIB_SCRIPT,
                    methodCreateTag: CREATE_SCRIPT_TAG
                })

            }

            const REQUIRE_CSS = () => {
                if (iprops) {
                    REQUIRE_THINGS({
                        tagName: THIS.SETTING.TAG.SCOPE_I_NAME,
                        tagAppend: THIS.SETTING.TAG.HEAD_NAME,
                        propsThings: iprops.REQUIRE.CSS,
                        isSucces: ALLREADY,
                        haveObject: THIS.HAVE.CSS,
                        methodCreateTag: CREATE_CSS_TAG
                    })
                }
            }

            const REQUIRE_SCRIPT = () => {

                REQUIRE_THINGS({
                    tagName: THIS.SETTING.TAG.SCOPE_II_NAME,
                    tagAppend: THIS.SETTING.TAG.BODY_NAME,
                    propsThings: iprops.REQUIRE.SCRIPT,
                    isSucces: ALLREADY,
                    haveObject: HAVE.SCRIPT,
                    methodCreateTag: CREATE_SCRIPT_TAG
                })
            }

            //#endregion REQUIRE FUNC



            // REQUIRE_LIB_CSS(),
            // REQUIRE_LIB_SCRIPT;
            REQUIRE_CSS();
            // REQUIRE_SCRIPT();

            if (ALLREADY) {

                if (props) {
                    props.RENDER()
                }
            }

        } catch (error) {
            THIS.EX.ERROR(error)
        }
    }


    THIS.VIEW = {
        SET: () => {
        }

    }


    THIS.ROUTE = {




        GET_VIEW: ({ path }) => {
            try {
                console.log(path);
                THIS.THIS.GET_TEXT({ path: path }).then(data => {

                    const iData = THIS.PROPS.RESPONSE(data)
                    var code = THIS.CONVERT.TO_RUNABLE_JAVASCRIPT(iData.response)
                    var runeb = THIS.CONVERT.TO_NORMAL_RUNABLE(code)
                    var a = eval(runeb)

                    console.log(a("HELLO").METHOD());


                    resolve(iData)

                }).catch(err => {

                })
            } catch (error) {

            }

        },

        READY: () => {

            try {
                var PATH = THIS.IS

                if (!PATH.MAP) {
                    PATH.MAP = {
                        PROPERTIES: {
                            MAP: false
                        }

                    }
                }

                return PATH;
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },



        CHECK: () => {
            try {

                var PATH = THIS.ROUTE.READY()


                const DEFAULT = () => {
                    const name = Object.entries(PATH.MAP.DEFAULT)[THIS.SETTING.NORMAL.NUMBER_ZERO][THIS.SETTING.NORMAL.NUMBER_ZERO]
                    const url = PATH.MAP.DEFAULT[name][THIS.SETTING.ATTRIBUTE.SRC_NAME]
                    THIS.ROUTE.GET_VIEW({ path: url })
                }



                if (!PATH.MAP.PROPERTIES.MAP) {
                    THIS.THIS.GET_JSON({ path: THIS.SETTING.ROUTE.DEFAULT_ROUTE_PATH }).then(data => {
                        const iData = THIS.PROPS.RESPONSE(data)
                        PATH.MAP = { ...iData.response, ...PATH.MAP }
                        PATH.MAP.PROPERTIES.MAP = true
                        DEFAULT()

                    }).catch(err => {
                        THIS.EX.ERROR(err)

                    })


                }






            } catch (error) {

            }

        }


    }

    THIS.INNIT = () => {
        THIS.IS = (HERE);
        THIS.ROUTE.CHECK();
    }

    THIS.DATA = () => {
        return THIS;
    }

    return THIS;

}


HERE().INNIT()
