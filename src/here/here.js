


const DZE2OTU2OTE3OTI4OTI = () => {
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
            THANG_SYMBOL: "#",
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
        TAG: {
            CSS_NAME: "css",

            HEAD_NAME: "head",
            SCRIPT_NAME: "script",
            BODY_NAME: "body",
            STYLE_NAME: "style",
            LINK_NAME: "link",

            METHOD: {
                CREATE_LINK_CSS: ({ props }) => {
                    var iprops = {
                        name: props.name,
                        src: props.src
                    }
                    var tag = document.createElement(THIS.OPTIONS().TAG.LINK_NAME)
                    tag.setAttribute(THIS.OPTIONS().ATTRIBUTE.NAME_REL, THIS.OPTIONS().ATTRIBUTE_VALUE.REL_STYLESHEET)
                    tag.setAttribute(THIS.OPTIONS().ATTRIBUTE.HREF_NAME, iprops.src)
                    tag.setAttribute(THIS.OPTIONS().ATTRIBUTE.NAME_NAME, iprops.name)
                    return tag
                }
            }
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
        OPTIONS: {
        },
        MODULES: {
            MODULE_PATH: "/here/modules/ui/ui.js"
        },
        ROUTE: {
            DEFAULT_PATH: "/route.json",
            BOUNDER_PATH: "/bounder/bounder.json"
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

    return SETTING


}



var HERE = (props) => {

    const THIS = {}

    THIS.OPTIONS = DZE2OTU2OTE3OTI4OTI

    THIS.EX = {

        ERROR: ({ err }) => {
            console.error(err);
        },
        ARRAY_TO_STRING: (arr) => {
            try {
                if (!THIS.CHECK.IS_EMPRY({ ob: arr })) {
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
                if (!THIS.CHECK.IS_EMPRY({ ob: arr })) {
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
                if (!THIS.CHECK.IS_EMPRY({ ob: arr })) {
                    return arr.length - THIS.OPTIONS().NORMAL.NUMBER_ONE
                }
            } catch (error) {
                THIS.EX.ERROR({ err: THIS.OPTIONS().MESSAGE.INVALID_DATA + arr })
            }
        },
        ARRAY_LENGTH: ({ arr }) => {
            try {
                if (!THIS.CHECK.IS_EMPRY({ ob: arr })) {
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
                            subPath: arrSubPathe
                        }).split(NORMAL.RIGHT_SLASH_SYMBOL)
                    }).join(NORMAL.RIGHT_SLASH_SYMBOL)
                }

                return PATH_RETURN


            } catch (error) {
                THIS.EX.ERROR(THIS.OPTIONS().MESSAGE.PATH_INVALID);
            }

        }



    }


    THIS.CONVERT = {

        PATH_HEAD_EMPTY: ({ pathArr }) => {
            try {
                const NORMAL = THIS.OPTIONS().NORMAL
                const invalidCharacter = [NORMAL.DOT_SYMBOL, NORMAL.DOUBLE_DOT_SYMBOL, NORMAL.RIGHT_SLASH_SYMBOL]
                var isValidPath = false

                while (!isValidPath && !THIS.CHECK.IS_EMPRY({ ob: pathArr })) {
                    if (invalidCharacter.find(x => x == pathArr[THIS.OPTIONS().NORMAL.NUMBER_ZERO]) || THIS.CHECK.IS_EMPRY({ ob: pathArr[THIS.OPTIONS().NORMAL.NUMBER_ZERO] })) {
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

                if (!THIS.CHECK.IS_EMPRY({ ob: pathSplit })) {

                    pathSplit.forEach(element => {
                        if (!status.pathEnd) {
                            if (element == THIS.OPTIONS().NORMAL.DOUBLE_DOT_SYMBOL) {
                                if (!THIS.CHECK.IS_EMPRY({ ob: pathArr })) {
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
                    if (!THIS.CHECK.IS_EMPRY({ ob: subPathSplit })) {
                        subPathSplit.forEach(element => {
                            if (!status.subPathEnd) {
                                if (element == THIS.OPTIONS().NORMAL.DOUBLE_DOT_SYMBOL) {
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
                    if (!THIS.CHECK.IS_EMPRY({ ob: haveOriginUrl })) {
                        origin = THIS.EX.ARRAY_REMOVE_EMPTY({ arr: haveOriginUrl }).join(THIS.OPTIONS().NORMAL.DOUBLE_RIGHT_SLASH_SYMBOL) + THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL
                    }

                    var pathReturn = origin + THIS.CONVERT.PATH_ASS_EMPTY({ pathArr: pathArr }).join(THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL) +
                        THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL +
                        THIS.CONVERT.PATH_HEAD_EMPTY({ pathArr: subPathArr }).join(THIS.OPTIONS().NORMAL.RIGHT_SLASH_SYMBOL)

                    return THIS.CONVERT.REMOVE_DUPLICATE.SYMBOL({
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

        EMPTY_ARRAY: (arr) => {
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

        TO_RUNABLE_JAVASCRIPT: (props) => {


            try {
                const num_zero = THIS.OPTIONS().NORMAL.NUMBER_ZERO
                const num_one = THIS.OPTIONS().NORMAL.NUMBER_ONE
                const stringContent = String(props)
                var split_one = stringContent.split(THIS.OPTIONS().SPLIT.RENDER)
                var split_three = split_four = split_five = String()
                if (!THIS.CHECK.IS_EMPRY({ ob: split_one })) {
                    split_three = split_one[num_one].split(THIS.OPTIONS().SPLIT.FROM)

                }
                if (!THIS.CHECK.IS_EMPRY({ ob: split_three })) {
                    split_four = split_three[num_one].split(THIS.OPTIONS().NORMAL.LEFT_BRACKET_SYMBOL)

                }
                if (!THIS.CHECK.IS_EMPRY({ ob: split_four })) {
                    split_five = split_four[num_one].split(THIS.OPTIONS().NORMAL.RIGHT_BRACKET_SYMBOL)
                }

                if (!THIS.CHECK.IS_EMPRY({ ob: split_five })) {
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
                    return props
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
                    const ipath = THIS.CONVERT.PATH_ORIGIN({ path: path })
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

        REQUIRE_THINGS: ({ tagName, tagAppend, props, haveObject, methodCreateTag, mode }) => {
            try {
                var require = $(tagName)
                const NORMAL = THIS.OPTIONS().NORMAL
                const iprops = THIS.METHOD.PROPS.REQUIRE_THINGS_PROPS({ props: props })
                if (THIS.CHECK.IS_EMPRY({ ob: require })) {
                    const tag = document.createElement(tagName)
                    $(tagAppend).append(tag)
                }

                if (!THIS.CHECK.IS_EMPRY({ ob: iprops.ob })) {

                    var arrName = NORMAL.ARRAY_EMPTY

                    const CALL = () => {
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
                        const path = THIS.EX.MAP_PATH({ path: iprops.path, subPath: element.src })

                        if (THIS.CHECK.IS_EMPRY({ ob: element.name })) {
                            element.name = THIS.CONVERT.PATH_TO_NAME({ path: path })
                        }

                        arrName.push(element.name)

                        const item = haveObject.find(x => x.name == element.name)

                        if (THIS.CHECK.IS_EMPRY({ ob: item })) {


                            if (mode) {
                                if (mode.name == THIS.OPTIONS().MODE.COMPONENTS_NAME) {
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


                                            CALL()


                                        }
                                    })

                                }

                            }
                            else {
                                const tag = methodCreateTag({ name: element.name, subPath: element.src, path: iprops.path })

                                haveObject.push({
                                    src: element.src,
                                    name: element.name,
                                    load: NORMAL.FALSE,
                                })
                                THIS.DOM.ON_LOAD_METHOD({
                                    element: tag,
                                    event: (event) => {
                                        const item = haveObject.find(x => x.name = element.name)
                                        item.load = NORMAL.TRUE
                                        CALL()
                                    }
                                })
                                $(tagName).append(tag);
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
                console.error(error);
            }
        },

    }






    THIS.RENDER = {

        PROPS: {
            FROM_RENDER_PROPS: ({ props }) => {

                var iroute = {}

                if (props.route) {
                    iroute = {
                        to: props.route.to,
                        transition: props.route.transition,
                        waiterMode: props.route.waiterMode
                    }
                }

                return {
                    path: props.path,
                    subPath: props.subPath,
                    route: iroute

                }

            }


        },

        THIS: {
            DATA: ({ props }) => {
                try {
                    var iprops = {
                        path: props.path,
                        this: props.this
                    }
                    THIS.THIS.GET_TEXT({ path: iprops.path }).then(data => {

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

                    }).catch(err => {
                        THIS.EX.ERROR({ err: err })
                    })
                } catch (err) { THIS.EX.ERROR({ err: err }) }



            },

            TIMER: ({ props }) => {
                try {
                    var iprops = {
                        this: props.this
                    }

                    if (iprops.this.route && iprops.this.route.to) {
                        $(THIS.OPTIONS().THIS[iprops.this.route.to]).html(String())
                        $(THIS.OPTIONS().THIS[iprops.this.route.to]).html("Shipper is comming...")
                    }
                } catch (err) { }
            }
        },

        FROM: ({ props }) => {
            try {
                const iprops = props

                const path = THIS.EX.MAP_PATH({ path: iprops.path, subPath: iprops.subPath })

                // THIS.RENDER.THIS.TIMER({ props: { this: iprops } })

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


        READY_ROUTE_MAP: () => {

            try {
                var PATH = THIS.IS

                if (!PATH.MAP) {
                    PATH.MAP = {
                        PROPERTIES: {
                            MAP: false,
                            BOUNDER: false
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
                    THIS.IS.HAVE = {
                        CSS_LIB: THIS.OPTIONS().PAGE.DEFAULT_PAGE_CSS_LIB(),
                        SCRIPT_LIB: THIS.OPTIONS().PAGE.DEFAULT_PAGE_SCRIPT_LIB(),
                        CSS: THIS.OPTIONS().NORMAL.ARRAY_EMPTY,
                        SCRIPT: THIS.OPTIONS().NORMAL.ARRAY_EMPTY,
                        COMPONENTS: THIS.OPTIONS().NORMAL.ARRAY_EMPTY,
                    }

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
                            if (iprops.ob) {
                                const src = THIS.IS.MAP.BOUNDER[iprops.ob.BOUNDER].src

                                THIS.RENDER.FROM({
                                    props: {
                                        path: THIS.OPTIONS().NORMAL.STRING_EMPTY,
                                        subPath: src,
                                        callBack: iprops.callBack
                                    }
                                })
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

                                if (RENDER.FROM && RENDER.TO) {


                                    if (THIS.CHECK.IS_QUERY_ELEMENT({ name: RENDER.TO })) {
                                        const element = $(RENDER.TO)
                                        $(element).html(String())
                                        $(element).append(RENDER.FROM)
                                    }
                                    else {
                                        $(THIS.OPTIONS().THIS[RENDER.TO]).html(String())
                                        $(THIS.OPTIONS().THIS[RENDER.TO]).append(RENDER.FROM)
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
                    RUN_CALL: ({ props }) => {
                        try {
                            if (props.THIS && props.THIS.callBack) {
                                props.THIS.callBack()
                            }
                        } catch (error) {
                            THIS.EX.ERROR({ err: error })
                        }
                    },
                    RUN_NORMAL: ({ props }) => {
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
                    STATUS: ({ props }) => {
                        props.LOAD = THIS.OPTIONS().NORMAL.TRUE
                    }
                },

                RUN: ({ props }) => {
                    try {
                        if (!props.LOAD) {
                            const CURRENT = THIS.REQUIRE.THIS.RUN
                            CURRENT.METHOD.RUN_NORMAL({ props: props })
                            CURRENT.METHOD.RUN_CALL({ props: props })
                            CURRENT.METHOD.STATUS({ props: props })
                        }
                    } catch (err) { THIS.EX.ERROR({ err: err }) }

                }

            },


            LOAD: ({ PROPS }) => {
                try {
                    const iprops = PROPS

                    THIS.READY.READY_HAVE()

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
            var iprops = {
                name: props.name,
                route: props.route
            }

            const src = THIS.IS.MAP.ROUTE[iprops.name].src

            THIS.ROUTE.HISTORY().SET({ name: iprops.name })

            THIS.RENDER.FROM({
                props: THIS.RENDER.PROPS.FROM_RENDER_PROPS({
                    props: {
                        path: String(),
                        subPath: src,
                        route: iprops.route
                    }
                })
            })

        },

        GET: ({ props }) => {
            var register = THIS.OPTIONS().NORMAL.ARRAY_EMPTY
            var map = {}
            const NORMAL = THIS.OPTIONS().NORMAL
            const GET = ({ props }) => {
                var iprops = THIS.ROUTE.PROPS.INNIT_GET({ props: props })

                return new Promise((resolve, reject) => {

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
                        else {
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
                    THIS.THIS.GET_JSON({ path: iprops.path }).then(data => {
                        var idata = THIS.ROUTE.PROPS.RESPONSE_ROUTE({ props: data })
                        var pathToThis = THIS.CONVERT.PATH_TO_FILE_GET_FOLDER_PATH({ path: iprops.path })


                        if (!THIS.CHECK.IS_EMPRY({ ob: idata.response.INCLUDE })) {

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

                        if (THIS.CHECK.IS_OBJECT({ ob: idata.response.COMPONENTS })) {
                            var items = {}
                            Object.keys(idata.response.COMPONENTS).forEach(element => {
                                var item = idata.response.COMPONENTS[element]
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

        INNIT: {
            THIS: {
                ROUTE: () => {
                    try {

                        const CURRENT = THIS.ROUTE

                        var PATH = THIS.READY.READY_ROUTE_MAP()
                        if (!PATH.MAP.PROPERTIES.MAP) {

                            THIS.ROUTE.GET({
                                props: CURRENT.PROPS.INNIT_GET({
                                    props: {
                                        path: THIS.OPTIONS().ROUTE.DEFAULT_PATH,
                                        callBack: ({ props }) => {
                                            PATH.MAP.PROPERTIES.MAP = THIS.OPTIONS().NORMAL.TRUE
                                            PATH.MAP.ROUTE = { ...PATH.MAP.ROUTE, ...props.map }
                                            THIS.RENDER.FROM({
                                                props: THIS.RENDER.PROPS.FROM_RENDER_PROPS({
                                                    props: {
                                                        path: THIS.CONVERT.PATH_TO_FILE_GET_FOLDER_PATH({ path: THIS.OPTIONS().ROUTE.DEFAULT_PATH }),
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
                        THIS.EX.ERROR({ err: error })
                    }

                },

                BOUNDER: () => {
                    try {
                        const CURRENT = THIS.ROUTE

                        var PATH = THIS.READY.READY_ROUTE_MAP()
                        if (!PATH.MAP.PROPERTIES.BOUNDER) {

                            THIS.ROUTE.GET({
                                props: CURRENT.PROPS.INNIT_GET({
                                    props: {
                                        path: THIS.OPTIONS().ROUTE.BOUNDER_PATH,
                                        callBack: ({ props }) => {
                                            PATH.MAP.PROPERTIES.BOUNDER = THIS.OPTIONS().NORMAL.TRUE
                                            PATH.MAP.BOUNDER = { ...PATH.MAP.BOUNDER, ...props.map }
                                        }
                                    }
                                })
                            })
                        }
                    } catch (error) {
                        THIS.EX.ERROR({ err: error })
                    }

                }

            },


            IN: () => {
                try {
                    THIS.ROUTE.INNIT.THIS.BOUNDER()
                    THIS.ROUTE.INNIT.THIS.ROUTE()
                } catch (err) { THIS.EX.ERROR({ err: err }) }
            }

        },


        RUN: () => {
            try {

                THIS.READY.READY_ROUTE_MAP()

                THIS.ROUTE.INNIT.IN()

            } catch (error) {

            }

        },

        HISTORY: () => {
            try {




                const history = () => {
                    var data = window.localStorage.getItem(THIS.OPTIONS().NAME.LOCAL_STORAGE_HISTORY)
                    var iprops = {
                        current: String(),
                        stepsBack: THIS.OPTIONS().NORMAL.ARRAY_EMPTY,
                        stepNext: THIS.OPTIONS().NORMAL.ARRAY_EMPTY
                    }

                    if (data) {
                        const b64 = window.atob(data)
                        var dataParse = JSON.parse(b64)
                        if (THIS.CHECK.IS_OBJECT({ ob: dataParse }) && THIS.CHECK.IS_OBJECT({ ob: dataParse.current })) {
                            iprops = {
                                current: dataParse.current,
                                stepsBack: dataParse.stepsBack,
                                stepsNext: dataParse.stepsNext
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
                    SET: ({ name }) => {
                        try {
                            var hito = history()

                            hito.current = name
                            const item = hito.stepsBack.find(x => x == name)
                            if (!THIS.CHECK.IS_OBJECT({ ob: item })) {
                                hito.stepsBack.push(name)
                            }
                            window.localStorage.setItem(THIS.OPTIONS().NAME.LOCAL_STORAGE_HISTORY, window.btoa(JSON.stringify(hito)))
                        } catch (err) {
                            THIS.EX.ERROR({ err: err })
                        }

                    }
                    ,
                    NEXT: () => { },
                    BACK: () => { }
                }




            } catch (err) {
                THIS.EX.ERROR({ err: err })
            }

        }


    }

    THIS.INNIT = (PROPS) => {
        THIS.IS = (PROPS);
        PROPS.IS = (THIS)
        THIS.ROUTE.RUN();
    }

    THIS.DATA = () => {
        return THIS;
    }

    return THIS;

}

HERE().INNIT(HERE)


