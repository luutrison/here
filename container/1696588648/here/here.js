
/**
 * WRITTEN BY LƯU TRÍ SƠN - A HANDSOME WRITTER
 **/

const OPTIONS_DZE2OTU2OTE3OTI4OTI = () => {
    const OPTIONS = {
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
            THANG_SYMBOL: "#",
            LEFT_SLASH_SYMBOL: "\\",
            EQUAL_SYMBOL: "=",
            LEFT_BRACKET_SYMBOL: "(",
            RIGHT_BRACKET_SYMBOL: ")",
            LEFT_SARO_SYMBOL: "<",
            RIGHT_SARO_SYMBOL: ">",
            LEFT_QUERA_SYMBOL: "[",
            RIHGT_QUERA_SYMBOL: "]",
            COMMA_SYMBOL: ",",
            COOKIE_EXPIRES: "expires=",
            COOKIE_PATH: "path=",
            STRING_EMPTY: "",
            NHAY_SYMBOL: "\"",
            SINGLE_NHAY_SYMBOL: "'",
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
        NUMBER: {
            ONE_HUNDRED: 100,
            TWO_HUNDRED: 200,
            THREE_HUNDRED: 300,
            FOUR_HUNDRED: 400,
            FIVE_HUNDRED: 500,
        },
        NAME: {
            LOCAL_STORAGE_HISTORY: "_LSH_"
        },
        SPLIT: {
            RENDER: "RENDER",
            VIEW: "VIEW",
            FROM: "FROM",
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

        COOKIE: {
            COOKIE_APP_NAME: "_CA_",
            COOKIE_EXPIRES_HOURS_DEFAULT: 5,
        },
        ATTRIBUTE: {
            SRC_NAME: "src",
            HREF_NAME: "href",
            NAME_NAME: "name",
            NAME_REL: "rel",
            STATUS: "status",
            DATA: "data",

            CLOCK_EFFECT_SLIDE: "SLIDE",
            CLOCK_EFFECT_ANIMATE: "ANIMATE"
        },
        REPLACE: {
            RELEASE_RPLACE: "@{release}"
        },
        ATTRIBUTE_VALUE: {
            REL_STYLESHEET: "stylesheet",
            CSS_LEVEL_ONE_NAME: "one",
            CSS_LEVEL_TWO_NAME: "two",
        },
        EVENT: {
            LOAD: "load",
            CLICK: "click"
        },
        CURRENT: {
            PAGE_CONFIG_ELEMENT: $('meta[name="status"]')
        },
        MODULES: {
            MODULE_PATH: "/modules.json"
        },
        ROUTE: {
            DEFAULT_PATH: "/route.json",
            BOUNDER_PATH: "/bounder/bounder.json",
            HISTORY: {
                MAX_SAVE: 20,
                CONTAINER_NAME: "html"
            },
            DEFAULT_ROUTE_NAME: "default"
        },
        MESSAGE: {
            PATH_INVALID: "PATH is invalid (Path containt an invalid character)\n",
            PATH_INVALID_OUT: "PATH was out or invalid\n",
            PATH_LOCATION: "PATH location is not exist\n",
            INVALID_DATA: "DATA is invalid !\n",
            INVALID_ROUTE: "ROUTE IS INVALID !"
        },
        HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM: {
            BASE_PATH: "./here"
        },
        SETTING: {
            SETTING_PATH: "../setting.json"
        },
        TAG: {
            CSS_NAME: "css",

            HEAD_NAME: "head",
            SCRIPT_NAME: "script",
            BODY_NAME: "body",
            STYLE_NAME: "style",
            LINK_NAME: "link",

            METHOD: {
                CREATE_LINK_CSS: ({ name, src }) => {
                    var tag = document.createElement(OPTIONS.TAG.LINK_NAME)
                    tag.setAttribute(OPTIONS.ATTRIBUTE.NAME_REL, OPTIONS.ATTRIBUTE_VALUE.REL_STYLESHEET)
                    tag.setAttribute(OPTIONS.ATTRIBUTE.HREF_NAME, src)
                    tag.setAttribute(OPTIONS.ATTRIBUTE.NAME_NAME, name)
                    return tag
                },
                CREATE_STYLE_CSS: ({ name, css }) => {
                    if (name && css) {
                        const NORMAL = OPTIONS.NORMAL

                        const startTag = NORMAL.LEFT_SARO_SYMBOL + OPTIONS.TAG.STYLE_NAME + NORMAL.SPACE
                            + OPTIONS.ATTRIBUTE.NAME_NAME + NORMAL.EQUAL_SYMBOL + NORMAL.SINGLE_NHAY_SYMBOL
                            + name + NORMAL.SINGLE_NHAY_SYMBOL + NORMAL.RIGHT_SARO_SYMBOL

                        const endTag = NORMAL.LEFT_SARO_SYMBOL + OPTIONS.TAG.STYLE_NAME + NORMAL.RIGHT_SARO_SYMBOL

                        var tag = startTag + css + endTag

                        return tag
                    }
                },
            }
        },
    }

    return OPTIONS
}


const HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM = (props) => {

    const THIS = {}

    THIS.OPTIONS = OPTIONS_DZE2OTU2OTE3OTI4OTI

    THIS.EX = {

        ERROR: ({ err, sub }) => {
            console.error(err + THIS.OPTIONS().NORMAL.SPACE + sub);
        },
        LOOPER_CHECKER: ({ arrName, timeLoop, callBack }) => {
            try {
                const looper = () => {
                    setTimeout(() => {
                        if (Array.isArray(arrName)) {
                            var load = true
                            arrName.forEach((element, num) => {
                                const enc = $(element)
                                if (THIS.CHECK.IS_ARRAY_EMPTY({ ob: enc })) {
                                    load = false
                                }
                                if (num == THIS.EX.TRUE_ARRAY_LENGTH({ arr: arrName })) {
                                    if (load) {
                                        callBack()
                                    }
                                    else {
                                        looper()
                                    }
                                }
                            })
                        }
                    }, timeLoop);

                }
                looper()
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }
        },
        GET_OBJECT_FROM_ARRAY_NAME: ({ arr, object }) => {
            try {
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: arr }) && object) {
                    var parse = false
                    var current = THIS.OPTIONS().NORMAL.OBJECT_EMPTY
                    const sortArr = THIS.EX.ARRAY_REMOVE_EMPTY({ arr: arr })
                    sortArr.forEach(element => {
                        if (!parse && object[element]) {
                            current = object[element]
                            parse = THIS.OPTIONS().NORMAL.TRUE
                        }
                        else if (current[element]) {
                            current = current[element]
                        }
                    })

                    return current
                }
            } catch (err) { THIS.EX.ERROR({ err: err }) }
        },
        ARRAY_TO_STRING: (arr) => {
            try {
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: arr })) {
                    var str = String();
                    arr.forEach(element => {
                        str += element;
                    });
                    return str
                }
                else {
                    THIS.EX.ERROR({ err: error })
                    return String()
                }
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }
        },

        ARRAY_REMOVE_EMPTY: ({ arr }) => {
            try {
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: arr })) {
                    var arro = THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                    arr.forEach(element => {
                        if (element != String()) {
                            arro.push(element)
                        }
                    });

                    return arro
                }
                else {
                    return THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                }
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        TRUE_ARRAY_LENGTH: ({ arr }) => {
            try {
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: arr })) {
                    return arr.length - THIS.OPTIONS().NORMAL.NUMBER_ONE
                }
            } catch (error) {
                THIS.EX.ERROR({ err: THIS.OPTIONS().MESSAGE.INVALID_DATA + arr })
            }
        },
        ARRAY_LENGTH: ({ arr }) => {
            try {
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: arr })) {
                    return arr.length
                }
            } catch (error) {
                THIS.EX.ERROR({ err: THIS.OPTIONS().MESSAGE.INVALID_DATA + arr })
            }
        },

        MAP_PATH: ({ path, subPath }) => {
            try {
                var NORMAL = THIS.OPTIONS().NORMAL
                var pathStart = THIS.CONVERT.TRIM_STRING({ str: path })
                var arrPathStart = Array.from(pathStart);

                var PATH_RETURN = NORMAL.STRING_EMPTY



                if (arrPathStart[THIS.EX.TRUE_ARRAY_LENGTH({ arr: arrPathStart })] != NORMAL.RIGHT_SLASH_SYMBOL) {
                    arrPathStart.push(NORMAL.RIGHT_SLASH_SYMBOL)
                }

                var arrSubPath = Array.from(subPath)

                var isAbsolute = false;

                THIS.OPTIONS().PATH.ARRAY_ABSOLUTE_PATH_CONTAIN.forEach(element => {
                    if (String(path).search(element) >= NORMAL.NUMBER_ZERO) {
                        isAbsolute = true
                    }
                });

                THIS.OPTIONS().PATH.ARRAY_ABSOLUTE_PATH_CONTAIN.forEach(element => {
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
                            subPath: arrSubPathe,
                        }).split(NORMAL.RIGHT_SLASH_SYMBOL)
                    }).join(NORMAL.RIGHT_SLASH_SYMBOL)
                }

                return PATH_RETURN
            } catch (error) {
                THIS.EX.ERROR(THIS.OPTIONS().MESSAGE.PATH_INVALID);
            }

        }



    }

    THIS.STEP = {
        THIS: {
            STEP: ({ callBack }) => {
                try {


                    return {
                        INNIT: () => {
                            THIS.STEP.THIS.STEP({ callBack: callBack }).SETTING()
                        },

                        SETTING: () => {
                            THIS.SETTING.INNIT({
                                callBack: callBack.SETTING
                            })
                        },

                        REGISTER: () => {

                        }

                    }
                } catch (error) { THIS.EX.ERROR({ err: error }) }


            }
        },

        INNIT: () => {
            try {
                const callBack = {
                    SETTING: () => {
                        THIS.ROUTE.INNIT.THIS.MODULES(
                            [
                                THIS.ROUTE.INNIT.THIS.BOUNDER,
                                THIS.ROUTE.INNIT.THIS.ROUTE,
                                THIS.ROUTE.HISTORY.INNIT
                            ]
                        )
                       
                    }
                }
                THIS.STEP.THIS.STEP({ callBack: callBack }).INNIT()
            } catch (err) { }

        }

    }


    THIS.CONVERT = {

        PATH_HEAD_EMPTY: ({ pathArr }) => {
            try {
                const NORMAL = THIS.OPTIONS().NORMAL
                const invalidCharacter = [NORMAL.DOT_SYMBOL, NORMAL.DOUBLE_DOT_SYMBOL, NORMAL.RIGHT_SLASH_SYMBOL]
                var isValidPath = false

                while (!isValidPath && !THIS.CHECK.IS_ARRAY_EMPTY({ ob: pathArr })) {
                    if (invalidCharacter.find(x => x == pathArr[THIS.OPTIONS().NORMAL.NUMBER_ZERO]) || THIS.CHECK.IS_ARRAY_EMPTY({ ob: pathArr[THIS.OPTIONS().NORMAL.NUMBER_ZERO] })) {
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

        SPECIAL_CONTENT: ({ content }) => {
            try {
                if (THIS.CURRENT.PROPERTIES.STATUS) {
                    const release = THIS.CURRENT.PROPERTIES.STATUS.release
                    if (release) {
                        content = String(content).replaceAll(THIS.OPTIONS().REPLACE.RELEASE_RPLACE, release)
                    }
                }

                return content
            } catch (err) {
                THIS.EX.ERROR({ err: err })

            }
        },

        TO_ATTRIBUTE_QUERY: ({ name, value }) => {
            try {
                const NORMAL = THIS.OPTIONS().NORMAL
                const query = NORMAL.LEFT_QUERA_SYMBOL + name + NORMAL.EQUAL_SYMBOL +
                    NORMAL.SINGLE_NHAY_SYMBOL + value
                    + NORMAL.SINGLE_NHAY_SYMBOL + NORMAL.RIHGT_QUERA_SYMBOL

                return query
            } catch (error) { }

        },

        PATH_TO_NAME: ({ path }) => {
            try {

                var pathArr = Array.from(path)

                pathArr = THIS.CONVERT.PATH_HEAD_EMPTY({ pathArr: pathArr })
                pathArr = THIS.CONVERT.PATH_ASS_EMPTY({ pathArr: pathArr })

                return pathArr.join(String()).replaceAll(THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL, THIS.OPTIONS().NORMAL.DOT_SYMBOL)
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        PATH_ASS_EMPTY: ({ pathArr }) => {
            try {
                const NORMAL = THIS.OPTIONS().NORMAL
                const invalidCharacter = [NORMAL.DOT_SYMBOL, NORMAL.DOUBLE_DOT_SYMBOL, NORMAL.RIGHT_SLASH_SYMBOL]
                var isValidPath = false

                while (!isValidPath && !THIS.CHECK.IS_ARRAY_EMPTY({ ob: pathArr })) {
                    if (invalidCharacter.find(x => x == pathArr[THIS.EX.TRUE_ARRAY_LENGTH({ arr: pathArr })]) || THIS.CHECK.IS_ARRAY_EMPTY({ ob: pathArr[THIS.EX.TRUE_ARRAY_LENGTH({ arr: pathArr })] })) {
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

        PATH_RELEASE: ({ path }) => {
            const RELEASE = THIS.CURRENT.PROPERTIES.STATUS.release
            var RELEASE_PATH = String()
            if (RELEASE) {
                RELEASE_PATH = RELEASE
            }
            return THIS.EX.MAP_PATH({ path: RELEASE_PATH, subPath: path })
        },


        LOGIC_PATH: ({ path, subPath }) => {

            try {
                const arrEmpty = THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                var pathArr = THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                var subPathArr = THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                var haveOriginUrl = THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                var pathSplit = THIS.CONVERT.TRIM_STRING({ str: path }).split(THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL)
                var subPathSplit = THIS.CONVERT.TRIM_STRING({ str: subPath }).split(THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL)
                var status = {
                    pathEnd: false,
                    subPathEnd: false
                }


                if (THIS.OPTIONS().PATH.ARRAY_ORIGIN_METHOD.find(x => {
                    if (String(path).search(x) >= THIS.OPTIONS().NORMAL.NUMBER_ZERO) {
                        return true
                    }
                })) {
                    haveOriginUrl = path.split(THIS.OPTIONS().NORMAL.DOUBLE_RIGHT_SLASH_SYMBOL)
                    pathSplit = haveOriginUrl[THIS.OPTIONS().NORMAL.NUMBER_ONE].split(THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL)
                    haveOriginUrl[THIS.OPTIONS().NORMAL.NUMBER_ONE] = pathSplit.shift()
                }

                pathSplit = THIS.EX.ARRAY_REMOVE_EMPTY({ arr: pathSplit })
                subPathSplit = THIS.EX.ARRAY_REMOVE_EMPTY({ arr: subPathSplit })

                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: pathSplit })) {

                    pathSplit.forEach(element => {
                        if (!status.pathEnd) {
                            if (element == THIS.OPTIONS().NORMAL.DOUBLE_DOT_SYMBOL) {
                                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: pathArr })) {
                                    pathArr.pop()
                                }
                                else {
                                    status.pathEnd = true
                                    THIS.EX.ERROR({ err: THIS.OPTIONS().MESSAGE.PATH_INVALID_OUT })
                                }
                            }
                            else if (element != THIS.OPTIONS().NORMAL.DOT_SYMBOL) {
                                pathArr.push(element)
                            }
                        }
                        else {
                            return
                        }

                    });

                }

                if (!status.pathEnd) {
                    if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: subPathSplit })) {
                        subPathSplit.forEach(element => {
                            if (!status.subPathEnd) {
                                if (element == THIS.OPTIONS().NORMAL.DOUBLE_DOT_SYMBOL) {
                                    if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: subPathArr })) {
                                        subPathArr.pop()
                                    }
                                    else {
                                        if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: pathArr })) {
                                            pathArr.pop()
                                        }
                                        else {
                                            status.pathEnd = true
                                            status.subPathEnd = true
                                            THIS.EX.ERROR({
                                                err: THIS.OPTIONS().MESSAGE.PATH_INVALID_OUT + THIS.OPTIONS().NORMAL.SPACE + path
                                                    + THIS.OPTIONS().NORMAL.SPACE + subPath
                                            })
                                        }
                                    }
                                }
                                else if (element != THIS.OPTIONS().NORMAL.DOT_SYMBOL) {
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
                    var origin = String()
                    if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: haveOriginUrl })) {
                        origin = THIS.EX.ARRAY_REMOVE_EMPTY({ arr: haveOriginUrl }).join(THIS.OPTIONS().NORMAL.DOUBLE_RIGHT_SLASH_SYMBOL) + THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL
                    }



                    var pathReturn = origin + THIS.CONVERT.PATH_ASS_EMPTY({ pathArr: pathArr }).join(THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL) +
                        THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL +
                        THIS.CONVERT.PATH_HEAD_EMPTY({ pathArr: subPathArr }).join(THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL)


                    const pathThis = THIS.CONVERT.REMOVE_DUPLICATE.SYMBOL({
                        props: THIS.CONVERT.REMOVE_DUPLICATE.PROPS.SYMBOL({
                            props: {
                                symbol: THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL,
                                content: pathReturn,
                                replace: THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL,
                                keep: THIS.OPTIONS().NORMAL.NUMBER_ONE,
                                special: THIS.OPTIONS().PATH.ARRAY_ORIGIN_METHOD
                            }
                        })
                    })

                    return pathThis
                }
                else {
                    return String()
                }


            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        PATH_TO_FILE_GET_FOLDER_PATH: ({ path }) => {

            try {
                var arrPath = String(path).split(THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL)
                arrPath.pop()
                return arrPath.join(THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL)
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }
        },

        TRIM_STRING: ({ str }) => {
            try {
                return String(str).toString().trim()
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        EMPTY_ARRAY: () => {
            try {
                return arr = THIS.OPTIONS().NORMAL.ARRAY_EMPTY
            } catch (error) {
                THIS.EX.ERROR({ err: error });
            }
        },
        TO_STRING: (props) => {
            try {
                const iProps = props
                if (iProps.specialSymbol) {
                    return THIS.OPTIONS().NORMAL.NHAY_CHAR_SYMBOL + iProps.specialSymbol + iProps.content + iProps.specialSymbol + THIS.OPTIONS().NORMAL.NHAY_CHAR_SYMBOL;

                }
                else {
                    return THIS.OPTIONS().NORMAL.NHAY_CHAR_SYMBOL + iProps.content + THIS.OPTIONS().NORMAL.NHAY_CHAR_SYMBOL;

                }
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },
        TO_STRING_NO_BREAK: (props) => {
            try {
                return props.replaceAll(THIS.OPTIONS().NORMAL.BREAK_LINE_SYMBOL, String());
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

        TO_STRING_WITH_NHAY_SPECIAL: (props) => {
            try {
                return props.replaceAll(THIS.OPTIONS().NORMAL.NHAY_SYMBOL, THIS.OPTIONS().NORMAL.NHAY_SYMBOL_SPECIAL);
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
                    const NORMAL = THIS.OPTIONS().NORMAL
                    const iprops = THIS.CONVERT.REMOVE_DUPLICATE.PROPS.SYMBOL({ props: props })
                    const arr = [...String(iprops.content)]
                    var content = String(iprops.content)
                    var maxSpace = NORMAL.NUMBER_ZERO;
                    var maxNow = NORMAL.NUMBER_ZERO;
                    var parseSpecial = THIS.OPTIONS().NORMAL.ARRAY_EMPTY

                    iprops.special.forEach(element => {
                        const arr = String(element).split(iprops.symbol)
                        parseSpecial.push([arr[NORMAL.NUMBER_ZERO], arr[NORMAL.NUMBER_ONE]])
                    });


                    for (let index = 0; index < arr.length; index++) {
                        const element = arr[index];
                        if (element == iprops.symbol) {
                            if (index != THIS.EX.TRUE_ARRAY_LENGTH({ arr: arr }) && arr[index + THIS.OPTIONS().NORMAL.NUMBER_ONE]) {
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
                        var spaces = String();
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

        TO_RUNABLE_JAVASCRIPT: (codeIn) => {


            try {
                const num_zero = THIS.OPTIONS().NORMAL.NUMBER_ZERO
                const num_one = THIS.OPTIONS().NORMAL.NUMBER_ONE
                const stringContent = String(codeIn)
                var split_one = stringContent.split(THIS.OPTIONS().SPLIT.RENDER)
                var split_three = split_four = split_five = String()
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: split_one })) {
                    split_three = split_one[num_one].split(THIS.OPTIONS().SPLIT.FROM)

                }
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: split_three })) {
                    split_four = split_three[num_one].split(THIS.OPTIONS().NORMAL.LEFT_BRACKET_SYMBOL)

                }
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: split_four })) {
                    split_five = split_four[num_one].split(THIS.OPTIONS().NORMAL.RIGHT_BRACKET_SYMBOL)
                }

                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: split_five })) {
                    const content = split_five[num_zero]

                    const other = stringContent.split(THIS.OPTIONS().SPLIT.RENDER)[num_one].split(THIS.OPTIONS().NORMAL.RIGHT_BRACKET_SYMBOL)

                    var path = String();

                    for (let index = 1; index < other.length; index++) {
                        if (index != THIS.EX.TRUE_ARRAY_LENGTH({ arr: other })) {
                            path += other[index] + THIS.OPTIONS().NORMAL.RIGHT_BRACKET_SYMBOL
                        }
                        else {
                            path += other[index]
                        }

                    }

                    const contentln = THIS.CONVERT.TO_STRING({ content: content })

                    const runable = split_one[num_zero] + THIS.OPTIONS().SPLIT.RENDER +
                        split_three[num_zero] + THIS.OPTIONS().SPLIT.FROM +
                        split_four[num_zero] + THIS.OPTIONS().NORMAL.LEFT_BRACKET_SYMBOL +
                        contentln + THIS.OPTIONS().NORMAL.RIGHT_BRACKET_SYMBOL + path;
                    return runable

                }
                else {
                    return codeIn
                }


            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },

    }


    THIS.THIS = {
        GET: ({ path }) => {
            try {
                return new Promise((resolve, reject) => {
                    const rpath = THIS.CONVERT.PATH_RELEASE({ path })
                    const ipath = THIS.CONVERT.PATH_ORIGIN({ path: rpath })
                    fetch(ipath).then((response) => {
                        resolve({ url: response.url, response: response })
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
                        const iResponse = res
                        iResponse.response.json().then(data => {
                            resolve({ url: iResponse.url, response: data })
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
                        const iResponse = res
                        iResponse.response.text().then(data => {
                            resolve({ url: iResponse.url, response: data })
                        })
                    }).catch(err => reject(err))

                });
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        }

    }




    THIS.CHECK = {
        IS_ARRAY_EMPTY: ({ ob }) => {
            if (ob && ob.length > 0) {
                return false
            }
            else {
                return true
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

        IS_QUERY_ELEMENT: ({ name }) => {
            try {
                var arrContent = Array.from(THIS.CONVERT.TRIM_STRING({ str: name }))
                const arrCheck = [THIS.OPTIONS().NORMAL.DOT_SYMBOL, THIS.OPTIONS().NORMAL.THANG_SYMBOL]
                const same = arrCheck.find(i => i == arrContent[THIS.OPTIONS().NORMAL.NUMBER_ZERO])

                if (same) {
                    return true
                }
                else {
                    return false
                }

            } catch (error) { THIS.EX.ERROR({ err: error }) }

        }

    }


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
                    $(element).on(THIS.OPTIONS().EVENT.LOAD, function (e) {
                        event(e);
                    });
                }
            })
        },
        SET_EVENT_BY_NAME: ({ element, name, callBack }) => {
            $(element).on(name, function (e) {
                callBack(e)
            });
        }

    }



    THIS.METHOD = {

        PROPS: {
            REQUIRE_THINGS_PROPS: ({ props }) => {
                try {
                    return {
                        path: props.path,
                        ob: props.ob,
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

        REQUIRE_THINGS: ({ tagName, levelTag, tagAppend, props, haveObject, mode }) => {
            try {
                const NORMAL = THIS.OPTIONS().NORMAL
                const iprops = THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({ props: props })

                if (tagAppend && tagName) {

                    const nameAttribute = THIS.CONVERT.TO_ATTRIBUTE_QUERY(
                        {
                            name: THIS.OPTIONS().ATTRIBUTE.NAME_NAME, value: levelTag
                        }
                    )


                    const require = $(tagName + nameAttribute)

                    if (THIS.CHECK.IS_ARRAY_EMPTY({ ob: require })) {
                        var tag = document.createElement(tagName)
                        tag.setAttribute(THIS.OPTIONS().ATTRIBUTE.NAME_NAME, levelTag)
                        $(tagAppend).append(tag)
                    }

                    tagName = tagName + nameAttribute

                }

                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: iprops.ob })) {

                    var arrName = NORMAL.ARRAY_EMPTY

                    const OH = () => {
                        var isLoad = true

                        arrName.forEach((name, index) => {
                            var notLoad = haveObject.find(x => x.name == name)
                            if (notLoad && !notLoad.load) {
                                isLoad = false
                            }

                            if (index == THIS.EX.TRUE_ARRAY_LENGTH({ arr: arrName })) {
                                if (isLoad) {
                                    iprops.callBack()
                                }
                            }

                        });
                    }

                    iprops.ob.forEach(element => {

                        if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: String(element.src).trim() })) {
                            const path = THIS.EX.MAP_PATH({ path: iprops.path, subPath: element.src, release: true })

                            if (THIS.CHECK.IS_ARRAY_EMPTY({ ob: element.name })) {
                                element.name = THIS.CONVERT.PATH_TO_NAME({ path: path })
                            }

                            arrName.push(element.name)

                            const item = haveObject.find(x => x.name == element.name)

                            if (THIS.CHECK.IS_ARRAY_EMPTY({ ob: item })) {
                                if (mode) {
                                    if (mode.name == THIS.OPTIONS().MODE.COMPONENTS_NAME) {

                                        const exist = haveObject.find(i => i.name == element.name)

                                        if (!THIS.CHECK.IS_OBJECT({ ob: exist })) {
                                            haveObject.push({
                                                src: element.src,
                                                name: element.name,
                                                load: NORMAL.FALSE,
                                            })


                                            THIS.THIS.GET_TEXT({ path: path }).then(data => {
                                                if (mode.map) {
                                                    try {
                                                        const code = eval(data.response)
                                                        const item = mode.map.find(x => x.name == element.name)
                                                        if (!item) {
                                                            mode.map[element.name] = code
                                                        }
                                                        const added = haveObject.find(x => x.name == element.name)
                                                        added.load = NORMAL.TRUE
                                                        OH()
                                                    } catch (error) {
                                                        THIS.EX.ERROR({ err: error })
                                                    }

                                                }
                                            })
                                        }
                                        else {
                                            OH()
                                        }
                                    }

                                }
                                else {
                                    const exis = haveObject.find(i => i.name == element.name)
                                    if (!THIS.CHECK.IS_OBJECT({ ob: exis })) {
                                        haveObject.push({
                                            src: element.src,
                                            name: element.name,
                                            load: NORMAL.FALSE,
                                        })



                                        const attribute = THIS.CONVERT.TO_ATTRIBUTE_QUERY({
                                            name: THIS.OPTIONS().ATTRIBUTE.NAME_NAME,
                                            value: element.name
                                        })

                                        const styleQuery = THIS.OPTIONS().TAG.STYLE_NAME + NORMAL.SPACE + attribute


                                        const exist = $(tagName).find(styleQuery)

                                        if (THIS.CHECK.IS_ARRAY_EMPTY({ ob: exist })) {

                                            THIS.THIS.GET_TEXT({ path: path }).then(data => {
                                                const res = data.response

                                                const resData = THIS.CONVERT.SPECIAL_CONTENT({ content: res })

                                                const tag = THIS.OPTIONS().TAG.METHOD.CREATE_STYLE_CSS({
                                                    name: element.name,
                                                    css: resData
                                                })
                                                const item = haveObject.find(x => x.name == element.name)
                                                item.load = NORMAL.TRUE
                                                $(tagName).append(tag);
                                                OH()
                                            })

                                        }

                                    }
                                    else {
                                        OH()
                                    }

                                }

                            }
                            else {
                                iprops.callBack()
                            }
                        }
                        else {
                            iprops.callBack()
                        }
                    });
                }
                else {
                    iprops.callBack()
                }
            } catch (error) {
                THIS.EX.ERROR({ err: error, sub: "require things" })
            }
        },

        LOAD_MODULES: ({ arrModule, callBack }) => {
            try {
                if (THIS.CHECK.IS_OBJECT({ ob: arrModule })) {
                    const OPTIONS = THIS.OPTIONS()

                    const nameAttribute = THIS.CONVERT.TO_ATTRIBUTE_QUERY(
                        {
                            name: OPTIONS.ATTRIBUTE.NAME_NAME,
                            value: OPTIONS.ATTRIBUTE_VALUE.CSS_LEVEL_ONE_NAME
                        }
                    )
                    const tagsName = OPTIONS.TAG.CSS_NAME + nameAttribute
                    const tagsAppend = $(tagsName)

                    if (THIS.CHECK.IS_ARRAY_EMPTY({ ob: tagsAppend })) {
                        var tag = document.createElement(OPTIONS.TAG.CSS_NAME)
                        tag.setAttribute(OPTIONS.ATTRIBUTE.NAME_NAME, OPTIONS.ATTRIBUTE_VALUE.CSS_LEVEL_ONE_NAME)
                        $(OPTIONS.TAG.HEAD_NAME).append(tag)
                    }
                    const currentPath = THIS.CONVERT.PATH_TO_FILE_GET_FOLDER_PATH({ path: OPTIONS.MODULES.MODULE_PATH })
                    const OH = () => {
                        var arrScript = THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                        var arrCss = THIS.OPTIONS().NORMAL.ARRAY_EMPTY

                        arrModule.forEach(elements => {
                            if (elements.LOAD_SCRIPT) {
                                arrScript.push(elements)
                            }

                            if (elements.LOAD_CSS) {
                                arrCss.push(elements)
                            }
                        })

                        const sc = arrScript.find(i => i.LOAD_SCRIPT == false)
                        const scs = arrCss.find(i => i.LOAD_CSS == false)
                        const scr = arrCss.find(i => i.LOAD_REQUIRE == false)

                        if (!sc && !scs && !scr) {
                            callBack()
                        }
                    }


                    arrModule.forEach(element => {

                        if (element.SCRIPT && !element.LOAD_SCRIPT) {
                            const scriptPath = THIS.EX.MAP_PATH({ path: currentPath, subPath: element.SCRIPT })
                            THIS.THIS.GET_TEXT({ path: scriptPath }).then(data => {
                                try {

                                    const content = data.response
                                    const rinegan = eval(content)
                                    if (rinegan) {
                                        THIS.MODULES.INNIT[element.NAME] = rinegan
                                    }
                                    element.LOAD_SCRIPT = true
                                    OH()
                                } catch (error) {
                                    THIS.EX.ERROR({ err: error })
                                }
                            })


                        }

                        if (element.REQUIRE && !element.LOAD_REQUIRE) {
                            const requirePath = THIS.EX.MAP_PATH({ path: currentPath, subPath: element.REQUIRE })
                            THIS.THIS.GET({ path: requirePath }).then(data => {
                                try {
                                    element.LOAD_REQUIRE = true
                                    OH()
                                } catch (error) {
                                    THIS.EX.ERROR({ err: error })
                                }
                            })
                        }


                        if (element.CSS && !element.LOAD_CSS) {
                            const cssPath = THIS.EX.MAP_PATH({ path: currentPath, subPath: element.CSS })
                            var haveObject = THIS.IS.HAVE.CSS_LIB
                            const NORMAL = THIS.OPTIONS().NORMAL
                            const name = THIS.CONVERT.PATH_TO_NAME({ path: cssPath })
                            const exis = haveObject.find(i => i.name == name)
                            if (!THIS.CHECK.IS_OBJECT({ ob: exis })) {
                                haveObject.push({
                                    src: element.CSS,
                                    name: name,
                                    load: NORMAL.FALSE,
                                })

                                const attribute = THIS.CONVERT.TO_ATTRIBUTE_QUERY({
                                    name: THIS.OPTIONS().ATTRIBUTE.NAME_NAME,
                                    value: element.name
                                })

                                const styleQuery = THIS.OPTIONS().TAG.STYLE_NAME + NORMAL.SPACE + attribute


                                const exist = $(tagsName).find(styleQuery)

                                if (THIS.CHECK.IS_ARRAY_EMPTY({ ob: exist })) {

                                    THIS.THIS.GET_TEXT({ path: cssPath }).then(data => {
                                        const res = data.response
                                        const resData = THIS.CONVERT.SPECIAL_CONTENT({ content: res })

                                        const tag = THIS.OPTIONS().TAG.METHOD.CREATE_STYLE_CSS({
                                            name: name,
                                            css: resData
                                        })
                                        var item = haveObject.find(x => x.name == name)
                                        if (item) {
                                            item.load = NORMAL.TRUE
                                        }
                                        $(tagsName).append(tag);
                                        OH()
                                    })

                                }

                            }

                        }
                    })
                }
            } catch (error) { THIS.EX.ERROR({ err: error }) }

        }

    }

    THIS.MODULES = {
        GET: ({ path, callBack }) => {
            try {
                var arrLoading = []
                var require = []
                const GET = (path) => {
                    THIS.THIS.GET_JSON({ path: path }).then((data) => {
                        const modules = data.response
                        const exi = require.find(i => i.url == path)
                        const pathToThis = THIS.CONVERT.PATH_TO_FILE_GET_FOLDER_PATH({ path: path })

                        if (exi) {
                            exi.load = true
                        }

                        if (modules.INCLUDE && Array.isArray(modules.INCLUDE)) {
                            modules.INCLUDE.forEach(element => {
                                const item = require.find(i => i.url == element)
                                if (!item) {
                                    const elementPath = THIS.EX.MAP_PATH({
                                        path: pathToThis,
                                        subPath: element
                                    })
                                    require.push({
                                        url: elementPath,
                                        load: false
                                    })
                                    GET(elementPath)
                                }

                            })
                        }


                        if (THIS.CHECK.IS_OBJECT({ ob: modules.MODULES })) {
                            Object.keys(modules.MODULES).forEach(element => {

                                var MODULES = modules.MODULES[element]


                                if (MODULES.SCRIPT) {
                                    if (Array.isArray(MODULES.SCRIPT)) {
                                        MODULES.SCRIPT.forEach(arrItem => {
                                            arrLoading.push({
                                                NAME: element,
                                                SCRIPT: THIS.EX.MAP_PATH({
                                                    path: pathToThis,
                                                    subPath: arrItem
                                                }),
                                                LOAD_SCRIPT: false,
                                            })
                                        })

                                    }
                                    else {
                                        arrLoading.push({
                                            NAME: element,
                                            SCRIPT: THIS.EX.MAP_PATH({
                                                path: pathToThis,
                                                subPath: MODULES.SCRIPT
                                            }),
                                            LOAD_SCRIPT: false,
                                        })
                                    }
                                }

                                if (MODULES.CSS) {
                                    if (Array.isArray(MODULES.CSS)) {
                                        MODULES.CSS.forEach(arrItem => {
                                            arrLoading.push({
                                                NAME: element,
                                                CSS: THIS.EX.MAP_PATH({
                                                    path: pathToThis,
                                                    subPath: arrItem
                                                }),
                                                LOAD_CSS: false,
                                            })
                                        })

                                    }
                                    else {
                                        arrLoading.push({
                                            NAME: element,
                                            CSS: THIS.EX.MAP_PATH({
                                                path: pathToThis,
                                                subPath: MODULES.CSS
                                            }),
                                            LOAD_CSS: false,
                                        })
                                    }
                                }

                            })


                        }

                        if(!THIS.CHECK.IS_ARRAY_EMPTY({ob: modules.REQUIRE})){
                            modules.REQUIRE.forEach(element => {
                                arrLoading.push({
                                    REQUIRE: THIS.EX.MAP_PATH({
                                        path: pathToThis,
                                        subPath: element
                                    }),
                                    LOAD_REQUIRE: false,
                                })
                            })
                        }

                        const loaded = require.find(i => i.load == false)

                        if (!loaded) {
                            THIS.METHOD.LOAD_MODULES({
                                arrModule: arrLoading,
                                callBack: callBack
                            })
                        }
                    })
                }

                GET(path)

            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        }

    }

    THIS.UI = {
        THIS: () => {
            return THIS.MODULES.INNIT.UI_AJE2OTCXODEXMJC2ODG()
        },

        INNIT: ({ props }) => {
            try {
                const CURRENT = THIS.UI.THIS().UI
                CURRENT.ON({ props: props })
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }
        },

        UPDATE: () => {
            try {
                const UPDATER = THIS.IS.SETTING.HERE_UI_UPDATE_BTE2OTCXODM3OTC4NZE

                if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: UPDATER })) {
                    UPDATER.forEach(element => {

                        if (THIS.CHECK.IS_OBJECT({ ob: element })) {
                            if (element && element.UPDATE) {
                                element.UPDATE()
                            }
                        }
                        else {
                            const func = element()
                            if (func && func.UPDATE) {
                                func.UPDATE()
                            }
                        }
                    })
                }
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }
        }

    }


    THIS.UPDATE = {
        ON: () => {
            try {
                THIS.UI.UPDATE()
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        }
    }


    THIS.RENDER = {

        PROPS: {

        },

        THIS: {
            DATA: ({ props }) => {
                try {
                    var iprops = {
                        path: props.path,
                        this: props.this
                    }
                    THIS.THIS.GET_TEXT({ path: iprops.path }).then(data => {
                        try {
                            const idata = data
                            const code = THIS.CONVERT.TO_RUNABLE_JAVASCRIPT(idata.response)
                            const fuc = eval(code)
                            THIS.REQUIRE.LOAD({
                                PROPS: {
                                    PATH: THIS.CONVERT.PATH_TO_FILE_GET_FOLDER_PATH({ path: iprops.path }),
                                    DATA: fuc(THIS),
                                    ROUTE: iprops.this.route,
                                    THIS: iprops.this
                                }
                            })
                        } catch (error) {
                            THIS.EX.ERROR({ err: error })
                        }

                    }).catch(err => {
                        THIS.EX.ERROR({ err: err })
                    })
                } catch (err) { THIS.EX.ERROR({ err: err }) }

            },
        },

        FROM: ({ props }) => {
            try {
                const iprops = props

                const path = THIS.EX.MAP_PATH({ path: iprops.path, subPath: iprops.subPath })
                THIS.UI.INNIT({ props: iprops })
                THIS.RENDER.THIS.DATA({
                    props: {
                        path: path,
                        this: iprops
                    }
                })



            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        }
    }


    THIS.READY = {
        THIS: {
            READY_ROUTE_MAP: () => {
                try {
                    var PATH = THIS.IS

                    if (!PATH.MAP) {
                        PATH.MAP = {
                            PROPERTIES: {
                                MAP: false,
                                BOUNDER: false
                            },
                            HISTORY: THIS.OPTIONS().NORMAL.ARRAY_EMPTY

                        }
                    }

                    return PATH.MAP;
                } catch (error) {
                    THIS.EX.ERROR({ err: error })
                }
            },

            READY_CURRENT_PROPERTIES: () => {
                try {
                    if (!THIS.CURRENT.PROPERTIES) {
                        THIS.CURRENT.PROPERTIES = THIS.OPTIONS().NORMAL.OBJECT_EMPTY
                    }

                    return THIS.CURRENT.PROPERTIES;
                } catch (error) {
                    THIS.EX.ERROR({ err: error })
                }
            },

            READY_ROUTE_PARAMS: () => {
                try {
                    if (!THIS.ROUTE.PARAMS) {
                        THIS.ROUTE.PARAMS = {
                            DATA: THIS.OPTIONS().NORMAL.OBJECT_EMPTY
                        }
                    }

                    return THIS.ROUTE.PARAMS;
                } catch (error) {
                    THIS.EX.ERROR({ err: error })
                }

            },

            READY_HAVE: () => {
                try {
                    if (!THIS.IS.HAVE) {
                        const ARRAY_EMPTY = () => {
                            return THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                        }

                        THIS.IS.HAVE = {
                            CSS_LIB: ARRAY_EMPTY(),
                            SCRIPT_LIB: ARRAY_EMPTY(),
                            CSS: ARRAY_EMPTY(),
                            SCRIPT: ARRAY_EMPTY(),
                            COMPONENTS: ARRAY_EMPTY(),
                        }

                        return THIS.IS.HAVE
                    }

                } catch (error) {
                    THIS.EX.ERROR({ err: error })
                }
            },

            READY_EVENT: () => {
                try {
                    if (!THIS.EVENT) {
                        THIS.EVENT = {
                            READY: {
                                document: false
                            }
                        }
                    }
                    return THIS.EVENT
                } catch (err) {
                    THIS.EX.ERROR({ err: error })
                }
            },

            READY_SETTING: () => {
                try {
                    if (!THIS.IS.SETTING) {
                        THIS.IS.SETTING = THIS.OPTIONS().NORMAL.OBJECT_EMPTY
                    }
                    return THIS.IS.SETTING
                } catch (err) {
                    THIS.EX.ERROR({ err: error })
                }

            },

            READY_MODULES: () => {
                try {
                    if (!THIS.MODULES.INNIT) {
                        THIS.MODULES.INNIT = THIS.OPTIONS().NORMAL.OBJECT_EMPTY
                    }
                    return THIS.MODULES
                } catch (err) {
                    THIS.EX.ERROR({ err: error })
                }
            },

            READY_HISTORY: () => {
                try {
                    if (!THIS.ROUTE.HISTORY.PROPERTIES) {
                        THIS.ROUTE.HISTORY.PROPERTIES = THIS.OPTIONS().NORMAL.OBJECT_EMPTY
                    }
                    return THIS.ROUTE.HISTORY.PROPERTIES
                } catch (err) {
                    THIS.EX.ERROR({ err: error })
                }
            }
        },

        READY: () => {
            try {
                const READY = THIS.READY.THIS
                READY.READY_ROUTE_MAP()
                READY.READY_HAVE()
                READY.READY_HISTORY()
                READY.READY_EVENT()
                READY.READY_ROUTE_PARAMS()
                READY.READY_SETTING()
                READY.READY_CURRENT_PROPERTIES()
                READY.READY_MODULES()
            } catch (error) {
                THIS.EX.ERROR({ err: error })
            }

        },
    }


    THIS.CURRENT = {
        THIS: {
            GET: () => {
                try {
                    const element = $(THIS.OPTIONS().CURRENT.PAGE_CONFIG_ELEMENT)
                    if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: element })) {
                        const data = $(element).attr(THIS.OPTIONS().ATTRIBUTE.DATA)
                        const dataParse = JSON.parse(atob(data))
                        THIS.CURRENT.PROPERTIES.STATUS = dataParse
                    }
                } catch (err) { THIS.EX.ERROR({ err: err }) }
            }
        },

        UPDATE: () => {
            THIS.CURRENT.THIS.GET()
        }
    }



    THIS.REQUIRE = {
        PROPS: {
            LOAD_REQUIRE: ({ PROPS }) => {

                if (PROPS) {
                    return {
                        PATH: PROPS.PATH,
                        DATA: PROPS.DATA,
                        LOAD: PROPS.LOAD,
                        ROUTE: PROPS.ROUTE,
                        THIS: PROPS.THIS
                    }
                }
            }

        },

        IS: {

            CSS: {

                TAG: ({ path, subPath, name }) => {
                    var tag = document.createElement(THIS.OPTIONS().TAG.LINK_NAME)
                    const pather = THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL + THIS.EX.MAP_PATH({ path: path, subPath: subPath })
                    $(tag).attr(THIS.OPTIONS().ATTRIBUTE.NAME_REL, THIS.OPTIONS().ATTRIBUTE_VALUE.REL_STYLESHEET)
                    $(tag).attr(THIS.OPTIONS().ATTRIBUTE.HREF_NAME, pather)
                    $(tag).attr(THIS.OPTIONS().ATTRIBUTE.NAME_NAME, name)
                    return tag;
                },

                CSS: ({ props }) => {

                    const iprops = THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({ props: props })
                    const HAVE = THIS.IS.HAVE


                    THIS.METHOD.REQUIRE_THINGS({
                        tagName: THIS.OPTIONS().TAG.CSS_NAME,
                        tagAppend: THIS.OPTIONS().TAG.HEAD_NAME,
                        levelTag: THIS.OPTIONS().ATTRIBUTE_VALUE.CSS_LEVEL_TWO_NAME,
                        haveObject: HAVE.CSS,
                        props: iprops,
                        methodCreateTag: THIS.REQUIRE.IS.CSS.TAG
                    })
                }
            },

            PROPERTIES: {
                THIS: {
                    BOUNDER: ({ props }) => {
                        try {
                            var iprops = props
                            if (THIS.CHECK.IS_OBJECT({ ob: iprops.ob })) {

                                const BOUNDER = THIS.IS.MAP.BOUNDER[iprops.ob.BOUNDER]

                                if (BOUNDER && BOUNDER.src) {
                                    const src = BOUNDER.src

                                    THIS.RENDER.FROM({
                                        props: {
                                            path: THIS.OPTIONS().NORMAL.STRING_EMPTY,
                                            subPath: src,
                                            callBack: iprops.callBack,
                                            route: BOUNDER
                                        }
                                    })
                                }


                            } else {
                                iprops.callBack()
                            }

                        } catch (err) {
                            THIS.EX.ERROR({ err: err })
                        }
                    }
                },

                PROPERTIES: ({ props }) => {
                    try {
                        var iprops = props
                        THIS.REQUIRE.IS.PROPERTIES.THIS.BOUNDER({ props: iprops })
                    } catch (err) { THIS.EX.ERROR({ err: err }) }
                }

            },


            COMPONENTS: {

                READY: () => {
                    try {
                        if (!THIS.REQUIRE.IS.COMPONENTS.INNIT) {
                            THIS.REQUIRE.IS.COMPONENTS.INNIT = THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                        }
                    } catch (error) {
                        THIS.EX.ERROR({ err: error })
                    }

                },

                COMPONENTS: ({ props }) => {

                    const iprops = THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({ props: props })
                    const HAVE = THIS.IS.HAVE


                    THIS.REQUIRE.IS.COMPONENTS.READY()

                    THIS.METHOD.REQUIRE_THINGS({
                        haveObject: HAVE.COMPONENTS,
                        props: iprops,
                        mode: {
                            map: THIS.REQUIRE.IS.COMPONENTS.INNIT,
                            name: THIS.OPTIONS().MODE.COMPONENTS_NAME
                        }
                    })
                }

            }
        },



        THIS: {

            THIS: ({ props, callBack }) => {

                const IS = THIS.REQUIRE.IS

                return {
                    START: () => {
                        THIS.REQUIRE.THIS.THIS({ props: props, callBack: callBack }).PROPERTIES()
                    },

                    PROPERTIES: () => {
                        IS.PROPERTIES.PROPERTIES({
                            props: THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({
                                props: {
                                    path: props.PATH,
                                    ob: props.DATA.REQUIRE.PROPERTIES,
                                    callBack: callBack.PROPERTIES,
                                }
                            })
                        })
                    },

                    COMPONENTS: () => {

                        IS.COMPONENTS.COMPONENTS({
                            props: THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({
                                props: {
                                    path: props.PATH,
                                    ob: props.DATA.REQUIRE.COMPONENTS,
                                    callBack: callBack.COMPONENTS,
                                }
                            })
                        })
                    },

                    CSS: () => {
                        IS.CSS.CSS({
                            props: THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({
                                props: {
                                    path: props.PATH,
                                    ob: props.DATA.REQUIRE.CSS,
                                    callBack: callBack.CSS,
                                }
                            })
                        })
                    },
                }
            },

            REQUIRE: ({ props }) => {
                try {
                    var DOUBLE = THIS.REQUIRE.THIS.THIS(
                        {
                            props: props,
                            callBack: {
                                PROPERTIES: () => DOUBLE.COMPONENTS(),
                                COMPONENTS: () => DOUBLE.CSS(),
                                CSS: () => THIS.REQUIRE.THIS.RUN.RUN({ props: props }),
                            }
                        }
                    )

                    DOUBLE.START()

                } catch (error) {
                    THIS.EX.ERROR({ err: error })
                }

            },

            RUN: {
                THIS: {
                    RENDER: ({ props }) => {
                        try {
                            if (props.DATA.RENDER) {
                                const RENDER = props.DATA.RENDER
                                const render = props.ROUTE

                                if (RENDER.FROM && render) {

                                    const fromContent = THIS.CONVERT.SPECIAL_CONTENT({ content: RENDER.FROM })

                                    if (THIS.CHECK.IS_QUERY_ELEMENT({ name: render.to })) {
                                        const element = $(render.to)
                                        $(element).html(String())
                                        $(element).append(fromContent)

                                    }
                                    else {
                                        THIS.EX.ERROR({ err: THIS.OPTIONS().MESSAGE.INVALID_ROUTE })
                                    }
                                }
                            }


                        } catch (error) {
                            THIS.EX.ERROR({ err: error })
                        }
                    },

                    METHOD: ({ props }) => {
                        try {
                            if (props.DATA.METHOD) {
                                props.DATA.METHOD()
                            }


                        } catch (error) {
                            THIS.EX.ERROR({ err: error })
                        }

                    }
                },
                METHOD: {
                    RUN_OH: (props) => {
                        try {
                            if (props.THIS && props.THIS.callBack) {
                                props.THIS.callBack()
                            }
                        } catch (error) {
                            THIS.EX.ERROR({ err: error })
                        }
                    },
                    RUN_NORMAL: (props) => {
                        try {

                            if (props.DATA) {
                                const CURRENT = THIS.REQUIRE.THIS.RUN
                                CURRENT.THIS.RENDER({ props: props })
                                CURRENT.THIS.METHOD({ props: props })
                            }
                        } catch (error) {
                            THIS.EX.ERROR({ err: error })
                        }

                    },
                    RUN_EFFECT: (props) => {
                        try {
                            const UI = THIS.UI.THIS().UI

                            UI.PERFECT.CONTENT({
                                render: props.ROUTE,
                                callBack: () => {
                                    UI.TIMER.OUT()
                                }
                            })



                        } catch (error) {
                            THIS.EX.ERROR({ err: error })
                        }
                    },
                    STATUS: (props) => {
                        props.LOAD = THIS.OPTIONS().NORMAL.TRUE
                    }
                },

                RUN: ({ props }) => {
                    try {
                        if (!props.LOAD) {
                            const CURRENT = THIS.REQUIRE.THIS.RUN
                            CURRENT.METHOD.RUN_NORMAL(props)
                            CURRENT.METHOD.RUN_OH(props)
                            CURRENT.METHOD.RUN_EFFECT(props)
                            CURRENT.METHOD.STATUS(props)
                            THIS.UPDATE.ON()
                        }
                    } catch (err) { THIS.EX.ERROR({ err: err }) }

                }

            },


            LOAD: ({ PROPS }) => {
                try {
                    const iprops = PROPS
                    THIS.REQUIRE.THIS.REQUIRE({ props: iprops })
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


    },

        THIS.SETTING = {

            INNIT: ({ callBack }) => {

                try {
                    const basePath = THIS.OPTIONS().HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM.BASE_PATH
                    const path = THIS.EX.MAP_PATH({ path: basePath, subPath: THIS.OPTIONS().SETTING.SETTING_PATH })


                    THIS.ROUTE.THIS.GET({

                        path: path,
                        callBack: ({ props }) => {
                            THIS.IS.SETTING = { ...THIS.IS.SETTING, ...props.map }
                            if (callBack) {
                                callBack()
                            }
                        }
                    }
                    )

                } catch (err) {
                    THIS.EX.ERROR({ err: err })
                }


            }
        },


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

            LOAD: ({ name, route, params }) => {

                const current = THIS.IS.MAP.ROUTE[name]


                if (current) {
                    THIS.ROUTE.HISTORY.THIS.HISTORY().ADD({ name: name })

                    if (!route) {
                        route = current
                    }

                    if (params) {
                        THIS.ROUTE.PARAMS.DATA = params
                    }


                    THIS.RENDER.FROM({
                        props: {
                            path: String(),
                            subPath: current.src,
                            route: route
                        }
                    })
                }



            },

            THIS: {
                GET: (props) => {
                    var register = THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                    var map = {}
                    const NORMAL = THIS.OPTIONS().NORMAL
                    var HISTORY = THIS.IS.MAP.HISTORY


                    const GET = (props) => {
                        return new Promise((resolve, reject) => {

                            if (props && props.path) {
                                var meper = HISTORY.find(z => z == props.path)
                                if (!meper) {
                                    HISTORY.push(props.path)

                                    const success = ({ path }) => {
                                        if (THIS.CHECK.IS_OBJECT({ ob: register })) {
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
                                                    props.callBack({
                                                        props: THIS.ROUTE.PROPS.INNIT_GET({
                                                            props: {
                                                                path: path,
                                                                map: map,
                                                                register: register,
                                                                callBack: props.callBack
                                                            }
                                                        })
                                                    })
                                                }
                                            }
                                        }
                                        else {
                                            props.callBack({
                                                props: THIS.ROUTE.PROPS.INNIT_GET({
                                                    props: {
                                                        path: path,
                                                        map: map,
                                                        register: register,
                                                        callBack: props.callBack
                                                    }
                                                })
                                            })
                                        }



                                    }

                                    THIS.THIS.GET_JSON({ path: props.path }).then(data => {
                                        var pathToThis = THIS.CONVERT.PATH_TO_FILE_GET_FOLDER_PATH({ path: props.path })


                                        if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: data.response.INCLUDE })) {


                                            for (let index = NORMAL.NUMBER_ZERO; index < data.response.INCLUDE.length; index++) {
                                                var element = data.response.INCLUDE[index];
                                                var itemPath = THIS.EX.MAP_PATH({ path: pathToThis, subPath: element })

                                                register.push({
                                                    src: itemPath,
                                                    load: false,
                                                    run: false
                                                })
                                            }

                                            for (let index = NORMAL.NUMBER_ZERO; index < register.length; index++) {
                                                var element = register[index];
                                                if (!element.load && !element.run) {
                                                    element.run = THIS.OPTIONS().NORMAL.TRUE
                                                    GET({ path: element.src, callBack: props.callBack })
                                                }


                                            }

                                        }

                                        if (THIS.CHECK.IS_OBJECT({ ob: data.response.COMPONENTS })) {
                                            var items = {}
                                            Object.keys(data.response.COMPONENTS).forEach(element => {
                                                var item = data.response.COMPONENTS[element]
                                                item.src = THIS.EX.MAP_PATH({ path: pathToThis, subPath: item.src })
                                                items[element] = item

                                            })
                                            map = { ...items, ...map }
                                        }

                                        if (THIS.CHECK.IS_OBJECT({ ob: data.response.SETTING })) {
                                            map = { ...map, ...data.response.SETTING }
                                        }

                                        success({ path: props.path })
                                        resolve(data)

                                    })
                                }
                            }

                        });


                    }
                    GET(props)
                },

            },



            INNIT: {
                THIS: {
                    ROUTE: () => {
                        try {

                            const CURRENT = THIS.ROUTE
                            var MAP = THIS.IS.MAP
                            if (!MAP.PROPERTIES.MAP) {

                                THIS.ROUTE.THIS.GET(
                                    CURRENT.PROPS.INNIT_GET({
                                        props: {
                                            path: THIS.OPTIONS().ROUTE.DEFAULT_PATH,
                                            callBack: ({ props }) => {
                                                MAP.PROPERTIES.MAP = THIS.OPTIONS().NORMAL.TRUE
                                                MAP.ROUTE = { ...MAP.ROUTE, ...props.map }
                                                THIS.RENDER.FROM({
                                                    props: {
                                                        path: THIS.CONVERT.PATH_TO_FILE_GET_FOLDER_PATH({ path: THIS.OPTIONS().ROUTE.DEFAULT_PATH }),
                                                        subPath: props.map.default.src,
                                                        route: props.map.default
                                                    }
                                                })
                                            }
                                        }
                                    })
                                )
                            }
                        } catch (error) {
                            THIS.EX.ERROR({ err: error })
                        }

                    },

                    BOUNDER: () => {
                        try {
                            var MAP = THIS.IS.MAP
                            if (!MAP.PROPERTIES.BOUNDER) {
                                const path = THIS.IS.SETTING.BOUNDER_ROUTE_PATH
                                if (path) {
                                    THIS.ROUTE.THIS.GET({

                                        path: path,
                                        callBack: ({ props }) => {
                                            MAP.PROPERTIES.BOUNDER = THIS.OPTIONS().NORMAL.TRUE
                                            MAP.BOUNDER = { ...MAP.BOUNDER, ...props.map }
                                        }
                                    }
                                    )
                                }
                                else {
                                    THIS.EX.ERROR({ err: THIS.OPTIONS().MESSAGE.PATH_INVALID_OUT, sub: 'BOUNDER_ROUTE_PATH' })
                                }


                            }
                        } catch (error) {
                            THIS.EX.ERROR({ err: error })
                        }

                    },

                    MODULES: (arr) => {

                        try {
                            const OH = () => {
                                if (THIS.CHECK.IS_OBJECT({ ob: arr })) {
                                    arr.forEach(element => {
                                        element()
                                    })
                                }
                                const MODULES = THIS.MODULES.INNIT
                                if (MODULES && MODULES.UI_REGISTER_EJE2OTY5MJI2NJIWODU) {
                                    MODULES.UI_REGISTER_EJE2OTY5MJI2NJIWODU()
                                }
                            }

                            THIS.MODULES.GET({
                                path: THIS.OPTIONS().MODULES.MODULE_PATH,
                                callBack: OH
                            })


                        } catch (err) {
                            THIS.EX.ERROR({ err: err })
                        }
                    },



                },


                IN: () => {
                    try {
                        THIS.STEP.INNIT()
                    } catch (err) {
                        THIS.EX.ERROR({ err: err })
                    }
                }

            },


            RUN: () => {
                try {

                    THIS.READY.READY()
                    THIS.CURRENT.UPDATE()
                    THIS.ROUTE.INNIT.IN()

                } catch (error) {

                }

            },




            HISTORY: {
                THIS: {
                    HISTORY: () => {
                        try {
                            const history = () => {
                                var data = window.localStorage.getItem(THIS.OPTIONS().NAME.LOCAL_STORAGE_HISTORY)
                                var iprops = {
                                    current: String(),
                                    history: THIS.OPTIONS().NORMAL.ARRAY_EMPTY,
                                }

                                if (data) {
                                    const b64 = window.atob(data)
                                    var dataParse = JSON.parse(b64)
                                    if (THIS.CHECK.IS_OBJECT({ ob: dataParse }) && THIS.CHECK.IS_OBJECT({ ob: dataParse.current })) {
                                        iprops = {
                                            current: dataParse.current ? dataParse.current : String(),
                                            history: dataParse.history ? dataParse.history : iprops.history,
                                        }
                                    }
                                }

                                else {
                                    window.localStorage.setItem(THIS.OPTIONS().NAME.LOCAL_STORAGE_HISTORY, window.btoa(JSON.stringify(iprops)))
                                }

                                return iprops
                            }

                            return {
                                GET: () => {
                                    return history()
                                },
                                ADD: ({ name }) => {
                                    try {
                                        var hito = history()

                                        if (name == THIS.OPTIONS().ROUTE.DEFAULT_ROUTE_NAME) {
                                            hito.history = THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                                            hito.current = THIS.OPTIONS().NORMAL.STRING_EMPTY
                                        }

                                        if (hito.current != name) {

                                            hito.current = name

                                            const item = hito.history.find(x => x == name)
                                            if (!item) {

                                                var params = THIS.OPTIONS().NORMAL.OBJECT_EMPTY

                                                if (THIS.ROUTE.PARAMS && THIS.ROUTE.PARAMS.DATA) {

                                                    params = THIS.ROUTE.PARAMS.DATA
                                                }

                                                if (THIS.EX.TRUE_ARRAY_LENGTH({ arr: hito.history }) > THIS.OPTIONS().ROUTE.HISTORY.MAX_SAVE) {
                                                    hito.history.shift()
                                                }

                                                hito.history.push({
                                                    name: name,
                                                    params: params
                                                })
                                            }

                                            window.localStorage.setItem(THIS.OPTIONS().NAME.LOCAL_STORAGE_HISTORY, window.btoa(JSON.stringify(hito)))

                                        }

                                    } catch (err) {
                                        THIS.EX.ERROR({ err: err })
                                    }

                                },

                                BACK: () => {
                                    try {
                                        const NORMAL = THIS.OPTIONS().NORMAL
                                        var hito = history();
                                        var currentBack = THIS.OPTIONS().NORMAL.OBJECT_EMPTY
                                        if (hito) {
                                            if (!THIS.CHECK.IS_ARRAY_EMPTY({ ob: hito.history })) {
                                                if (THIS.EX.ARRAY_LENGTH({ arr: hito.history }) > NORMAL.NUMBER_ONE) {
                                                    const last = hito.history[THIS.EX.TRUE_ARRAY_LENGTH({ arr: hito.history })]


                                                    if (last.name == hito.current) {
                                                        hito.history.pop()
                                                        const current = hito.history[THIS.EX.TRUE_ARRAY_LENGTH({ arr: hito.history })]
                                                        hito.current = current.name
                                                        currentBack = current
                                                        THIS.ROUTE.LOAD({ name: current.name, param: current.params })
                                                    }
                                                    else {
                                                        hito.current = last.name
                                                        currentBack = last
                                                        THIS.ROUTE.LOAD({ name: last.name, param: last.params })
                                                    }

                                                }
                                                window.localStorage.setItem(THIS.OPTIONS().NAME.LOCAL_STORAGE_HISTORY, window.btoa(JSON.stringify(hito)))
                                                return currentBack
                                            }
                                        }

                                    } catch (err) {
                                        THIS.ROUTE.LOAD({ name: THIS.OPTIONS().ROUTE.DEFAULT_ROUTE_NAME, param: last.params })
                                        THIS.EX.ERROR({ err: err })
                                    }

                                }
                            }

                        } catch (err) {
                            THIS.EX.ERROR({ err: err })
                        }

                    }
                },

                INNIT: () => {
                    try {
                        var historyProperties = THIS.ROUTE.HISTORY.PROPERTIES
                        if (historyProperties && !historyProperties.READY) {

                            THIS.EX.LOOPER_CHECKER({
                                arrName: [THIS.IS.SETTING.BACK_BUTTON_NAME],
                                timeLoop: THIS.OPTIONS().NUMBER.FIVE_HUNDRED,
                                callBack: () => {
                                    THIS.DOM.SET_EVENT_BY_NAME({
                                        element: $(THIS.IS.SETTING.BACK_BUTTON_NAME),
                                        name: THIS.OPTIONS().EVENT.CLICK,
                                        callBack: (current) => {
                                            const currentBack = THIS.ROUTE.HISTORY.THIS.HISTORY().BACK()

                                            if (currentBack && THIS.CHECK.IS_OBJECT({ ob: currentBack }))

                                                if (THIS.IS.SETTING && THIS.IS.SETTING.ON_BACK_CLICK_FUNCTION) {
                                                    const arrStep = String(THIS.IS.SETTING.ON_BACK_CLICK_FUNCTION)
                                                        .split(THIS.OPTIONS().NORMAL.DOT_SYMBOL)
                                                    const name = THIS.CONVERT.TRIM_STRING({ str: THIS.IS.SETTING.ON_BACK_CLICK_FUNCTION_NAME })

                                                    var fn = THIS.EX.GET_OBJECT_FROM_ARRAY_NAME({ arr: arrStep, object: THIS })

                                                    if (fn) {
                                                        if (name) {
                                                            const fnr = fn()
                                                            const fne = fnr[name]
                                                            fne(currentBack)
                                                        }
                                                        else {
                                                            fn(currentBack)
                                                        }
                                                    }

                                                }
                                        }
                                    })
                                }
                            })
                            historyProperties.READY = THIS.OPTIONS().NORMAL.TRUE
                        }

                    } catch (error) {
                        THIS.EX.ERROR({ err: error })
                    }
                }

            }


        }

    THIS.INNIT = (PROPS) => {
        THIS.IS = (PROPS)
        PROPS.IS = (THIS)

        THIS.ROUTE.RUN();

        return THIS
    }

    return THIS;

}

var HERE_IS_EJE2OTC1NDUYMZM3ODI = HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM().INNIT(HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM)


