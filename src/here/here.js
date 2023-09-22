
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
        SPACE: " ",
        FALSE: false,
        TRUE: true,
        ARRAY_EMPTY: [],
        OBJECT_EMPTY: {}
    },
    DEFAULT: {
        HAVE_ENTRIE: []

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
    MODE: {
        COMPONENTS_NAME: "COMPONENTS"
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
        LOAD: "load"
    },
    ROUTE: {
        DEFAULT_PATH: "/route.json"
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

        TRUE_ARRAY_LENGTH: ({ arr }) => {
            try {
                if (!THIS.CHECK.IS_EMPRY({ ob: arr })) {
                    return arr.length - SETTING.NORMAL.NUMBER_ONE
                }
            } catch (error) {
                THIS.EX.ERROR({ err: SETTING.MESSAGE.INVALID_DATA + arr })
            }
        },
        ARRAY_LENGTH: ({ arr }) => {
            try {
                if (!THIS.CHECK.IS_EMPRY({ ob: arr })) {
                    return arr.length
                }
            } catch (error) {
                THIS.EX.ERROR({ err: SETTING.MESSAGE.INVALID_DATA + arr })
            }
        },

        MAP_PATH: ({ path, subPath }) => {
            try {
                var NORMAL = THIS.SETTING.NORMAL
                var pathStart = THIS.CONVERT.TRIM_STRING(path)
                var arrPathStart = Array.from(pathStart);

                var PATH_RETURN = NORMAL.STRING_EMPTY





                if (arrPathStart[THIS.EX.TRUE_ARRAY_LENGTH({ arr: arrPathStart })] != NORMAL.RIGHT_SLASH_SYMBOL) {
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

                while (!isValidPath && !THIS.CHECK.IS_EMPRY({ ob: pathArr })) {
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

        PATH_TO_NAME: ({ path }) => {
            try {

                var pathArr = Array.from(path)

                pathArr = THIS.CONVERT.PATH_HEAD_EMPTY({ pathArr: pathArr })
                pathArr = THIS.CONVERT.PATH_ASS_EMPTY({ pathArr: pathArr })

                return pathArr.join(THIS.SETTING.NORMAL.STRING_EMPTY).replaceAll(THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL, THIS.SETTING.NORMAL.DOT_SYMBOL)
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        PATH_ASS_EMPTY: ({ pathArr }) => {
            try {
                const NORMAL = THIS.SETTING.NORMAL
                const invalidCharacter = [NORMAL.DOT_SYMBOL, NORMAL.DOUBLE_DOT_SYMBOL, NORMAL.RIGHT_SLASH_SYMBOL]
                var isValidPath = false

                while (!isValidPath && !THIS.CHECK.IS_EMPRY({ ob: pathArr })) {
                    if (invalidCharacter.find(x => x == pathArr[THIS.EX.TRUE_ARRAY_LENGTH({ arr: pathArr })]) || THIS.CHECK.IS_EMPRY({ ob: pathArr[THIS.EX.TRUE_ARRAY_LENGTH({ arr: pathArr })] })) {
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
                THIS.EX.ERROR({ err: err });
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
                                    THIS.EX.ERROR({ err: THIS.SETTING.MESSAGE.PATH_INVALID_OUT })
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
                                                    + THIS.SETTING.NORMAL.SPACE + subPath
                                            })
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
                        origin = THIS.EX.ARRAY_REMOVE_EMPTY({ arr: haveOriginUrl }).join(THIS.SETTING.NORMAL.DOUBLE_RIGHT_SLASH_SYMBOL) + THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL
                    }

                    var pathReturn = origin + THIS.CONVERT.PATH_ASS_EMPTY({ pathArr: pathArr }).join(THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL) +
                        THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL +
                        THIS.CONVERT.PATH_HEAD_EMPTY({ pathArr: subPathArr }).join(THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL)

                    return THIS.CONVERT.REMOVE_DUPLICATE.SYMBOL({
                        props: THIS.CONVERT.REMOVE_DUPLICATE.PROPS.SYMBOL({
                            props: {
                                symbol: THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL,
                                content: pathReturn,
                                replace: THIS.SETTING.NORMAL.RIGHT_SLASH_SYMBOL,
                                keep: THIS.SETTING.NORMAL.NUMBER_ONE,
                                special: THIS.SETTING.PATH.ARRAY_ORIGIN_METHOD
                            }
                        })
                    })
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
                THIS.EX.ERROR({ err: error })
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
                const iProps = THIS.PROPS.TO_STRING_PROPS({ props: props })
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
        REMOVE_DUPLICATE: {
            PROPS: {
                SYMBOL: ({ props }) => {
                    return {
                        symbol: props.symbol,
                        content: props.content,
                        replace: props.replace,
                        keep: props.keep,
                        special: props.special
                    }

                }
            },


            SYMBOL: ({ props }) => {
                try {
                    const NORMAL = THIS.SETTING.NORMAL
                    const iprops = THIS.CONVERT.REMOVE_DUPLICATE.PROPS.SYMBOL({ props: props })
                    const arr = [...String(iprops.content)]
                    var content = String(iprops.content)
                    var maxSpace = NORMAL.NUMBER_ZERO;
                    var maxNow = NORMAL.NUMBER_ZERO;
                    var parseSpecial = []

                    iprops.special.forEach(element => {
                        const arr = String(element).split(iprops.symbol)
                        parseSpecial.push([arr[NORMAL.NUMBER_ZERO], arr[NORMAL.NUMBER_ONE]])
                    });


                    for (let index = 0; index < arr.length; index++) {
                        const element = arr[index];
                        if (element == iprops.symbol) {
                            if (index != THIS.EX.TRUE_ARRAY_LENGTH({ arr: arr }) && arr[index + THIS.SETTING.NORMAL.NUMBER_ONE]) {
                                maxNow += 1;
                                if (maxNow > maxSpace) {
                                    maxSpace = maxNow
                                }
                            }

                        }
                        else {
                            maxNow = 0;
                        }
                    }



                    for (let index = maxSpace; index > iprops.keep; index--) {
                        var spaces = THIS.SETTING.NORMAL.STRING_EMPTY;
                        for (let i = 0; i < index; i++) {
                            spaces += iprops.symbol
                        }


                        var isEnd = false

                        var prePosition = 0
                        var preContent = content
                        while (!isEnd) {
                            var current = String(content).indexOf(spaces, prePosition + NORMAL.NUMBER_ONE)
                            if (prePosition != current) {
                                prePosition = current
                                if (current >= NORMAL.NUMBER_ZERO) {
                                    var parseStatus = {
                                        headSame: false,
                                        assSame: false
                                    }
                                    parseSpecial.forEach((parseElement, index) => {
                                        var step = 0

                                        parseElement.forEach(pei => {
                                            if (step == 0) {
                                                const same = content.slice(current - pei.length, current)
                                                if (same == pei) {
                                                    parseStatus.headSame = true
                                                }
                                                step += 1
                                            }
                                            else {
                                                const same = content.slice(current, current + pei.length)
                                                if (same == pei) {
                                                    parseStatus.assSame = true
                                                }
                                            }

                                        });

                                    });

                                    if (!parseStatus.headSame || !parseStatus.assSame) {
                                        const content_one = content.slice(0, current);
                                        const content_two = content.slice(current + spaces.length, content.length)
                                        content = content_one + iprops.symbol + content_two
                                        prePosition = prePosition - (preContent.length - content.length)
                                        preContent = content
                                    }
                                }
                                else {
                                    isEnd = true
                                }
                            }
                            else {
                                isEnd = true
                            }
                        }
                    }
                    return content


                } catch (error) {
                    THIS.EX.ERROR({ err: error })
                }
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
                        if (index != THIS.EX.TRUE_ARRAY_LENGTH({ arr: other })) {
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
                        resolve(THIS.PROPS.RESPONSE({ props: { url: response.url, response: response } }))
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
                        const iResponse = THIS.PROPS.RESPONSE({ props: res })
                        iResponse.response.json().then(data => {
                            resolve(THIS.PROPS.RESPONSE({ props: { url: iResponse.url, response: data } }))
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
                        const iResponse = THIS.PROPS.RESPONSE({ props: res })
                        iResponse.response.text().then(data => {
                            resolve(THIS.PROPS.RESPONSE({ props: { url: iResponse.url, response: data } }))
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

        IS_OBJECT: ({ ob }) => {
            try {
                if (ob) {
                    if (Object.keys(ob).length > 0) {
                        return true
                    }
                    else {
                        return false
                    }
                }

            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        OK: (method) => {


            SESSION.UPDATE()

            method()

        },

    }




    //#region HERE_PROPS

    THIS.PROPS = {

        PAGE_PROPS: ({ props }) => {
            try {
                if (THIS.CHECK.IS_OBJECT({ ob: props })) {
                    return {
                        REQUIRE: THIS.PROPS.HAVE({ props: props.REQUIRE }),
                        RENDER: THIS.PROPS.RENDER_PROPS({ props: props.RENDER }),
                        METHOD: () => props.METHOD()
                    }
                }
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }


        },

        RENDER_PROPS: ({ props }) => {
            try {
                if (!THIS.CHECK.IS_EMPRY({ ob: props })) {
                    return {
                        FROM: props.FROM,
                        TO: props.TO,
                        TRANSITION: props.TRANSITION
                    }
                }
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }
        },

        RESPONSE: ({ props }) => {
            return {
                url: props.url,
                response: props.response
            }
        },


        TO_STRING_PROPS: ({ props }) => {

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

        REQUIRE: ({ props }) => {
            return {
                CSS_LIB: THIS.PROPS.HAVE_PROPS_LIST({ props: props.CSS_LIB }),
                SCRIPT_LIB: THIS.PROPS.HAVE_PROPS_LIST({ props: props.SCRIPT_LIB }),
                CSS: THIS.PROPS.HAVE_PROPS_LIST({ props: props.CSS }),
                SCRIPT: THIS.PROPS.HAVE_PROPS_LIST({ props: props.SCRIPT }),
                COMPONENTS: THIS.PROPS.HAVE_PROPS_LIST({ props: props.COMPONENTS }),
            }

        },



        HAVE: ({ props }) => {

            if (!THIS.CHECK.IS_EMPRY({ ob: props })) {
                const MAP_LIST_ITEM = ({ props }) => {
                    if (!THIS.CHECK.IS_EMPRY({ ob: props })) {
                        const LIST = [];
                        props.forEach(element => {
                            if (!THIS.CHECK.IS_EMPRY({ ob: element })) {
                                LIST.push(THIS.PROPS.HAVE_PROPS({ props: element }))
                            }
                        });
                        return LIST
                    }
                }

                const DEFAULT = ({ props }) => {

                    if (THIS.CHECK.IS_EMPRY({ ob: props })) {
                        return []
                    }
                    else {
                        return props
                    }

                }


                return {
                    CSS_LIB: DEFAULT({ props: MAP_LIST_ITEM({ props: props.CSS_LIB }) }),
                    SCRIPT_LIB: DEFAULT({ props: MAP_LIST_ITEM({ props: props.SCRIPT_LIB }) }),
                    CSS: DEFAULT({ props: MAP_LIST_ITEM({ props: props.CSS }) }),
                    SCRIPT: DEFAULT({ props: MAP_LIST_ITEM({ props: props.SCRIPT }) }),
                    COMPONENTS: DEFAULT({ props: MAP_LIST_ITEM({ props: props.COMPONENTS }) }),
                }
            }
            else {
                THIS.EX.ERROR(THIS.SETTING.MESSAGE.INVALID_DATA)
            }



        },


        HAVE_PROPS: ({ props }) => {
            try {
                if (THIS.CHECK.IS_OBJECT({ ob: props })) {
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

        HAVE_PROPS_LIST: ({ props }) => {
            try {
                if (!THIS.CHECK.IS_EMPRY({ ob: props })) {
                    const LIST = [];
                    props.forEach(element => {
                        LIST.push(
                            {
                                src: element.src,
                                load: element.load,
                                name: element.name
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


    THIS.DOM = {
        SET_EVENT_METHOD: ({ event }) => {
            try {
                event()
            } catch (error) {
                THIS.EX.ERROR({ err: error });
            }
        },
        ON_LOAD_METHOD: ({ element, event }) => {
            THIS.DOM.SET_EVENT_METHOD({
                event: () => {
                    $(element).on(THIS.SETTING.EVENT.LOAD, function (e) {
                        event(e);
                    });
                }
            })
        },
        SET_EVENT_BY_NAME: ({ element, name, callback }) => {
            $(element).on(name, function (e) {
                callback(e)
            });
        }

    }



    THIS.METHOD = {

        PROPS: {
            REQUIRE_THINGS_PROPS: ({ props }) => {
                try {
                    return {
                        path: props.path,
                        arr: THIS.PROPS.HAVE_PROPS_LIST({ props: props.arr }),
                        callBack: props.callBack,
                    }
                } catch (error) {
                    THIS.EX.ERROR(error)
                }

            },
            TAG_REQUIRE_THINGS_PROPS: ({ props }) => {
                try {
                    return {
                        name: props.name,
                        path: props.path,
                        subPath: props.subPath

                    }
                } catch (error) {

                }

            }

        },

        REQUIRE_THINGS: ({ tagName, tagAppend, props, haveObject, methodCreateTag, mode }) => {
            try {
                var require = $(tagName)
                const NORMAL = THIS.SETTING.NORMAL
                const iProps = THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({ props: props })
                if (THIS.CHECK.IS_EMPRY({ ob: require })) {
                    const tag = document.createElement(tagName)
                    $(tagAppend).append(tag)
                }

                if (!THIS.CHECK.IS_EMPRY({ ob: iProps.arr })) {

                    iProps.arr.forEach(element => {
                        const path = THIS.EX.MAP_PATH({ path: iProps.path, subPath: element.src })

                        if (THIS.CHECK.IS_EMPRY({ ob: element.name })) {
                            element.name = THIS.CONVERT.PATH_TO_NAME({ path: path })
                        }

                        const item = haveObject.find(x => x.name == element.name)

                        if (THIS.CHECK.IS_EMPRY({ ob: item })) {


                            if (mode) {
                                if (mode.name == THIS.SETTING.MODE.COMPONENTS_NAME) {
                                    haveObject.push({
                                        src: element.src,
                                        name: element.name,
                                        load: NORMAL.FALSE,
                                    })

                                    THIS.THIS.GET_TEXT({ path: path }).then(data => {
                                        if (mode.map) {
                                            const code = eval(data.response)
                                            const item = mode.map.find(x => x.name = element.name)
                                            if (!item) {
                                                mode.map[element.name] = code
                                            }
                                            const fin = haveObject.find(x => x.name = element.name)
                                            fin.load = NORMAL.TRUE
                                            iProps.callBack()
                                        }
                                    })

                                }

                            }
                            else {
                                const tag = methodCreateTag({ name: element.name, subPath: element.src, path: iProps.path })

                                haveObject.push({
                                    src: element.src,
                                    name: element.name,
                                    load: NORMAL.FALSE,
                                })
                                THIS.DOM.ON_LOAD_METHOD({
                                    element: tag,
                                    event: (e) => {
                                        const item = haveObject.find(x => x.name = element.name)
                                        item.load = NORMAL.TRUE
                                        iProps.callBack()
                                    }
                                })
                                $(tagName).append(tag);
                            }


                        }

                    });
                }
                else{
                    iProps.callBack()
                }
            } catch (error) {
                console.error(error);
            }
        },

    }


    THIS.CSS = {

        TAG: ({ path, subPath, name }) => {
            var tag = document.createElement(THIS.SETTING.TAG.LINK_NAME)
            $(tag).attr(THIS.SETTING.ATTRIBUTE.NAME_REL, THIS.SETTING.ATTRIBUTE_VALUE.REL_STYLESHEET)
            $(tag).attr(THIS.SETTING.ATTRIBUTE.HREF_NAME, THIS.CONVERT.PATH_ORIGIN({ path: THIS.EX.MAP_PATH({ path: path, subPath: subPath }) }))
            $(tag).attr(THIS.SETTING.ATTRIBUTE.NAME_NAME, name)
            return tag;
        },

        CSS_LIB: ({ props }) => {

            const iProps = THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({ props: props })
            const HAVE = THIS.IS.HAVE

            THIS.METHOD.REQUIRE_THINGS({
                tagName: THIS.SETTING.TAG.CSS_I_NAME,
                tagAppend: THIS.SETTING.TAG.HEAD_NAME,
                haveObject: HAVE.CSS_LIB,
                props: iProps,
                methodCreateTag: THIS.CSS.TAG
            })

        },

        CSS: ({ props }) => {

            const iProps = THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({ props: props })
            const HAVE = THIS.IS.HAVE


            THIS.METHOD.REQUIRE_THINGS({
                tagName: THIS.SETTING.TAG.CSS_II_NAME,
                tagAppend: THIS.SETTING.TAG.HEAD_NAME,
                haveObject: HAVE.CSS,
                props: iProps,
                methodCreateTag: THIS.CSS.TAG
            })
        }



    }

    THIS.SCRIPT = {

        SCRIPT_TAG: ({ path, subPath, name }) => {
            var tag = document.createElement(THIS.SETTING.TAG.SCRIPT_NAME)
            $(tag).attr(THIS.SETTING.ATTRIBUTE.SRC_NAME, THIS.CONVERT.PATH_ORIGIN({ path: THIS.EX.MAP_PATH({ path: path, subPath: subPath }) }))
            $(tag).attr(THIS.SETTING.ATTRIBUTE.NAME_NAME, name)
            return tag;
        },

        SCRIPT_LIB: ({ props }) => {
            const iProps = THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({ props: props })
            const HAVE = THIS.IS.HAVE

            THIS.METHOD.REQUIRE_THINGS({
                tagName: THIS.SETTING.TAG.SCRIPT_I_NAME,
                tagAppend: THIS.SETTING.TAG.BODY_NAME,
                haveObject: HAVE.SCRIPT_LIB,
                props: iProps,
                methodCreateTag: THIS.SCRIPT.TAG
            })

        },

        SCRIPT: ({ props }) => {

            const iProps = THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({ props: props })
            const HAVE = THIS.IS.HAVE

            THIS.METHOD.REQUIRE_THINGS({
                tagName: THIS.SETTING.TAG.SCRIPT_II_NAME,
                tagAppend: THIS.SETTING.TAG.BODY_NAME,
                haveObject: HAVE.SCRIPT,
                props: iProps,
                methodCreateTag: THIS.SCRIPT.TAG
            })
        }

    }

    THIS.COMPONENTS = {

        READY: () => {
            try {
                if (!THIS.COMPONENTS.INNIT) {
                    THIS.COMPONENTS.INNIT = []
                }
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        COMPONENTS: ({ props }) => {

            const iProps = THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({ props: props })
            const HAVE = THIS.IS.HAVE

            THIS.COMPONENTS.READY()

            THIS.METHOD.REQUIRE_THINGS({
                haveObject: HAVE.COMPONENTS,
                props: iProps,
                mode: {
                    map: THIS.COMPONENTS.INNIT,
                    name: THIS.SETTING.MODE.COMPONENTS_NAME
                }
            })
        }

    }



    THIS.RENDER = {

        PROPS: {
            FROM_RENDER_PROPS: ({ props }) => {
                return {
                    path: props.path,
                    subPath: props.subPath
                }

            }


        },

        FROM: ({ props }) => {
            try {
                const iProps = THIS.RENDER.PROPS.FROM_RENDER_PROPS({ props: props })

                const path = THIS.EX.MAP_PATH({ path: iProps.path, subPath: iProps.subPath })

                THIS.THIS.GET_TEXT({ path: path }).then(data => {

                    const iData = THIS.PROPS.RESPONSE({ props: data })
                    const code = THIS.CONVERT.TO_RUNABLE_JAVASCRIPT(iData.response)
                    const ncode = THIS.CONVERT.TO_NORMAL_RUNABLE(code)
                    const fuc = eval(ncode)
                    THIS.REQUIRE.LOAD({
                        PROPS: THIS.REQUIRE.PROPS.LOAD_REQUIRE({
                            PROPS: {
                                PATH: THIS.CONVERT.PATH_TO_FILE_GET_FOLDER_PATH({ path: path }),
                                DATA: fuc(THIS)
                            }
                        })
                    })

                }).catch(err => {

                })
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        }
    }


    THIS.READY = {


        READY_ROUTE_MAP: () => {

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

        READY_HAVE: () => {
            try {
                if (!THIS.IS.HAVE) {
                    THIS.IS.HAVE = THIS.PROPS.HAVE({
                        props: {
                            CSS_LIB: THIS.SETTING.PAGE.DEFAULT_PAGE_CSS_LIB(),
                            SCRIPT_LIB: THIS.SETTING.PAGE.DEFAULT_PAGE_SCRIPT_LIB(),
                        }
                    })

                    return THIS.IS.HAVE
                }

            } catch (error) {

            }
        }


    }



    THIS.REQUIRE = {
        PROPS: {
            LOAD_REQUIRE: ({ PROPS }) => {

                if (PROPS) {
                    return {
                        PATH: PROPS.PATH,
                        DATA: THIS.PROPS.PAGE_PROPS({ props: PROPS.DATA }),
                    }
                }


            }

        },



        THIS: {

            THIS: ({ props, callBack }) => {

                return {
                    START : () => {
                        THIS.REQUIRE.THIS.THIS({props: props, callBack: callBack}).COMPONENTS()
                    },

                    COMPONENTS: () => {

                        THIS.COMPONENTS.COMPONENTS({
                            props: THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({
                                props: {
                                    path: props.PATH,
                                    arr: props.DATA.REQUIRE.COMPONENTS,
                                    callBack: callBack.COMPONENTS,
                                }
                            })
                        })
                    },

                    CSS: () => {
                        THIS.CSS.CSS({
                            props: THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({
                                props: {
                                    path: props.PATH,
                                    arr: props.DATA.REQUIRE.CSS,
                                    callBack: callBack.CSS,
                                }
                            })
                        })
                    },

                    CSS_LIB: () => {
                        THIS.CSS.CSS_LIB({
                            props: THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({
                                props: {
                                    path: props.PATH,
                                    arr: props.DATA.REQUIRE.CSS_LIB,
                                    callBack: callBack.CSS_LIB,
                                }
                            })
                        })


                    },

                    SCRIPT: () => {
                        THIS.SCRIPT.SCRIPT({
                            props: THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({
                                props: {
                                    path: props.PATH,
                                    arr: props.DATA.REQUIRE.SCRIPT,
                                    callBack: callBack.SCRIPT,
                                }
                            })
                        })

                    },

                    SCRIPT_LIB: () => {
                        THIS.SCRIPT.SCRIPT_LIB({
                            props: THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({
                                props: {
                                    path: props.PATH,
                                    arr: props.DATA.REQUIRE.SCRIPT_LIB,
                                    callBack: callBack.SCRIPT_LIB,
                                }
                            })
                        })

                    }
                }
            },

            REQUIRE: ({ props }) => {
                try {
                    var DOUBLE = THIS.REQUIRE.THIS.THIS(
                        {
                            props: props,
                            callBack: {
                                COMPONENTS: () => DOUBLE.CSS(),
                                CSS: () => DOUBLE.CSS_LIB(),
                                CSS_LIB: () => DOUBLE.SCRIPT(),
                                SCRIPT: () => DOUBLE.SCRIPT_LIB(),
                                SCRIPT_LIB: () => THIS.REQUIRE.THIS.RUN({ props: props }),
                            }
                        }
                    )

                    DOUBLE.START()
                } catch (error) {

                }

            },

            RUN: ({ props }) => {
                try {
                    $(THIS.SETTING.THIS[props.DATA.RENDER.TO]).append(props.DATA.RENDER.FROM)
                    if (props.DATA.METHOD) {
                        props.DATA.METHOD()
                    }

                } catch (error) {
                    THIS.EX.ERROR({ err: error })
                }

            },


            LOAD: ({ PROPS }) => {
                try {
                    const iProps = THIS.REQUIRE.PROPS.LOAD_REQUIRE({ PROPS: PROPS })

                    THIS.READY.READY_HAVE()

                    THIS.REQUIRE.THIS.REQUIRE({ props: iProps})


                } catch (error) {
                    THIS.EX.ERROR({ err: error })
                }


            }

        },





        LOAD: ({ PROPS }) => {

            try {

                THIS.REQUIRE.THIS.LOAD({ PROPS: PROPS })

            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        }


    }






    THIS.VIEW = {
        SET: () => {
        }

    }


    THIS.ROUTE = {

        PROPS: {
            ADD: ({ props }) => {
                return {
                    path: props.path
                }

            },
            ROUTE: ({ props }) => {
                try {
                    return {
                        INCLUDE: props.INCLUDE,
                        COMPONENTS: props.COMPONENTS
                    }
                } catch (error) {
                    THIS.EX.ERROR({ err: error })
                }

            },
            RESPONSE_ROUTE: ({ props }) => {
                try {
                    return {
                        url: props.url,
                        response: THIS.ROUTE.PROPS.ROUTE({ props: props.response })
                    }
                } catch (error) {
                    THIS.EX.ERROR({ err: error })
                }

            },

            INNIT_GET: ({ props }) => {
                try {
                    return {
                        path: props.path,
                        map: props.map,
                        register: props.register,
                        callBack: props.callBack
                    }
                } catch (error) {
                    THIS.EX.ERROR({ err: error })
                }

            }

        },

        ADD: ({ props }) => {
            var iprops = THIS.ROUTE.PROPS.ADD({ props: props })

        },

        LOAD: ({ props }) => {
            

        },

        GET: ({ props }) => {
            var register = []
            var map = {}
            const NORMAL = THIS.SETTING.NORMAL
            const GET = ({ props }) => {
                var iprops = THIS.ROUTE.PROPS.INNIT_GET({ props: props })

                return new Promise((resolve, reject) => {

                    const success = ({ path }) => {
                        var load = register.find(x => x.src == path)
                        if (load && !load.load) {
                            load.load = NORMAL.TRUE
                            var loaded = NORMAL.NUMBER_ZERO
                            register.forEach(element => {
                                if (element.load) {
                                    loaded += NORMAL.NUMBER_ONE
                                }
                            });

                            if (loaded == THIS.EX.ARRAY_LENGTH({ arr: register })) {
                                iprops.callBack({
                                    props: THIS.ROUTE.PROPS.INNIT_GET({
                                        props: {
                                            path: path,
                                            map: map,
                                            register: register,
                                            callBack: iprops.callBack
                                        }
                                    })
                                })
                            }
                        }

                    }
                    THIS.THIS.GET_JSON({ path: iprops.path }).then(data => {
                        var iData = THIS.ROUTE.PROPS.RESPONSE_ROUTE({ props: data })
                        var pathToThis = THIS.CONVERT.PATH_TO_FILE_GET_FOLDER_PATH({ path: iprops.path })


                        if (!THIS.CHECK.IS_EMPRY({ ob: iData.response.INCLUDE })) {

                            if (!THIS.CHECK.IS_EMPRY({ ob: data.response.INCLUDE })) {

                                for (let index = NORMAL.NUMBER_ZERO; index < data.response.INCLUDE.length; index++) {
                                    var element = data.response.INCLUDE[index];
                                    var itemPath = THIS.EX.MAP_PATH({ path: pathToThis, subPath: element })

                                    register.push({
                                        src: itemPath,
                                        load: false,
                                        run: false
                                    })
                                }
                            }

                            for (let index = NORMAL.NUMBER_ZERO; index < register.length; index++) {
                                var element = register[index];
                                if (!element.load && !element.run) {
                                    element.run = NORMAL.TRUE
                                    GET({
                                        props: THIS.ROUTE.PROPS.INNIT_GET({
                                            props: {
                                                path: element.src,
                                                map: map, register: register, callBack: iprops.callBack
                                            }
                                        })
                                    })
                                }


                            }

                        }

                        if (THIS.CHECK.IS_OBJECT({ ob: iData.response.COMPONENTS })) {
                            var items = {}
                            Object.keys(iData.response.COMPONENTS).forEach(element => {
                                var item = THIS.PROPS.HAVE_PROPS({ props: iData.response.COMPONENTS[element] })
                                item.src = THIS.EX.MAP_PATH({ path: pathToThis, subPath: item.src })
                                items[element] = item

                            })
                            map = { ...items, ...map }
                        }

                        success({ path: iprops.path })
                        resolve(data)

                    })
                });
            }
            GET({ props: props })
        },

        INNIT: () => {
            try {

                const CURRENT = THIS.ROUTE




                var PATH = THIS.READY.READY_ROUTE_MAP()
                if (!PATH.MAP.PROPERTIES.MAP) {

                    THIS.ROUTE.GET({
                        props: CURRENT.PROPS.INNIT_GET({
                            props: {
                                path: THIS.SETTING.ROUTE.DEFAULT_PATH,
                                callBack: ({ props }) => {
                                    PATH.MAP.PROPERTIES.MAP = THIS.SETTING.NORMAL.TRUE
                                    PATH.MAP.ROUTE = { ...PATH.MAP.ROUTE, ...props.map }
                                    THIS.RENDER.FROM({
                                        props: THIS.RENDER.PROPS.FROM_RENDER_PROPS({
                                            props: {
                                                path: THIS.CONVERT.PATH_TO_FILE_GET_FOLDER_PATH({ path: THIS.SETTING.ROUTE.DEFAULT_PATH }),
                                                subPath: props.map.default.src
                                            }
                                        })
                                    })
                                }
                            }
                        })
                    })


                }
            } catch (error) {

            }

        },


        CHECK: () => {
            try {

                THIS.READY.READY_ROUTE_MAP()

                THIS.ROUTE.INNIT()

            } catch (error) {

            }

        }


    }

    THIS.INNIT = (PROPS) => {
        THIS.IS = (PROPS);
        PROPS.IS = (THIS)
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


