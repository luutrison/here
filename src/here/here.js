
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
        DOUBLE_DOT_SYMBOL: "..",
        NGA_SYMBOL: "~",
        RIGHT_SLASH_SYMBOL: "/",
        DOUBLE_RIGHT_SLASH_SYMBOL: "//",
        LEFT_SLASH_SYMBOL: "\\",
        EQUAL_SYMBOL: "=",
        LEFT_BRACKET_SYMBOL: "(",
        RIGHT_BRACKET_SYMBOL: ")",
        COMMA_SYMBOL: ",",
        COOKIE_EXPIRES: "expires=",
        COOKIE_PATH: "path=",
        STRING_EMPTY: "",
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
        TO_PAGE: "/pages/",
        ARRAY_ABSOLUTE_PATH_CONTAIN: ["./", "../"],
        ARRAY_ORIGIN_METHOD: ["http://", "https://"]
    },
    TAG: {
        CSS_I_NAME: "ci",
        CSS_II_NAME: "cii",
        SCRIPT_I_NAME: "si",
        SCRIPT_II_NAME: "sii",

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
        DEFAULT_ROUTE_PATH: "/pages/route.json"
    },
    MESSAGE: {
        PATH_INVALID: "PATH is invalid (Path containt an invalid character)\n",
        PATH_INVALID_OUT: "PATH was out or invalid\n",
        PATH_LOCATION: "PATH location is not exist\n",
        INVALID_DATA: "DATA is invalid !\n",
    },
    PAGE: {
        DEFAULT_PAGE_CSS_LIB: () => [
            {
                load: true,
                src: "./here/here.css",
                name: "here.here.css"
            },

            {
                load: true,
                src: "./designs/fonts/cuprum/cuprum.css",
                name: "designs.fonts.cuprum.cuprum.css"
            }
        ],

        DEFAULT_PAGE_SCRIPT_LIB: () => [
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



const HERE_METHOD = (props) => {

    var THIS = {}



    THIS.EX = {

        ERROR: ({ err }) => {
            console.error(err);
        },
        ARRAY_TO_STRING: (arr) => {
            try {
                if (!THIS.CHECK.IS_EMPRY({ ob: arr })) {
                    var str = THIS.SETTING.NORMAL.STRING_EMPTY;
                    arr.forEach(element => {
                        str += element;
                    });
                    return str
                }
                else {
                    THIS.EX.ERROR({ err: error })
                    return SETTING.NORMAL.STRING_EMPTY
                }
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }
        },

        ARRAY_REMOVE_EMPTY: ({ arr }) => {
            try {
                if (!THIS.CHECK.IS_EMPRY({ ob: arr })) {
                    var arro = []
                    arr.forEach(element => {
                        if (element != THIS.SETTING.NORMAL.STRING_EMPTY) {
                            arro.push(element)
                        }
                    });

                    return arro
                }
                else {
                    return []
                }
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        ARRAY_LENGTH: ({ arr }) => {
            try {
                if (!THIS.CHECK.IS_EMPRY({ ob: arr })) {
                    return arr.length - SETTING.NORMAL.NUMBER_ONE
                }
                else {
                    THIS.EX.ERROR({err: SETTING.MESSAGE.INVALID_DATA + arr})
                    return SETTING.NORMAL.NUMBER_ZERO
                }
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }
        },
        MAP_PATH: ({ path, subPath }) => {
            try {
                var NORMAL = THIS.SETTING.NORMAL
                var pathStart = THIS.CONVERT.TRIM_STRING(path)
                var arrPathStart = Array.from(pathStart);

                var PATH_RETURN = NORMAL.STRING_EMPTY





                if (arrPathStart[THIS.EX.ARRAY_LENGTH({ arr: arrPathStart })] != NORMAL.RIGHT_SLASH_SYMBOL) {
                    arrPathStart.push(NORMAL.RIGHT_SLASH_SYMBOL)
                }

                var arrSubPath = Array.from(subPath)

                var isAbsolute = false;

                THIS.SETTING.PATH.ARRAY_ABSOLUTE_PATH_CONTAIN.forEach(element => {
                    if (String(path).search(element) >= NORMAL.NUMBER_ZERO) {
                        isAbsolute = true
                    }
                });

                THIS.SETTING.PATH.ARRAY_ABSOLUTE_PATH_CONTAIN.forEach(element => {
                    if (String(subPath).search(element) >= NORMAL.NUMBER_ZERO) {
                        isAbsolute = true
                    }
                });

                if (arrSubPath[NORMAL.NUMBER_ZERO] != NORMAL.NGA_SYMBOL && !isAbsolute) {
                    PATH_RETURN = arrPathStart.join(NORMAL.STRING_EMPTY) + THIS.CONVERT.PATH_HEAD_EMPTY({ pathArr: arrSubPath }).join(NORMAL.STRING_EMPTY) 
                }
                else {
                    const arrSubPathe = arrSubPath.join(NORMAL.STRING_EMPTY)
                    PATH_RETURN = THIS.CONVERT.PATH_HEAD_EMPTY({
                        pathArr: THIS.CONVERT.LOGIC_PATH({
                            path: arrPathStart.join(NORMAL.STRING_EMPTY),
                            subPath: arrSubPathe
                        }).split(NORMAL.RIGHT_SLASH_SYMBOL)
                    }).join(NORMAL.RIGHT_SLASH_SYMBOL)
                }

                return PATH_RETURN


            } catch (error) {
                THIS.EX.ERROR(THIS.SETTING.MESSAGE.PATH_INVALID);
            }

        }



    }


    THIS.CONVERT = {

        PATH_HEAD_EMPTY: ({ pathArr }) => {
            try {
                const NORMAL = THIS.SETTING.NORMAL
                const invalidCharacter = [NORMAL.DOT_SYMBOL, NORMAL.DOUBLE_DOT_SYMBOL, NORMAL.RIGHT_SLASH_SYMBOL]
                var isValidPath = false

                    while (!isValidPath && !THIS.CHECK.IS_EMPRY({ob: pathArr})) {
                        if (invalidCharacter.find(x => x == pathArr[THIS.SETTING.NORMAL.NUMBER_ZERO]) || THIS.CHECK.IS_EMPRY({ ob: pathArr[THIS.SETTING.NORMAL.NUMBER_ZERO] })) {
                            pathArr.shift()
                        }
                        else {
                            isValidPath = true
                        }
                    }

                return pathArr
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        PATH_ASS_EMPTY: ({ pathArr }) => {
            try {
                const NORMAL = THIS.SETTING.NORMAL
                const invalidCharacter = [NORMAL.RIGHT_SLASH_SYMBOL]
                var isValidPath = false

                    while (!isValidPath && !THIS.CHECK.IS_EMPRY({ob: pathArr})) {
                        if (invalidCharacter.find(x => x == pathArr[THIS.EX.ARRAY_LENGTH({arr: pathArr})]) || THIS.CHECK.IS_EMPRY({ ob: pathArr[THIS.EX.ARRAY_LENGTH({arr: pathArr})] })) {
                            pathArr.pop()
                        }
                        else {
                            isValidPath = true
                        }
                    }

                return pathArr
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        PATH_ORIGIN: ({ path }) => {
            try {
                const origin = document.location.origin;
                var logicPath = THIS.EX.MAP_PATH({ path: origin, subPath: path })
                return logicPath;
            } catch (error) {
                THIS.EX.ERROR({err: err});
            }
        },


        LOGIC_PATH: ({ path, subPath }) => {

            try {
                var pathArr = []
                var subPathArr = []
                var haveOriginUrl = []
                var pathSplit = THIS.CONVERT.TRIM_STRING(path).split(THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL)
                var subPathSplit = THIS.CONVERT.TRIM_STRING(subPath).split(THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL)
                var status = {
                    pathEnd: false,
                    subPathEnd: false
                }


                if (THIS.SETTING.PATH.ARRAY_ORIGIN_METHOD.find(x => {
                    if (String(path).search(x) >= THIS.SETTING.NORMAL.NUMBER_ZERO) {
                        return true
                    }
                })) {
                    haveOriginUrl = path.split(THIS.SETTING.NORMAL.DOUBLE_RIGHT_SLASH_SYMBOL)
                    pathSplit = haveOriginUrl[THIS.SETTING.NORMAL.NUMBER_ONE].split(THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL)
                    haveOriginUrl[THIS.SETTING.NORMAL.NUMBER_ONE] = pathSplit.shift()
                }

                pathSplit = THIS.EX.ARRAY_REMOVE_EMPTY({ arr: pathSplit })
                subPathSplit = THIS.EX.ARRAY_REMOVE_EMPTY({ arr: subPathSplit })

                if (!THIS.CHECK.IS_EMPRY({ ob: pathSplit })) {

                    pathSplit.forEach(element => {
                        if (!status.pathEnd) {
                            if (element == THIS.SETTING.NORMAL.DOUBLE_DOT_SYMBOL) {
                                if (!THIS.CHECK.IS_EMPRY({ ob: pathArr })) {
                                    pathArr.pop()
                                }
                                else {
                                    status.pathEnd = true
                                    THIS.EX.ERROR({err: THIS.SETTING.MESSAGE.PATH_INVALID_OUT})
                                }
                            }
                            else if (element != THIS.SETTING.NORMAL.DOT_SYMBOL) {
                                pathArr.push(element)
                            }
                        }
                        else {
                            return
                        }

                    });

                }

                if (!status.pathEnd) {
                    if (!THIS.CHECK.IS_EMPRY({ ob: subPathSplit })) {
                        subPathSplit.forEach(element => {
                            if (!status.subPathEnd) {
                                if (element == THIS.SETTING.NORMAL.DOUBLE_DOT_SYMBOL) {
                                    if (!THIS.CHECK.IS_EMPRY({ ob: subPathArr })) {
                                        subPathArr.pop()
                                    }
                                    else {
                                        if (!THIS.CHECK.IS_EMPRY({ ob: pathArr })) {
                                            pathArr.pop()
                                        }
                                        else {
                                            status.pathEnd = true
                                            status.subPathEnd = true
                                            THIS.EX.ERROR({
                                                err: THIS.SETTING.MESSAGE.PATH_INVALID_OUT + THIS.SETTING.NORMAL.SPACE + path
                                                + THIS.SETTING.NORMAL.SPACE + subPath})
                                        }
                                    }
                                }
                                else if (element != THIS.SETTING.NORMAL.DOT_SYMBOL) {
                                    subPathArr.push(element)
                                }
                            }
                            else {
                                return
                            }
                        });

                    }

                }


                if (!status.pathEnd && !status.subPathEnd) {
                    var origin = THIS.SETTING.NORMAL.STRING_EMPTY
                    if (!THIS.CHECK.IS_EMPRY({ ob: haveOriginUrl })) {
                        origin = haveOriginUrl.join(THIS.SETTING.NORMAL.DOUBLE_RIGHT_SLASH_SYMBOL) + THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL
                    }
                    return origin + THIS.CONVERT.PATH_ASS_EMPTY({pathArr: pathArr}).join(THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL) +
                    THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL +
                    THIS.CONVERT.PATH_HEAD_EMPTY({pathArr: subPathArr}).join(THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL) 
                }
                else {
                    return THIS.SETTING.NORMAL.STRING_EMPTY
                }


            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        PATH_TO_FILE_GET_FOLDER_PATH: ({ path }) => {

            try {
                var arrPath = String(path).split(THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL)
                arrPath.pop()
                return arrPath.join(THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL)
            } catch (error) {
                THIS.EX.ERROR({err: error})
            }
        },

        TRIM_STRING: (str) => {
            try {
                return String(str).toString().trim()
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        EMPTY_ARRAY: (arr) => {
            try {
                return arr = []
            } catch (error) {
                THIS.EX.ERROR({ err: error });
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
                THIS.EX.ERROR({ err: error })
            }

        },
        TO_STRING_NO_BREAK: (props) => {
            try {
                return props.replaceAll(THIS.SETTING.NORMAL.BREAK_LINE_SYMBOL, THIS.SETTING.NORMAL.STRING_EMPTY);
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        TO_STRING_WITH_NHAY_SPECIAL: (props) => {
            try {
                return props.replaceAll(THIS.SETTING.NORMAL.NHAY_SYMBOL, THIS.SETTING.NORMAL.NHAY_SYMBOL_SPECIAL);
            } catch (error) {
                THIS.EX.ERROR({ err: error })
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
                        if (index != THIS.EX.ARRAY_LENGTH({ arr: arr }) && arr[index + THIS.SETTING.NORMAL.NUMBER_ONE]) {
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
                    var spaces = THIS.SETTING.NORMAL.STRING_EMPTY;
                    for (let i = 0; i < index; i++) {
                        spaces += THIS.SETTING.NORMAL.SPACE
                    }
                    content = content.replaceAll(spaces, THIS.SETTING.NORMAL.STRING_EMPTY)
                }
                return content


            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }
        },

        TO_RUNABLE_JAVASCRIPT: (props) => {


            try {
                const num_zero = THIS.SETTING.NORMAL.NUMBER_ZERO
                const num_one = THIS.SETTING.NORMAL.NUMBER_ONE
                const stringContent = THIS.CONVERT.TO_STRING({ specialSymbol: THIS.SETTING.SPLIT.RUNABLE, content: props })
                var split_one = stringContent.split(THIS.SETTING.SPLIT.RENDER)
                var split_three = split_four = split_five = THIS.SETTING.NORMAL.STRING_EMPTY
                if (!THIS.CHECK.IS_EMPRY({ ob: split_one })) {
                    split_three = split_one[num_one].split(THIS.SETTING.SPLIT.FROM)

                }
                if (!THIS.CHECK.IS_EMPRY({ ob: split_three })) {
                    split_four = split_three[num_one].split(THIS.SETTING.NORMAL.LEFT_BRACKET_SYMBOL)

                }
                if (!THIS.CHECK.IS_EMPRY({ ob: split_four })) {
                    split_five = split_four[num_one].split(THIS.SETTING.NORMAL.RIGHT_BRACKET_SYMBOL)
                }

                if (!THIS.CHECK.IS_EMPRY({ ob: split_five })) {
                    const content = split_five[num_zero]

                    const other = stringContent.split(THIS.SETTING.SPLIT.RENDER)[num_one].split(THIS.SETTING.NORMAL.RIGHT_BRACKET_SYMBOL)

                    var path = THIS.SETTING.NORMAL.STRING_EMPTY;

                    for (let index = 1; index < other.length; index++) {
                        if (index != THIS.EX.ARRAY_LENGTH({ arr: other })) {
                            path += other[index] + THIS.SETTING.NORMAL.RIGHT_BRACKET_SYMBOL
                        }
                        else {
                            path += other[index]
                        }

                    }

                    const contentln = THIS.CONVERT.TO_STRING({ content: content })

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
                THIS.EX.ERROR({ err: error })
            }

        },

        TO_NORMAL_RUNABLE: (props) => {
            try {
                const changeOne = THIS.SETTING.NORMAL.NHAY_CHAR_SYMBOL + THIS.SETTING.SPLIT.RUNABLE
                const changeTwo = THIS.SETTING.SPLIT.RUNABLE + THIS.SETTING.NORMAL.NHAY_CHAR_SYMBOL
                props = props.replaceAll(changeOne, THIS.SETTING.NORMAL.STRING_EMPTY)
                props = props.replaceAll(changeTwo, THIS.SETTING.NORMAL.STRING_EMPTY)
                return props
            } catch (error) {

            }
        }

    }


    THIS.THIS = {
        GET: ({ path }) => {
            try {
                return new Promise((resolve, reject) => {
                    fetch(THIS.CONVERT.PATH_ORIGIN({ path: path })).then((response) => {
                        const res = THIS.PROPS.RESPONSE({ url: response.url, response: response })
                        resolve(res)
                    }).catch(err => reject(err))

                });


            } catch (error) {
                THIS.EX.ERROR({ err: error })
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
                        })

                    }).catch(err => reject(err))

                });
            } catch (error) {
                THIS.EX.ERROR({ err: error })
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
                        })
                    }).catch(err => reject(err))

                });
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        }

    }




    THIS.CHECK = {
        IS_EMPRY: ({ ob }) => {
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

    }




    //#region HERE_PROPS

    THIS.PROPS = {

        HERE: (props) => {

            if (!THIS.CHECK.IS_EMPRY({ ob: props })) {
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
                CSS_LIB: THIS.PROPS.HAVE_PROPS_LIST(props.CSS_LIB),
                SCRIPT_LIB: THIS.PROPS.HAVE_PROPS_LIST(props.SCRIPT_LIB),
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
                    if (!THIS.CHECK.IS_EMPRY({ ob: element })) {
                        LIST.push(THIS.PROPS.HAVE_PROPS(element))
                    }
                });
                return LIST
            }




            return {
                CSS_LIB: MAP_LIST_ITEM(props.CSS_LIB),
                SCRIPT_LIB: MAP_LIST_ITEM(props.SCRIPT_LIB),
                CSS: MAP_LIST_ITEM(props.CSS),
                SCRIPT: MAP_LIST_ITEM(props.SCRIPT)
            }

        },


        HAVE_PROPS: (props) => {
            try {
                if (!THIS.CHECK.IS_EMPRY({ ob: props }) && !THIS.CHECK.IS_EMPRY({ ob: props.src })) {
                    return {
                        src: props.src,
                        load: props.load,
                        name: props.name
                    }
                }

            } catch (error) {
                THIS.EX.ERROR({ err: error });
            }

        },

        HAVE_PROPS_LIST: (props) => {
            try {
                if (!THIS.CHECK.IS_EMPRY({ ob: props })) {
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
                THIS.EX.ERROR({ err: error });
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
                THIS.EX.ERROR({ err: error });
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
        CSS_LIB: THIS.SETTING.PAGE.DEFAULT_PAGE_CSS_LIB(),
        SCRIPT_LIB: THIS.SETTING.PAGE.DEFAULT_PAGE_SCRIPT_LIB(),
        CSS: [],
        SCRIPT: []
    })

    THIS.REQUIRE_METHOD = () => {

        return {
            REQUIRE_THINGS: ({ tagName, tagAppend, propsThings, isSucces, haveObject, methodCreateTag }) => {
                try {
                    var require = $(tagName)
                    if (THIS.CHECK.IS_EMPRY({ ob: require })) {
                        var tag = document.createElement(tagName)
                        $(tagAppend).append(tag)
                    }

                    if (!THIS.CHECK.IS_EMPRY({ ob: propsThings })) {
                        propsThings.forEach(element => {
                            var item = haveObject.find(x => x.name == element.name)
                            if (THIS.CHECK.IS_EMPRY({ ob: item })) {
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

        }



    }


    THIS.CSS = () => {

        const CSS_TAG = ({ path, src, name }) => {
            var tag = document.createElement(THIS.SETTING.TAG.LINK_NAME)
            $(tag).attr(THIS.SETTING.ATTRIBUTE.NAME_REL, THIS.SETTING.ATTRIBUTE_VALUE.REL_STYLESHEET)
            $(tag).attr(THIS.SETTING.ATTRIBUTE.HREF_NAME, THIS.EX.MAP_PATH({ path: path, subpath: src }))
            $(tag).attr(THIS.SETTING.ATTRIBUTE.NAME_NAME, name)
            return tag;
        }

        return {
            CSS_LIB: () => {
                THIS.REQUIRE_METHOD().REQUIRE_THINGS({
                    tagName: THIS.SETTING.TAG.CSS_I_NAME,
                    tagAppend: THIS.SETTING.TAG.HEAD_NAME,

                })

            },

            CSS: () => {


            }
        }

    }

    THIS.SCRIPT = () => {

        const SCRIPT_TAG = ({ path, src, name }) => {
            var tag = document.createElement(THIS.SETTING.TAG.SCRIPT_NAME)
            $(tag).attr(THIS.SETTING.ATTRIBUTE.SRC_NAME, src)
            $(tag).attr(THIS.SETTING.ATTRIBUTE.NAME_NAME, name)
            return tag;
        }

        return {
            SCRIPT_LIB: () => {


            },

            SCRIPT: () => {


            }

        }



    }

    THIS.RENDER = (props) => {
        try {
            THIS.REQUIRE(props)
        } catch (error) {

        }


    }


    THIS.REQUIRE = (props) => {

        try {


            var iprops = THIS.PROPS.HERE(props)
            var ALLREADY = true

            //#region REQUIRE FUNC



            const REQUIRE_THINGS = ({ tagName, tagAppend, propsThings, isSucces, haveObject, methodCreateTag }) => {
                try {
                    var require = $(tagName)
                    if (THIS.CHECK.IS_EMPRY({ ob: require })) {
                        var tag = document.createElement(tagName)
                        $(tagAppend).append(tag)
                    }

                    if (!THIS.CHECK.IS_EMPRY({ ob: propsThings })) {
                        propsThings.forEach(element => {
                            var item = haveObject.find(x => x.name == element.name)
                            if (THIS.CHECK.IS_EMPRY({ ob: item })) {
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
            THIS.EX.ERROR({ err: error })
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
                    var a = eval(runeb)().RENDER.FROM
                    $("body").append(a)
                    console.log(a);

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
                THIS.EX.ERROR({ err: error })
            }
        },



        CHECK: () => {
            try {

                var PATH = THIS.ROUTE.READY()


                const DEFAULT = () => {
                    const name = Object.entries(PATH.MAP.DEFAULT)[THIS.SETTING.NORMAL.NUMBER_ZERO][THIS.SETTING.NORMAL.NUMBER_ZERO]
                    const src = PATH.MAP.DEFAULT[name][THIS.SETTING.ATTRIBUTE.SRC_NAME]
                    THIS.ROUTE.GET_VIEW({ path: THIS.EX.MAP_PATH({path: THIS.CONVERT.PATH_TO_FILE_GET_FOLDER_PATH({path: THIS.SETTING.ROUTE.DEFAULT_ROUTE_PATH}), subPath: src}) })
                }



                if (!PATH.MAP.PROPERTIES.MAP) {
                    THIS.THIS.GET_JSON({ path: THIS.SETTING.ROUTE.DEFAULT_ROUTE_PATH }).then(data => {
                        const iData = THIS.PROPS.RESPONSE(data)
                        console.log(iData.response);
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

    THIS.INNIT = (PROPS) => {
        THIS.IS = (PROPS);
        THIS.ROUTE.CHECK();
    }

    THIS.DATA = () => {
        return THIS;
    }

    return THIS;

}



var HERE = HERE_METHOD
const HERE_INNIT = HERE()
HERE_INNIT.INNIT(HERE)


