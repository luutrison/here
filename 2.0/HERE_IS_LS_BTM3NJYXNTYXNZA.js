
/**
 * WRITTEN BY LUUTR - A HANDSOME WRITTER
 **/
const HERE_LS_DJM3NJYXMJAYNDM = () => {

    const THIS = {}

    THIS.OPTION = OPTION_DZE2OTU2OTE3OTI4OTI
    THIS.OPTION_METHOD = METHOD_LS_ADM3NDUWNDQ2NDC

    THIS.EX = {

        ERROR: (error, info) => {
            console.error(THIS.OPTION().MESSAGE.EVIEWI, error);
            if (info) {
                console.info(THIS.OPTION().MESSAGE.EVIEWII, THIS.OPTION().MESSAGE.INFO_ERROR, info);
            }
        },
        LOOPER: ({ object, callBack }) => {
            try {
                var loopTime = THIS.OPTION().NORMAL.NUMBER_ZERO
                const timeLoop = THIS.OPTION().NUMBER.ONE_HUNDRED
                const looper = () => {
                    loopTime = loopTime + THIS.OPTION().NORMAL.NUMBER_ONE
                    setTimeout(() => {
                        if (loopTime < THIS.OPTION().NUMBER.FIFTY) {
                            console.info(object)
                            if (object != undefined && callBack) {
                                callBack()
                            }
                            else {
                                looper()
                            }
                        }
                    }, timeLoop);
                }
                looper()
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        GET_OBJECT_FROM_ARRAY_NAME: ({ array, object }) => {
            try {
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: array }) && object) {
                    var parse = false
                    var current = THIS.OPTION().NORMAL.OBJECT_EMPTY
                    const sortArr = THIS.EX.ARRAY_REMOVE_EMPTY({ array: array })
                    sortArr.forEach(element => {
                        if (!parse && object[element]) {
                            current = object[element]
                            parse = THIS.OPTION().NORMAL.TRUE
                        }
                        else if (current[element]) {
                            current = current[element]
                        }
                    })

                    return current
                }
            } catch (error) { THIS.EX.ERROR(error) }
        },
        SYSTEM_START: {
            THIS: {
                READY_CONFIG: () => {
                    try {
                        const config_path = THIS.METHOD.GET_SETTING({
                            name: THIS.OPTION().NAME.START_CONFIG[THIS.OPTION().NORMAL.NUMBER_ONE]
                        })

                        THIS.THIS.GET_TEXT({
                            path: config_path
                        }).then(_data => {
                            const config_data = JSON.parse(atob(_data.response))

                            THIS.METHOD.SET_RUNNING_CONFIG({
                                name: THIS.OPTION().NAME.START_CONFIG[THIS.OPTION().NORMAL.NUMBER_ZERO],
                                input: config_data
                            })
                        }).catch(error => {
                            THIS.EX.ERROR(error)
                        })
                    } catch (error) {
                        THIS.EX.ERROR(error)
                    }
                }

            },
            START: () => {
                try {
                    THIS.EX.SYSTEM_START.THIS.READY_CONFIG()
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },

        RANDOM: ({ num }) => {
            try {
                const rdm = THIS.OPTION().NORMAL.RANDOM_CHARACTOR
                var output = String()
                for (let i = THIS.OPTION().NORMAL.NUMBER_ZERO; i < num; i++) {
                    output = output + rdm[Math.round(Math.random() * THIS.EX.TRUE_ARRAY_LENGTH({ array: rdm }))]
                }
                return output

            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        MID: () => {
            try {
                const date = Date.now()
                const name = THIS.OPTION_METHOD().REPLACE.BASE64_SORT({ input: btoa(String(date) + THIS.EX.RANDOM({ num: THIS.OPTION().NORMAL.NUMBER_THREE })) })
                return name
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        ARRAY_REMOVE_EMPTY: ({ array }) => {
            try {
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: array })) {
                    var arro = THIS.OPTION().NORMAL.ARRAY_EMPTY
                    array.forEach(element => {
                        if (element != String()) {
                            arro.push(element)
                        }
                    });

                    return arro
                }
                else {
                    return THIS.OPTION().NORMAL.ARRAY_EMPTY
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        TRUE_ARRAY_LENGTH: ({ array }) => {
            try {
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: array })) {
                    return array.length - THIS.OPTION().NORMAL.NUMBER_ONE
                }
            } catch (error) {
                THIS.EX.ERROR({ error: THIS.OPTION().MESSAGE.INVALID_DATA + array })
            }
        },
        ARRAY_LENGTH: ({ array }) => {
            try {
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: array })) {
                    return array.length
                }
            } catch (error) {
                THIS.EX.ERROR({ error: THIS.OPTION().MESSAGE.INVALID_DATA + array })
            }
        },

        MAP: ({ path, subPath }) => {
            try {
                var NORMAL = THIS.OPTION

                path = path ? path : NORMAL().NORMAL.SPACE
                subPath = subPath ? subPath : NORMAL().NORMAL.SPACE

                var arrPathStart = Array.from(THIS.CONVERT.TRIM_STRING({ str: path }));
                var RETURN = NORMAL().NORMAL.STRING_EMPTY
                if (arrPathStart[THIS.EX.TRUE_ARRAY_LENGTH({ array: arrPathStart })] != NORMAL().NORMAL.RIGHT_SLASH_SYMBOL) {
                    arrPathStart.push(NORMAL().NORMAL.RIGHT_SLASH_SYMBOL)
                }

                var arrSubPath = Array.from(subPath)

                var isAbsolute = false;
                var is_out_side_url = false;

                THIS.OPTION().PATH.ARRAY_ABSOLUTE_CONTAIN.forEach(element => {
                    if (String(path).search(element) >= NORMAL().NORMAL.NUMBER_ZERO) {
                        isAbsolute = true
                    }
                });

                THIS.OPTION().PATH.ARRAY_ABSOLUTE_CONTAIN.forEach(element => {
                    if (String(subPath).search(element) >= NORMAL().NORMAL.NUMBER_ZERO) {
                        isAbsolute = true
                    }
                });

                THIS.OPTION().PATH.ARRAY_ORIGIN_METHOD.forEach(element => {
                    if (String(subPath).search(element) >= NORMAL().NORMAL.NUMBER_ZERO) {
                        is_out_side_url = true
                    }
                });

                if (!is_out_side_url) {
                    if (arrSubPath[NORMAL().NORMAL.NUMBER_ZERO] != NORMAL().NORMAL.NGA_SYMBOL && !isAbsolute) {
                        RETURN = arrPathStart.join(NORMAL().NORMAL.STRING_EMPTY) + THIS.CONVERT.HEAD_EMPTY({ pathArray: arrSubPath }).join(NORMAL().NORMAL.STRING_EMPTY)
                    }
                    else {


                        const arrSubPathe = arrSubPath.join(NORMAL().NORMAL.STRING_EMPTY)
                        RETURN = THIS.CONVERT.TAIL_AND_HEAD_EMPTY({
                            pathArray: THIS.CONVERT.LOGIC({
                                path: arrPathStart.join(NORMAL().NORMAL.STRING_EMPTY),
                                subPath: arrSubPathe,
                            }).split(NORMAL().NORMAL.RIGHT_SLASH_SYMBOL)
                        }).join(NORMAL().NORMAL.RIGHT_SLASH_SYMBOL)
                    }
                }
                else {
                    RETURN = subPath
                }

                return RETURN

            } catch (error) {
                THIS.EX.ERROR({ error: THIS.OPTION().MESSAGE.INVALID });
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
                                callBack: callBack.SETTING,
                                nextStep: THIS.STEP.THIS.STEP({ callBack: callBack }).SESSION
                            })
                        },

                        SESSION: () => {
                            THIS.SESSION.CREATE()
                        }
                    }
                } catch (error) { THIS.EX.ERROR(error) }


            }
        },

        INNIT: () => {
            try {
                const callBack = {
                    SETTING: (include) => {
                        THIS.ROAD.INNIT.THIS.MODULE(
                            {
                                array: [
                                    THIS.ROAD.INNIT.THIS.BOUNDER,
                                    THIS.ROAD.INNIT.THIS.ROAD,
                                ],
                                include: include
                            }
                        )
                        THIS.EX.SYSTEM_START.START()
                    }
                }

                THIS.STEP.THIS.STEP({ callBack: callBack }).INNIT()
            } catch (error) { }

        }

    }


    THIS.CONVERT = {

        HEAD_EMPTY: ({ pathArray }) => {
            try {

                if (Array.isArray(pathArray)) {
                    const NORMAL = THIS.OPTION().NORMAL
                    const invalidCharacter = [NORMAL.DOT_SYMBOL, NORMAL.DOUBLE_DOT_SYMBOL, NORMAL.RIGHT_SLASH_SYMBOL]
                    var isValidPath = false

                    while (!isValidPath && !THIS.CHECK.IS_ARRAY_EMPTY({ array: pathArray })) {
                        if (invalidCharacter.find(x => x == pathArray[THIS.OPTION().NORMAL.NUMBER_ZERO]) || THIS.CHECK.IS_ARRAY_EMPTY({ array: pathArray[THIS.OPTION().NORMAL.NUMBER_ZERO] })) {
                            pathArray.shift()
                        }
                        else {
                            isValidPath = true
                        }
                    }

                    return pathArray
                }
                else {
                    THIS.EX.ERROR({ error: THIS.OPTION().MESSAGE.ARRAY_IS_INVALID })
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        SPECIAL: ({ input }) => {
            try {


                if (THIS.CURRENT.PROPERTIES.STATUS) {
                    const version = THIS.CURRENT.PROPERTIES.STATUS.version
                    if (version) {
                        input = THIS.OPTION_METHOD().REPLACE.VERSION({ input: input, replace: version })
                    }

                    return input
                }
                else {
                    THIS.EX.ERROR({ error: THIS.OPTION().MESSAGE.INVALID_DATA })
                }

            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        TO_ATTRIBUTE_QUERY: ({ name, value }) => {
            try {
                const NORMAL = THIS.OPTION().NORMAL
                const query = NORMAL.LEFT_QUERA_SYMBOL + name + NORMAL.EQUAL_SYMBOL +
                    NORMAL.SINGLE_NHAY_SYMBOL + value
                    + NORMAL.SINGLE_NHAY_SYMBOL + NORMAL.RIGHT_QUERA_SYMBOL

                return query
            } catch (error) { }

        },

        TO_NAME: ({ path }) => {
            try {

                var pathArr = Array.from(path)

                pathArr = THIS.CONVERT.HEAD_EMPTY({ pathArray: pathArr })
                pathArr = THIS.CONVERT.TAIL_EMPTY({ pathArray: pathArr })

                return String(THIS.OPTION_METHOD().REPLACE.TO_NAME({ input: pathArr.join(String()) })).toLowerCase()
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        TAIL_EMPTY: ({ pathArray }) => {
            try {

                if (Array.isArray(pathArray)) {
                    const NORMAL = THIS.OPTION().NORMAL
                    const invalidCharacter = [NORMAL.DOT_SYMBOL, NORMAL.DOUBLE_DOT_SYMBOL, NORMAL.RIGHT_SLASH_SYMBOL]
                    var isValidPath = false

                    while (!isValidPath && !THIS.CHECK.IS_ARRAY_EMPTY({ array: pathArray })) {
                        if (invalidCharacter.find(x => x == pathArray[THIS.EX.TRUE_ARRAY_LENGTH({ array: pathArray })]) || THIS.CHECK.IS_ARRAY_EMPTY({ array: pathArray[THIS.EX.TRUE_ARRAY_LENGTH({ array: pathArray })] })) {
                            pathArray.pop()
                        }
                        else {
                            isValidPath = true
                        }
                    }

                    return pathArray
                }
                else {
                    THIS.EX.ERROR({ error: THIS.OPTION().MESSAGE.ARRAY_IS_INVALID })
                }

            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        TAIL_AND_HEAD_EMPTY: ({ pathArray }) => {
            try {
                if (Array.isArray(pathArray)) {
                    return THIS.CONVERT.HEAD_EMPTY({ pathArray: THIS.CONVERT.TAIL_EMPTY({ pathArray: pathArray }) })
                }
                else {
                    THIS.EX.ERROR({ error: THIS.OPTION().MESSAGE.ARRAY_IS_INVALID })
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        ORIGIN: ({ path }) => {
            try {
                const origin = document.location.origin;

                var logicPath = THIS.EX.MAP({ path: origin, subPath: path })
                return logicPath;
            } catch (error) {
                THIS.EX.ERROR(error);
            }
        },

        RELEASE: ({ path }) => {
            const VERSION = THIS.CURRENT.PROPERTIES.STATUS.version

            var CURRENT = String()
            if (VERSION) {
                CURRENT = VERSION
            }
            return THIS.EX.MAP({ path: CURRENT, subPath: path })
        },


        LOGIC: ({ path, subPath }) => {

            try {

                if (path && subPath) {
                    var pathArr = THIS.OPTION().NORMAL.ARRAY_EMPTY
                    var subPathArr = THIS.OPTION().NORMAL.ARRAY_EMPTY
                    var haveOriginUrl = THIS.OPTION().NORMAL.ARRAY_EMPTY
                    var pathSplit = THIS.CONVERT.TRIM_STRING({ str: path }).split(THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL)

                    var subPathSplit = THIS.CONVERT.TRIM_STRING({ str: subPath }).split(THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL)
                    var status = {
                        pathEnd: false,
                        subPathEnd: false
                    }


                    if (THIS.OPTION().PATH.ARRAY_ORIGIN_METHOD.find(x => {
                        if (String(path).search(x) >= THIS.OPTION().NORMAL.NUMBER_ZERO) {
                            return true
                        }
                    })) {
                        haveOriginUrl = path.split(THIS.OPTION().NORMAL.DOUBLE_RIGHT_SLASH_SYMBOL)
                        pathSplit = haveOriginUrl[THIS.OPTION().NORMAL.NUMBER_ONE].split(THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL)
                        haveOriginUrl[THIS.OPTION().NORMAL.NUMBER_ONE] = pathSplit.shift()
                    }

                    pathSplit = THIS.EX.ARRAY_REMOVE_EMPTY({ array: pathSplit })
                    subPathSplit = THIS.EX.ARRAY_REMOVE_EMPTY({ array: subPathSplit })

                    if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: pathSplit })) {

                        pathSplit.forEach(element => {
                            if (!status.pathEnd) {
                                if (element == THIS.OPTION().NORMAL.DOUBLE_DOT_SYMBOL) {
                                    if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: pathArr })) {
                                        pathArr.pop()
                                    }
                                    else {
                                        status.pathEnd = true
                                        THIS.EX.ERROR({ error: THIS.OPTION().MESSAGE.INVALID_OUT })
                                    }
                                }
                                else if (element != THIS.OPTION().NORMAL.DOT_SYMBOL) {
                                    pathArr.push(element)
                                }
                            }
                            else {
                                return
                            }

                        });

                    }

                    if (!status.pathEnd) {
                        if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: subPathSplit })) {
                            subPathSplit.forEach(element => {
                                if (!status.subPathEnd) {
                                    if (element == THIS.OPTION().NORMAL.DOUBLE_DOT_SYMBOL) {
                                        if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: subPathArr })) {
                                            subPathArr.pop()
                                        }
                                        else {
                                            if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: pathArr })) {
                                                pathArr.pop()
                                            }
                                            else {
                                                status.pathEnd = true
                                                status.subPathEnd = true
                                                THIS.EX.ERROR({
                                                    error: THIS.OPTION().MESSAGE.INVALID_OUT + THIS.OPTION().NORMAL.SPACE + path
                                                        + THIS.OPTION().NORMAL.SPACE + subPath
                                                })
                                            }
                                        }
                                    }
                                    else if (element != THIS.OPTION().NORMAL.DOT_SYMBOL) {
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
                        if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: haveOriginUrl })) {
                            origin = THIS.EX.ARRAY_REMOVE_EMPTY({ array: haveOriginUrl }).join(THIS.OPTION().NORMAL.DOUBLE_RIGHT_SLASH_SYMBOL) + THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL
                        }



                        var pathReturn = origin + THIS.CONVERT.TAIL_EMPTY({ pathArray: pathArr }).join(THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL) +
                            THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL +
                            THIS.CONVERT.HEAD_EMPTY({ pathArray: subPathArr }).join(THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL)


                        const pathThis = THIS.CONVERT.REMOVE_DUPLICATE.SYMBOL({
                            input: THIS.CONVERT.REMOVE_DUPLICATE.INPUT.SYMBOL({
                                input: {
                                    symbol: THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL,
                                    input: pathReturn,
                                    replace: THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL,
                                    keep: THIS.OPTION().NORMAL.NUMBER_ONE,
                                    special: THIS.OPTION().PATH.ARRAY_ORIGIN_METHOD
                                }
                            })
                        })

                        return pathThis
                    }
                    else {
                        return String()
                    }
                }
                else {
                    THIS.EX.ERROR({ error: THIS.OPTION().MESSAGE.INVALID })
                }

            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        TO_FILE_GET_FOLDER: ({ path }) => {

            try {
                var arrPath = String(path).split(THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL)
                arrPath.pop()
                return arrPath.join(THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL)
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        TRIM_STRING: ({ str }) => {
            try {
                if (str) {
                    return String(str).trim()
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        EMPTY_ARRAY: () => {
            try {
                return array = THIS.OPTION().NORMAL.ARRAY_EMPTY
            } catch (error) {
                THIS.EX.ERROR(error);
            }
        },
        TO_STRING: (input) => {
            try {
                const iProps = input
                if (iProps.specialSymbol) {
                    return THIS.OPTION().NORMAL.NHAY_CHAR_SYMBOL + iProps.specialSymbol + iProps.input + iProps.specialSymbol + THIS.OPTION().NORMAL.NHAY_CHAR_SYMBOL;

                }
                else {
                    return THIS.OPTION().NORMAL.NHAY_CHAR_SYMBOL + iProps.input + THIS.OPTION().NORMAL.NHAY_CHAR_SYMBOL;

                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },
        REMOVE_DUPLICATE: {
            INPUT: {
                SYMBOL: ({ input }) => {
                    return {
                        symbol: input.symbol,
                        input: input.input,
                        replace: input.replace,
                        keep: input.keep,
                        special: input.special
                    }

                }
            },


            SYMBOL: ({ input }) => {
                try {
                    const NORMAL = THIS.OPTION().NORMAL
                    const current_input = THIS.CONVERT.REMOVE_DUPLICATE.INPUT.SYMBOL({ input: input })
                    const array = [...String(current_input.input)]
                    var input = String(current_input.input)
                    var maxSpace = NORMAL.NUMBER_ZERO;
                    var maxNow = NORMAL.NUMBER_ZERO;
                    var parseSpecial = THIS.OPTION().NORMAL.ARRAY_EMPTY

                    current_input.special.forEach(element => {
                        const array = String(element).split(current_input.symbol)
                        parseSpecial.push([array[NORMAL.NUMBER_ZERO], array[NORMAL.NUMBER_ONE]])
                    });


                    for (let index = THIS.OPTION().NORMAL.NUMBER_ZERO; index < array.length; index++) {
                        const element = array[index];
                        if (element == current_input.symbol) {
                            if (index != THIS.EX.TRUE_ARRAY_LENGTH({ array: array }) && array[index + THIS.OPTION().NORMAL.NUMBER_ONE]) {
                                maxNow += THIS.OPTION().NORMAL.NUMBER_ONE;
                                if (maxNow > maxSpace) {
                                    maxSpace = maxNow
                                }
                            }

                        }
                        else {
                            maxNow = THIS.OPTION().NORMAL.NUMBER_ZERO;
                        }
                    }



                    for (let index = maxSpace; index > current_input.keep; index--) {
                        var spaces = String();
                        for (let i = THIS.OPTION().NORMAL.NUMBER_ZERO; i < index; i++) {
                            spaces += current_input.symbol
                        }


                        var isEnd = false

                        var prePosition = THIS.OPTION().NORMAL.NUMBER_ZERO
                        var preContent = input
                        while (!isEnd) {
                            var current = String(input).indexOf(spaces, prePosition + NORMAL.NUMBER_ONE)
                            if (prePosition != current) {
                                prePosition = current
                                if (current >= NORMAL.NUMBER_ZERO) {
                                    var parseStatus = {
                                        headSame: false,
                                        assSame: false
                                    }
                                    parseSpecial.forEach((parseElement, index) => {
                                        var step = THIS.OPTION().NORMAL.NUMBER_ZERO

                                        parseElement.forEach(pei => {
                                            if (step == THIS.OPTION().NORMAL.NUMBER_ZERO) {
                                                const same = input.slice(current - pei.length, current)
                                                if (same == pei) {
                                                    parseStatus.headSame = true
                                                }
                                                step += THIS.OPTION().NORMAL.NUMBER_ONE
                                            }
                                            else {
                                                const same = input.slice(current, current + pei.length)
                                                if (same == pei) {
                                                    parseStatus.assSame = true
                                                }
                                            }

                                        });

                                    });

                                    if (!parseStatus.headSame || !parseStatus.assSame) {
                                        const content_one = input.slice(THIS.OPTION().NORMAL.NUMBER_ZERO, current);
                                        const content_two = input.slice(current + spaces.length, input.length)
                                        input = content_one + current_input.symbol + content_two
                                        prePosition = prePosition - (preContent.length - input.length)
                                        preContent = input
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
                    return input


                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }


        },

        TO_RUNABLE_JAVASCRIPT: (input) => {


            try {
                const num_zero = THIS.OPTION().NORMAL.NUMBER_ZERO
                const num_one = THIS.OPTION().NORMAL.NUMBER_ONE
                const stringContent = String(input)
                var split_one = stringContent.split(THIS.OPTION().NAME.RENDER)
                var split_three = split_four = split_five = String()
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: split_one })) {
                    split_three = split_one[num_one].split(THIS.OPTION().NAME.FROM)

                }
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: split_three })) {
                    split_four = split_three[num_one].split(THIS.OPTION().NORMAL.LEFT_BRACKET_SYMBOL)

                }
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: split_four })) {
                    split_five = split_four[num_one].split(THIS.OPTION().NORMAL.RIGHT_BRACKET_SYMBOL)
                }

                if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: split_five })) {

                    const clearSplit = THIS.CONVERT.TRIM_STRING({ str: split_five })

                    if (clearSplit[THIS.OPTION().NORMAL.NUMBER_ZERO] != THIS.OPTION().NORMAL.NHAY_CHAR_SYMBOL) {
                        const input = split_five[num_zero]

                        const other = stringContent.split(THIS.OPTION().NAME.RENDER)[num_one].split(THIS.OPTION().NORMAL.RIGHT_BRACKET_SYMBOL)

                        var path = String();

                        for (let index = THIS.OPTION().NORMAL.NUMBER_ONE; index < other.length; index++) {
                            if (index != THIS.EX.TRUE_ARRAY_LENGTH({ array: other })) {
                                path += other[index] + THIS.OPTION().NORMAL.RIGHT_BRACKET_SYMBOL
                            }
                            else {
                                path += other[index]
                            }

                        }

                        const contentln = THIS.CONVERT.TO_STRING({ input: input })

                        const runable = split_one[num_zero] + THIS.OPTION().NAME.RENDER +
                            split_three[num_zero] + THIS.OPTION().NAME.FROM +
                            split_four[num_zero] + THIS.OPTION().NORMAL.LEFT_BRACKET_SYMBOL +
                            contentln + THIS.OPTION().NORMAL.RIGHT_BRACKET_SYMBOL + path;
                        return runable
                    }
                    else {
                        return input
                    }

                }
                else {
                    return input
                }


            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        TO_NORMAL_NAME_FROM_ATTRIBUTE: ({ name }) => {
            try {
                if (name) {
                    const input = [THIS.OPTION().NORMAL.DOT_SYMBOL, THIS.OPTION().NORMAL.THANG_SYMBOL]
                    name = THIS.CONVERT.TRIM_STRING({ str: name })
                    input.forEach(element => {
                        name = name.replace(element, THIS.OPTION().NORMAL.STRING_EMPTY)
                    })
                    return name
                }

            } catch (error) { THIS.EX.ERROR(error) }
        }

    }


    THIS.THIS = {
        GET: ({ path, out }) => {
            try {
                return new Promise((resolve, reject) => {

                    var ipath = path

                    if (!out) {
                        const rpath = THIS.CONVERT.RELEASE({ path })
                        ipath = THIS.CONVERT.ORIGIN({ path: rpath })
                    }

                    fetch(ipath).then((response) => {
                        resolve({ url: response.url, response: response })
                    }).catch(error => reject(error))

                });


            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        GET_JSON: ({ path, out }) => {
            try {
                return new Promise((resolve, reject) => {
                    THIS.THIS.GET({ path: path, out: out }).then(res => {
                        const iResponse = res
                        iResponse.response.json().then(_data => {
                            resolve({ url: iResponse.url, response: _data })
                        })

                    }).catch(error => reject(error))

                });
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        GET_TEXT: ({ path, out }) => {
            try {
                return new Promise((resolve, reject) => {
                    THIS.THIS.GET({ path: path, out: out }).then(res => {
                        const iResponse = res
                        iResponse.response.text().then(_data => {
                            resolve({ url: iResponse.url, response: _data })
                        })
                    }).catch(error => reject(error))

                });
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        }

    }




    THIS.CHECK = {
        IS_ARRAY_EMPTY: ({ array }) => {
            if (array && array.length > THIS.OPTION().NORMAL.NUMBER_ZERO) {
                return false
            }
            else {
                return true
            }
        },

        IS_OBJECT: ({ object }) => {
            try {
                if (object) {
                    if (Object.keys(object).length > THIS.OPTION().NORMAL.NUMBER_ZERO) {
                        return true
                    }
                    else {
                        return false
                    }
                }

            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },

        IS_QUERY_ELEMENT: ({ name }) => {
            try {
                if (name) {
                    var arrContent = Array.from(THIS.CONVERT.TRIM_STRING({ str: name }))
                    const arrCheck = [THIS.OPTION().NORMAL.DOT_SYMBOL, THIS.OPTION().NORMAL.THANG_SYMBOL]
                    const same = arrCheck.find(i => i == arrContent[THIS.OPTION().NORMAL.NUMBER_ZERO])

                    if (same) {
                        return true
                    }
                    else {
                        return false
                    }
                }
            } catch (error) { THIS.EX.ERROR(error) }

        },

        IS_MAS_ARRAY_FROM_ZERO: ({ array, compare }) => {
            try {
                if (Array.isArray(array) && array.length - THIS.OPTION().NORMAL.NUMBER_ONE == compare) {
                    return true
                }
                else {
                    return false
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        IS_MAS_ARRAY_FROM_ONE: ({ array, compare }) => {
            try {
                if (Array.isArray(array) && array.length == compare) {
                    return true
                }
                else {
                    return false
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        IS_STRING_EMPTY_OR_DEFAULT: ({ input }) => {
            try {
                if (input == undefined || String(input).trim() == String()) {
                    return true
                }
                else {
                    return false
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }

    }


    THIS.EVENT = {
        SET_EVENT_METHOD: ({ event }) => {
            try {
                event()
            } catch (error) {
                THIS.EX.ERROR(error);
            }
        },
        ON_LOAD_METHOD: ({ element, event }) => {
            THIS.EVENT.SET_EVENT_METHOD({
                event: () => {
                    $(element).on(THIS.OPTION().EVENT.LOAD, function (e) {
                        event(e);
                    });
                }
            })
        },
        SET_EVENT_BY_NAME: ({ target, name, callBack }) => {
            $(target).on(name, function (e) {
                callBack(e)
            });
        }

    }



    THIS.METHOD = {

        REQUIRE_THING: ({ tagName, levelTag, tagAppend, input, haveObject, mode, isJustPath }) => {
            try {
                const NORMAL = THIS.OPTION().NORMAL

                if (tagAppend && tagName) {

                    const nameAttribute = THIS.CONVERT.TO_ATTRIBUTE_QUERY(
                        {
                            name: THIS.OPTION().ATTRIBUTE.NAME_NAME, value: levelTag
                        }
                    )


                    const require = $(tagName + nameAttribute)

                    if (THIS.CHECK.IS_ARRAY_EMPTY({ array: require })) {
                        var tag = document.createElement(tagName)
                        tag.setAttribute(THIS.OPTION().ATTRIBUTE.NAME_NAME, levelTag)
                        $(tagAppend).append(tag)
                    }

                    tagName = tagName + nameAttribute

                }

                if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: input.object })) {

                    var arrName = NORMAL.ARRAY_EMPTY

                    const OH = () => {
                        var isLoad = true

                        arrName.forEach((name, index) => {
                            var notLoad = haveObject.find(x => x.name == name)
                            if (notLoad && !notLoad.load) {
                                isLoad = false
                            }

                            if (index == THIS.EX.TRUE_ARRAY_LENGTH({ array: arrName })) {
                                if (isLoad) {
                                    input.callBack()
                                }
                            }

                        });
                    }

                    input.object.forEach(element => {

                        const current = isJustPath ? element : element.SCRIPT

                        if (!THIS.CHECK.IS_STRING_EMPTY_OR_DEFAULT({ input: current })) {


                            const path = THIS.EX.MAP({ path: input.path, subPath: current, release: true })

                            var to_name = element.NAME ? element.NAME : THIS.CONVERT.TO_NAME({ path: path })

                            arrName.push(to_name)

                            const item = haveObject.find(x => x.name == to_name)

                            if (THIS.CHECK.IS_ARRAY_EMPTY({ array: item })) {
                                if (mode) {
                                    if (mode.name == THIS.OPTION().NAME.COMPONENT) {

                                        const exist = haveObject.find(i => i.name == to_name)

                                        if (!THIS.CHECK.IS_OBJECT({ object: exist })) {
                                            haveObject.push({
                                                src: current,
                                                name: to_name,
                                                load: NORMAL.FALSE,
                                            })


                                            THIS.THIS.GET_TEXT({ path: path }).then(_data => {
                                                if (mode.map) {
                                                    try {
                                                        const code = eval(THIS.CONVERT.SPECIAL({ input: _data.response }))
                                                        const item = mode.map.find(x => x.name == to_name)
                                                        if (!item) {
                                                            mode.map[to_name] = code
                                                        }
                                                        const added = haveObject.find(x => x.name == to_name)
                                                        added.load = NORMAL.TRUE
                                                        OH()
                                                    } catch (error) {
                                                        THIS.EX.ERROR(error, _data)
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
                                    const exis = haveObject.find(i => i.name == to_name)
                                    if (!THIS.CHECK.IS_OBJECT({ object: exis })) {
                                        haveObject.push({
                                            src: current,
                                            name: to_name,
                                            load: NORMAL.FALSE,
                                        })



                                        const attribute = THIS.CONVERT.TO_ATTRIBUTE_QUERY({
                                            name: THIS.OPTION().ATTRIBUTE.NAME_NAME,
                                            value: to_name
                                        })

                                        const styleQuery = THIS.OPTION().TAG.STYLE + NORMAL.SPACE + attribute


                                        const exist = $(tagName).find(styleQuery)

                                        if (THIS.CHECK.IS_ARRAY_EMPTY({ array: exist })) {

                                            THIS.THIS.GET_TEXT({ path: path }).then(data => {
                                                const res = data.response

                                                const resData = THIS.CONVERT.SPECIAL({ input: res })

                                                const tag = THIS.OPTION_METHOD().TAG.CREATE_STYLE_CSS({
                                                    name: to_name,
                                                    css: resData
                                                })
                                                const item = haveObject.find(x => x.name == to_name)
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
                                input.callBack()
                            }
                        }
                        else {
                            input.callBack()
                        }
                    });
                }
                else {
                    input.callBack()
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        LOAD_MODULE: ({ arrayModule, callBack }) => {
            try {
                if (THIS.CHECK.IS_OBJECT({ object: arrayModule })) {

                    const OPTIONS = THIS.OPTION()

                    const nameAttribute = THIS.CONVERT.TO_ATTRIBUTE_QUERY(
                        {
                            name: OPTIONS.ATTRIBUTE.NAME_NAME,
                            value: OPTIONS.ATTRIBUTE_VALUE.CSS_LEVEL_ONE_NAME
                        }
                    )
                    const tagsName = OPTIONS.TAG.CSS + nameAttribute
                    const tagsAppend = $(tagsName)

                    if (THIS.CHECK.IS_ARRAY_EMPTY({ array: tagsAppend })) {
                        var tag = document.createElement(OPTIONS.TAG.CSS)
                        tag.setAttribute(OPTIONS.ATTRIBUTE.NAME_NAME, OPTIONS.ATTRIBUTE_VALUE.CSS_LEVEL_ONE_NAME)
                        $(OPTIONS.TAG.HEAD).append(tag)
                    }
                    const currentPath = THIS.OPTION().PATH.BASE


                    var count_loaded = THIS.OPTION().NORMAL.NUMBER_ZERO

                    const OH = () => {
                        if (THIS.EX.ARRAY_LENGTH({ array: arrayModule }) == THIS.OPTION().NORMAL.NUMBER_ONE && count_loaded == THIS.EX.ARRAY_LENGTH({ array: arrayModule })) {
                            callBack()
                        }

                        if (THIS.EX.ARRAY_LENGTH({ array: arrayModule }) > THIS.OPTION().NORMAL.NUMBER_ONE && count_loaded == THIS.EX.ARRAY_LENGTH({ array: arrayModule })) {
                            callBack()
                        }
                    }

                    const update_count_loaded = () => {
                        count_loaded = count_loaded + THIS.OPTION().NORMAL.NUMBER_ONE
                        OH()
                    }


                    arrayModule.forEach(element => {

                        if (element.SCRIPT && !element.LOAD_SCRIPT) {
                            const scriptPath = THIS.EX.MAP({ path: currentPath, subPath: element.SCRIPT })
                            THIS.THIS.GET_TEXT({ path: scriptPath }).then(_data => {
                                try {
                                    const input = _data.response
                                    const method = eval(THIS.CONVERT.SPECIAL({ input: input }))
                                    if (method && !THIS.MODULE.INNIT[element.NAME]) {
                                        THIS.MODULE.INNIT[element.NAME] = method
                                    }
                                    update_count_loaded()
                                } catch (error) {
                                    THIS.EX.ERROR(error, _data)
                                    update_count_loaded()
                                }
                            }).catch(error => {
                                THIS.EX.ERROR(error)
                                update_count_loaded()
                            })
                        }

                        if (element.REQUIRE && !element.LOAD_REQUIRE) {
                            const requirePath = THIS.EX.MAP({ path: currentPath, subPath: element.REQUIRE })
                            THIS.THIS.GET({ path: requirePath }).then(_data => {
                                try {
                                    update_count_loaded()

                                } catch (error) {
                                    THIS.EX.ERROR(error, _data)
                                    update_count_loaded()
                                }
                            }).catch(error => {
                                THIS.EX.ERROR(error)
                                update_count_loaded()
                            })
                        }


                        if (element.CSS && !element.LOAD_CSS) {
                            const cssPath = THIS.EX.MAP({ path: currentPath, subPath: element.CSS })
                            var haveObject = THIS.IS.HAVE.CSS
                            const NORMAL = THIS.OPTION().NORMAL
                            const name = THIS.CONVERT.TO_NAME({ path: cssPath })
                            const exis = haveObject.find(i => i.name == name)
                            if (!THIS.CHECK.IS_OBJECT({ object: exis })) {
                                haveObject.push({
                                    src: element.CSS,
                                    name: name,
                                    load: NORMAL.FALSE,
                                })

                                const attribute = THIS.CONVERT.TO_ATTRIBUTE_QUERY({
                                    name: THIS.OPTION().ATTRIBUTE.NAME_NAME,
                                    value: element.name
                                })

                                const styleQuery = THIS.OPTION().TAG.STYLE + NORMAL.SPACE + attribute


                                const exist = $(tagsName).find(styleQuery)

                                if (THIS.CHECK.IS_ARRAY_EMPTY({ array: exist })) {

                                    THIS.THIS.GET_TEXT({ path: cssPath }).then(_data => {
                                        const res = _data.response
                                        const resData = THIS.CONVERT.SPECIAL({ input: res })

                                        const tag = THIS.OPTION_METHOD().TAG.CREATE_STYLE_CSS({
                                            name: name,
                                            css: resData
                                        })
                                        var item = haveObject.find(x => x.name == name)
                                        if (item) {
                                            item.load = NORMAL.TRUE
                                        }

                                        $(tagsName).append(tag);
                                        update_count_loaded()
                                    }).catch(error => {
                                        THIS.EX.ERROR(error)
                                        update_count_loaded()
                                    })
                                }
                                else {
                                    update_count_loaded()
                                }
                            }
                            else {
                                update_count_loaded()
                            }

                        }
                    })
                }
            } catch (error) { THIS.EX.ERROR(error) }
        },

        GET_COMPONENT: ({ name, method }) => {
            try {
                const COMPONENT = THIS.REQUIRE.IS.COMPONENT.INNIT
                if (COMPONENT && COMPONENT[name] != undefined) {
                    const component = COMPONENT[name]
                    if (method) {
                        return component()
                    }
                    else {
                        return component
                    }
                }
                else {
                    THIS.EX.ERROR(THIS.OPTION().MESSAGE.COMPONENT_NOT_EXIST, name)
                    return false
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        GET_MODULE: ({ name, method }) => {
            try {
                const MODULES = THIS.MODULE.INNIT
                if (MODULES && MODULES[name] != undefined) {
                    const module = MODULES[name]
                    if (method) {
                        return module()
                    }
                    else {
                        return module
                    }
                }
                else {
                    THIS.EX.ERROR(THIS.OPTION().MESSAGE.MODULE_NOT_EXIST, name)
                    return false
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        GET_SETTING: ({ name, method }) => {
            try {
                const SETTING = THIS.IS.SETTING
                if (SETTING && SETTING[name] != undefined) {
                    const setting = SETTING[name]
                    if (method) {
                        return setting()
                    }
                    else {
                        return setting
                    }
                }
                else {
                    THIS.EX.ERROR(THIS.OPTION().MESSAGE.SETTING_NOT_EXIST, name)
                    return false
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        SET_SETTING: ({ name, input }) => {
            try {
                const SETTING = THIS.IS.SETTING
                if (SETTING) {
                    SETTING[name] = input
                    return SETTING[name]
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        GET_RUNNING_VARIBLE: ({ name, method }) => {
            try {
                const VARRIBLE = THIS.RUNNING.VARIBLE
                if (VARRIBLE && VARRIBLE[name] != undefined) {
                    const varible = VARRIBLE[name]
                    if (method) {
                        return varible()
                    }
                    else {
                        return varible
                    }
                }
                else {
                    THIS.EX.ERROR(THIS.OPTION().MESSAGE.VARIBLE_NOT_EXIST, name)
                    return false
                }

            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        SET_RUNNING_VARIBLE: ({ name, input }) => {
            try {
                const VARRIBLE = THIS.RUNNING.VARIBLE
                if (VARRIBLE) {
                    VARRIBLE[name] = input
                    return VARRIBLE[name]
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        GET_RUNNING_CONFIG: ({ name, method }) => {
            try {
                const config = THIS.RUNNING.CONFIG
                if (config && config[name] != undefined) {
                    const config_varible = config[name]
                    if (method) {
                        return config_varible()
                    }
                    else {
                        return config_varible
                    }
                }
                else {
                    THIS.EX.ERROR(THIS.OPTION().MESSAGE.VARIBLE_NOT_EXIST, name)
                    return false
                }

            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        SET_RUNNING_CONFIG: ({ name, input }) => {
            try {
                const config = THIS.RUNNING.CONFIG
                if (config) {
                    config[name] = input
                    return config[name]
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },


    }

    THIS.SESSION = {
        THIS: {
            GET: ({ name }) => {
                try {
                    return sessionStorage.getItem(name)
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            SET: ({ name, input }) => {
                try {
                    return sessionStorage.setItem(name, input)
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },
        CREATE: () => {
            try {
                const session = THIS.OPTION_METHOD().REPLACE.BASE64_SORT({
                    input: btoa(String(btoa(THIS.EX.RANDOM({ num: THIS.OPTION().NUMBER.THIRTY }) + navigator.userAgent + Date.now())).toLowerCase())
                })

                THIS.METHOD.SET_RUNNING_CONFIG({
                    name: THIS.OPTION().NAME.START_CONFIG[THIS.OPTION().NORMAL.NUMBER_TWO],
                    input: session
                })

            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        GET: ({ name }) => {
            try {
                return THIS.SESSION.THIS.GET({ name: name })
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        SET: ({ name, input }) => {
            try {
                return THIS.SESSION.THIS.SET({ name: name, input: input })
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        }
    }

    THIS.RESPONSE = {
        THIS: {
            ELSE: ({ response, currentStatus }) => {
                try {
                    return {
                        ELSE: ({ callBack, status }) => {
                            if (response && response.status != currentStatus) {
                                if (status) {
                                    if (status == response.status) {
                                        if (callBack) {
                                            callBack()
                                        }
                                    }
                                }
                                else {
                                    if (callBack) {
                                        callBack()
                                    }
                                }
                            }
                        }
                    }
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },
        METHOD: {
            COUNT_TIME: ({ countNumber }) => {
                try {
                    setTimeout(() => {
                        if (countNumber < THIS.OPTION().NUMBER.THIRTY) {
                            countNumber = countNumber + THIS.OPTION().NORMAL.NUMBER_ZERO
                        }
                    }, THIS.OPTION().NUMBER.ONE_THOUSAND)
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },
        IS: {
            GOOD: ({ response, callBack }) => {
                try {
                    if (response && response.status == THIS.OPTION().RESPONSE.STATUS[THIS.OPTION().NORMAL.NUMBER_ZERO]) {
                        if (callBack) {
                            callBack()
                        }
                    }
                    return THIS.RESPONSE.THIS.ELSE({
                        response: response,
                        currentStatus: THIS.OPTION().RESPONSE.STATUS[THIS.OPTION().NORMAL.NUMBER_ZERO]
                    })
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            BAD: ({ response, callBack }) => {
                try {
                    if (response && response.status == THIS.OPTION().RESPONSE.STATUS[THIS.OPTION().NORMAL.NUMBER_ONE]) {
                        if (callBack) {
                            callBack()
                        }
                    }
                    return THIS.RESPONSE.THIS.ELSE({
                        response: response,
                        currentStatus: THIS.OPTION().RESPONSE.STATUS[THIS.OPTION().NORMAL.NUMBER_ONE]
                    })
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            NOLATE: ({countTime, callBack}) => {
                try{
                    if(countTime < THIS.OPTION().NUMBER.THIRTY && callBack){
                        callBack()
                    }
                }catch(error){
                    THIS.EX.ERROR(error)
                }
            }
        }
    }

    THIS.REQUEST = {
        THIS: {
            REQUEST: ({ target, options }) => {
                try {

                    const current_session = {
                        se: THIS.SESSION.GET({ name: THIS.OPTION().SESSION.NAME[THIS.OPTION().NORMAL.NUMBER_ZERO] }),
                        random_se: THIS.METHOD.GET_RUNNING_CONFIG({ name: THIS.OPTION().NAME.START_CONFIG[THIS.OPTION().NORMAL.NUMBER_TWO] }),
                    }

                    const headers = { ...options.headers, ...current_session }

                    options.headers = headers

                    return fetch(target, options)
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            REQUEST_CONFIG: () => {
                try {
                    const config = THIS.METHOD.GET_RUNNING_CONFIG({
                        name: THIS.OPTION().NAME.START_CONFIG[THIS.OPTION().NORMAL.NUMBER_ZERO]
                    })
                    return config
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },
            REQUEST_INFOMATION: ({ target, options, method }) => {
                try {

                    options = options ? options : {}
                    options.method = method
                    return THIS.REQUEST.THIS.REQUEST({ target: target, options: options })


                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }

        },
        GET: ({ target, options }) => {
            try {
                return THIS.REQUEST.THIS.REQUEST_INFOMATION({
                    target: target,
                    options: options,
                    method: THIS.OPTION().VARIBLE.GET
                })
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },
        POST: ({ target, options }) => {
            try {
                return THIS.REQUEST.THIS.REQUEST_INFOMATION({
                    target: target,
                    options: options,
                    method: THIS.OPTION().VARIBLE.POST
                })
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

    }

    THIS.PAGE = {
        REMOVE: ({ container }) => {
            try {
                const contain = $(container)
                if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: contain })) {
                    $(contain).each((num, element) => {
                        const nodes = element.childNodes
                        if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: nodes })) {
                            $(nodes).each((n, node) => {
                                $(node).remove()
                            })
                        }
                    })
                }
            } catch (error) { THIS.EX.ERROR(error) }
        },
        APPEND: ({ container, input }) => {
            try {
                $(container).append(input)
            } catch (error) { THIS.EX.ERROR(error) }
        },
        REAPPEND: ({container, input}) => {
            try{

                THIS.PAGE.REMOVE({container: container})
                THIS.PAGE.APPEND({container: container, input: input})
            }catch(error){
                THIS.EX.ERROR(error)
            }
        },
        DOCUMENT: {
            SET_VARIBLE: ({ container, varible }) => {
                try {
                    $(container).val(varible)
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        }
    }

    THIS.MODULE = {
        GET: ({ path, callBack, include }) => {
            try {
                var arrLoading = []
                var require = []

                const module_include = include && include.MOAD ? include.MOAD : {}

                const GET_FROM = ({ module, pathon }) => {
                    const exi = require.find(i => i.url == path)

                    if (exi) {
                        exi.load = true
                    }
                    const path_to_this = THIS.CONVERT.TO_FILE_GET_FOLDER({ path: pathon })

                    if (module.INCLUDE && Array.isArray(module.INCLUDE)) {
                        module.INCLUDE.forEach(element => {
                            const item = require.find(i => i.url == element)
                            if (!item) {
                                const element_path = THIS.CONVERT.TAIL_AND_HEAD_EMPTY({
                                    pathArray: Array.from(THIS.EX.MAP({
                                        path: path_to_this,
                                        subPath: element
                                    }))
                                }).join(String())
                                require.push({
                                    url: element_path,
                                    load: false
                                })
                                GET({ path: element_path })
                            }

                        })
                    }


                    if (THIS.CHECK.IS_OBJECT({ object: module.MODULE })) {
                        Object.keys(module.MODULE).forEach(element => {

                            var MODULES = module.MODULE[element]

                            if (MODULES.SCRIPT) {
                                if (Array.isArray(MODULES.SCRIPT)) {
                                    MODULES.SCRIPT.forEach(arrItem => {
                                        arrLoading.push({
                                            NAME: element,
                                            SCRIPT: THIS.EX.MAP({
                                                path: path_to_this,
                                                subPath: arrItem
                                            }),
                                            LOAD_SCRIPT: false,
                                        })
                                    })

                                }
                                else {
                                    arrLoading.push({
                                        NAME: element,
                                        SCRIPT: THIS.EX.MAP({
                                            path: path_to_this,
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
                                            CSS: THIS.EX.MAP({
                                                path: path_to_this,
                                                subPath: arrItem
                                            }),
                                            LOAD_CSS: false,
                                        })
                                    })

                                }
                                else {
                                    arrLoading.push({
                                        NAME: element,
                                        CSS: THIS.EX.MAP({
                                            path: path_to_this,
                                            subPath: MODULES.CSS
                                        }),
                                        LOAD_CSS: false,
                                    })
                                }
                            }

                        })


                    }

                    if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: module.REQUIRE })) {
                        module.REQUIRE.forEach(element => {
                            arrLoading.push({
                                REQUIRE: THIS.EX.MAP({
                                    path: path_to_this,
                                    subPath: element
                                }),
                                LOAD_REQUIRE: false,
                            })
                        })
                    }

                    const not_loaded = require.find(i => i.load == false)

                    if (!not_loaded) {
                        THIS.METHOD.LOAD_MODULE({
                            arrayModule: arrLoading,
                            callBack: () => {
                                callBack(include)
                            }
                        })
                    }
                }


                const GET = ({ path }) => {
                    THIS.THIS.GET_JSON({ path: path }).then((data) => {
                        const module = data.response
                        const parse = THIS.CONVERT.TAIL_AND_HEAD_EMPTY({ pathArray: Array.from(path) }).join(String())
                        var current = require.find(_item => _item.url == parse)
                        if (current && !current.load) {
                            current.load = true
                        }
                        GET_FROM({ module: module, pathon: parse })
                    })
                }

                GET_FROM({ module: module_include, pathon: path })

                if (!include) {
                    GET({ path: path })
                }

            } catch (error) {
                THIS.EX.ERROR(error)
            }

        }
    }


    THIS.RENDER = {
        THIS: {
            DATA: ({ input }) => {
                try {
                    THIS.THIS.GET_TEXT({ path: input.path }).then(_data => {
                        try {
                            const code = THIS.CONVERT.TO_RUNABLE_JAVASCRIPT(_data.response)
                            const method = eval(THIS.CONVERT.SPECIAL({ input: code }))
                            THIS.REQUIRE.LOAD({
                                INPUT: {
                                    PATH: THIS.CONVERT.TO_FILE_GET_FOLDER({ path: input.path }),
                                    DATA: method(),
                                    ROAD: input.this.road,
                                    THIS: input.this
                                }
                            })
                        } catch (error) {
                            THIS.EX.ERROR(error, _data)
                        }

                    }).catch(error => {
                        THIS.EX.ERROR(error)
                    })
                } catch (error) { THIS.EX.ERROR(error) }

            },
        },

        FROM: ({ input }) => {
            try {
                const path = THIS.EX.MAP({ path: input.path, subPath: input.subPath })


                THIS.RENDER.THIS.DATA({
                    input: {
                        path: path,
                        this: input
                    }
                })

            } catch (error) {
                THIS.EX.ERROR(error)
            }

        }
    }


    THIS.READY = {
        THIS: {
            READY_IS: () => {
                try {
                    var IS = THIS.IS

                    if (!IS.MAP) {
                        IS.MAP = {
                            PROPERTIES: {
                                MAP: false,
                                BOUNDER: {
                                    READY: false,
                                    CURRENT: String()
                                }
                            },
                            HISTORY: THIS.OPTION().NORMAL.ARRAY_EMPTY,
                            ROAD: THIS.OPTION().NORMAL.OBJECT_EMPTY,

                        }
                    }

                    if (!IS.SETTING) {
                        IS.SETTING = THIS.OPTION().NORMAL.OBJECT_EMPTY
                    }

                    return IS;
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },

            READY_RUNNING: () => {
                try {
                    if (!THIS.RUNNING) {
                        THIS.RUNNING = {
                            VARIBLE: THIS.OPTION().NORMAL.OBJECT_EMPTY,
                            CONFIG: THIS.OPTION().NORMAL.OBJECT_EMPTY
                        }
                    }
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },

            READY_CURRENT_PROPERTIES: () => {
                try {
                    if (!THIS.CURRENT.PROPERTIES) {
                        THIS.CURRENT.PROPERTIES = THIS.OPTION().NORMAL.OBJECT_EMPTY
                    }

                    return THIS.CURRENT.PROPERTIES;
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },

            READY_ROUTE_PARAMS: () => {
                try {
                    if (!THIS.ROAD.PARAMS) {
                        THIS.ROAD.PARAMS = {
                            DATA: THIS.OPTION().NORMAL.OBJECT_EMPTY
                        }
                    }

                    return THIS.ROAD.PARAMS;
                } catch (error) {
                    THIS.EX.ERROR(error)
                }

            },

            READY_HAVE: () => {
                try {
                    if (!THIS.IS.HAVE) {
                        const ARRAY_EMPTY = () => {
                            return THIS.OPTION().NORMAL.ARRAY_EMPTY
                        }

                        THIS.IS.HAVE = {
                            CSS: ARRAY_EMPTY(),
                            SCRIPT: ARRAY_EMPTY(),
                            COMPONENT: ARRAY_EMPTY(),
                        }

                        return THIS.IS.HAVE
                    }

                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },

            READY_SETTING: () => {
                try {
                    if (!THIS.IS.SETTING) {
                        THIS.IS.SETTING = THIS.OPTION().NORMAL.OBJECT_EMPTY
                    }
                    return THIS.IS.SETTING
                } catch (error) {
                    THIS.EX.ERROR(error)
                }

            },

            READY_MODULES: () => {
                try {
                    if (!THIS.MODULE.INNIT) {
                        THIS.MODULE.INNIT = THIS.OPTION().NORMAL.OBJECT_EMPTY
                    }
                    return THIS.MODULE
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            },

            READY_HISTORY: () => {
                try {
                    if (!THIS.ROAD.HISTORY.PROPERTIES) {
                        THIS.ROAD.HISTORY.PROPERTIES = THIS.OPTION().NORMAL.OBJECT_EMPTY
                    }
                    if (!THIS.ROAD.HISTORY.HISTORY) {
                        THIS.ROAD.HISTORY.HISTORY = THIS.OPTION().NORMAL.OBJECT_EMPTY
                    }
                    return THIS.ROAD.HISTORY
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },

        READY: () => {
            try {
                const READY = THIS.READY.THIS
                READY.READY_IS()
                READY.READY_HAVE()
                READY.READY_HISTORY()
                READY.READY_RUNNING()
                READY.READY_ROUTE_PARAMS()
                READY.READY_SETTING()
                READY.READY_CURRENT_PROPERTIES()
                READY.READY_MODULES()
            } catch (error) {
                THIS.EX.ERROR(error)
            }

        },
    }


    THIS.CURRENT = {
        THIS: {
            GET: () => {
                try {
                    const element = THIS.OPTION().QUERY.PAGE_CONFIG_ELEMENT
                    if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: element })) {
                        const data = $(element).html()
                        const dataParse = JSON.parse(atob(data))
                        THIS.CURRENT.PROPERTIES.STATUS = dataParse
                    }
                } catch (error) { THIS.EX.ERROR(error) }
            }
        },

        UPDATE: () => {
            THIS.CURRENT.THIS.GET()
        }
    }


    THIS.REQUIRE = {
        IS: {

            CSS: {

                TAG: ({ path, subPath, name }) => {
                    var tag = document.createElement(THIS.OPTION().TAG.LINK)
                    const pather = THIS.OPTION().NORMAL.RIGHT_SLASH_SYMBOL + THIS.EX.MAP({ path: path, subPath: subPath })
                    $(tag).attr(THIS.OPTION().ATTRIBUTE.NAME_REL, THIS.OPTION().ATTRIBUTE_VALUE.REL_STYLESHEET)
                    $(tag).attr(THIS.OPTION().ATTRIBUTE.HREF_NAME, pather)
                    $(tag).attr(THIS.OPTION().ATTRIBUTE.NAME_NAME, name)
                    return tag;
                },

                CSS: ({ input }) => {

                    const HAVE = THIS.IS.HAVE

                    THIS.METHOD.REQUIRE_THING({
                        tagName: THIS.OPTION().TAG.CSS,
                        tagAppend: THIS.OPTION().TAG.HEAD,
                        levelTag: THIS.OPTION().ATTRIBUTE_VALUE.CSS_LEVEL_TWO_NAME,
                        haveObject: HAVE.CSS,
                        input: input,
                        methodCreateTag: THIS.REQUIRE.IS.CSS.TAG,
                        isJustPath: true
                    })
                }
            },

            OPTION: {
                THIS: {
                    BOUNDER: ({ input }) => {
                        try {
                            if (THIS.CHECK.IS_OBJECT({ object: input.object })) {

                                const BOUNDER_READY = input.object.$BOUNDER
                                const BOUNDER = THIS.IS.MAP.BOUNDER[BOUNDER_READY]
                                const BOUNDER_LOADED = THIS.IS.MAP.PROPERTIES.BOUNDER
                                if (BOUNDER_LOADED && BOUNDER_LOADED.CURRENT != BOUNDER_READY) {
                                    if (BOUNDER && BOUNDER.src) {
                                        const src = BOUNDER.src
                                        THIS.RENDER.FROM({
                                            input: {
                                                path: THIS.OPTION().NORMAL.STRING_EMPTY,
                                                subPath: src,
                                                callBack: () => {
                                                    input.callBack()
                                                    THIS.IS.MAP.PROPERTIES.BOUNDER.CURRENT = BOUNDER_READY
                                                },
                                                road: BOUNDER
                                            }
                                        })
                                    }
                                }
                                else {
                                    input.callBack()
                                }
                            } else {
                                input.callBack()
                            }

                        } catch (error) {
                            THIS.EX.ERROR(error)
                        }
                    }
                },

                OPTION: ({ input }) => {
                    try {
                        THIS.REQUIRE.IS.OPTION.THIS.BOUNDER({ input: input })
                    } catch (error) { THIS.EX.ERROR(error) }
                }

            },


            COMPONENT: {

                READY: () => {
                    try {
                        if (!THIS.REQUIRE.IS.COMPONENT.INNIT) {
                            THIS.REQUIRE.IS.COMPONENT.INNIT = THIS.OPTION().NORMAL.ARRAY_EMPTY
                        }
                    } catch (error) {
                        THIS.EX.ERROR(error)
                    }

                },

                COMPONENT: ({ input }) => {

                    const HAVE = THIS.IS.HAVE

                    THIS.REQUIRE.IS.COMPONENT.READY()

                    THIS.METHOD.REQUIRE_THING({
                        haveObject: HAVE.COMPONENT,
                        input: input,
                        mode: {
                            map: THIS.REQUIRE.IS.COMPONENT.INNIT,
                            name: THIS.OPTION().NAME.COMPONENT
                        }
                    })
                }

            }
        },



        THIS: {

            THIS: ({ input, callBack }) => {

                const IS = THIS.REQUIRE.IS

                return {
                    START: () => {
                        THIS.REQUIRE.THIS.THIS({ input: input, callBack: callBack }).OPTION()
                    },

                    OPTION: () => {
                        IS.OPTION.OPTION({
                            input: {
                                path: input.PATH,
                                object: input.DATA.$REQUIRE.$OPTION,
                                callBack: callBack.OPTION,
                            }
                        })
                    },

                    COMPONENT: () => {

                        IS.COMPONENT.COMPONENT({
                            input: {
                                path: input.PATH,
                                object: input.DATA.$REQUIRE.$COMPONENT,
                                callBack: callBack.COMPONENT,
                            }
                        })
                    },

                    CSS: () => {
                        IS.CSS.CSS({
                            input: {
                                path: input.PATH,
                                object: input.DATA.$REQUIRE.$CSS,
                                callBack: callBack.CSS,
                            }
                        })
                    },
                }
            },

            REQUIRE: ({ input }) => {
                try {
                    var DOUBLE = THIS.REQUIRE.THIS.THIS(
                        {
                            input: input,
                            callBack: {
                                OPTION: () => DOUBLE.COMPONENT(),
                                COMPONENT: () => DOUBLE.CSS(),
                                CSS: () => THIS.REQUIRE.THIS.RUN.RUN({ input: input }),
                            }
                        }
                    )

                    DOUBLE.START()

                } catch (error) {
                    THIS.EX.ERROR(error)
                }

            },

            RUN: {
                THIS: {
                    RENDER: ({ input }) => {
                        try {
                            if (input.DATA.$RENDER) {
                                const RENDER = input.DATA.$RENDER
                                const render = input.ROAD

                                if (RENDER.$FROM && render) {

                                    const from_input = { input: RENDER.$FROM }

                                    if (RENDER.$OPTION) {
                                        Object.keys(RENDER.$OPTION).forEach(key => {
                                            from_input[key] = RENDER.OPTION[key]
                                        })
                                    }

                                    const from_content = THIS.CONVERT.SPECIAL(from_input)

                                    if (THIS.CHECK.IS_QUERY_ELEMENT({ name: render.to })) {
                                        const container = $(render.to)
                                        THIS.PAGE.REMOVE({ container: container })
                                        THIS.PAGE.APPEND({ container: container, input: from_content })
                                    }
                                    else {
                                        THIS.EX.ERROR({ error: THIS.OPTION().MESSAGE.INVALID_ROUTE })
                                    }
                                }
                            }


                        } catch (error) {
                            THIS.EX.ERROR(error)
                        }
                    },

                    METHOD: ({ input }) => {
                        try {
                            if (input.DATA.$METHOD) {
                                input.DATA.$METHOD()
                            }


                        } catch (error) {
                            THIS.EX.ERROR(error)
                        }

                    }
                },
                METHOD: {
                    RUN_CALLBACK: (input) => {
                        try {
                            if (input.THIS && input.THIS.callBack) {
                                input.THIS.callBack()
                            }
                        } catch (error) {
                            THIS.EX.ERROR(error)
                        }
                    },
                    RUN_NORMAL: (input) => {
                        try {

                            if (input.DATA) {
                                const CURRENT = THIS.REQUIRE.THIS.RUN
                                CURRENT.THIS.RENDER({ input: input })
                                CURRENT.THIS.METHOD({ input: input })
                            }
                        } catch (error) {
                            THIS.EX.ERROR(error)
                        }

                    },

                    RUN_FINISH_MODULE: () => {
                        try {
                            THIS.MANIFACTOR.THIS.GET_MODULE_FROM_SETTING_AND_RUN({ name: THIS.OPTION().NAME.ON_RENDER_FINISH_MODULE })
                        } catch (error) {
                            THIS.EX.ERROR(error)
                        }
                    },

                    STATUS: (input) => {
                        try {
                            if (input && input.LOAD) {
                                input.LOAD = THIS.OPTION().NORMAL.TRUE
                            }
                        } catch (error) {
                            THIS.EX.ERROR(error)
                        }
                    }
                },

                RUN: ({ input }) => {
                    try {
                        if (!input.LOAD) {
                            const CURRENT = THIS.REQUIRE.THIS.RUN
                            CURRENT.METHOD.RUN_NORMAL(input)
                            CURRENT.METHOD.RUN_CALLBACK(input)
                            CURRENT.METHOD.RUN_FINISH_MODULE(input)
                            CURRENT.METHOD.STATUS(input)
                        }
                    } catch (error) { THIS.EX.ERROR(error) }

                }

            },


            LOAD: ({ INPUT }) => {
                try {
                    THIS.REQUIRE.THIS.REQUIRE({ input: INPUT })
                } catch (error) {
                    THIS.EX.ERROR(error)
                }


            }

        },





        LOAD: ({ INPUT }) => {

            try {

                THIS.REQUIRE.THIS.LOAD({ INPUT: INPUT })

            } catch (error) {
                THIS.EX.ERROR(error)
            }

        }


    },

        THIS.SETTING = {
            THIS: {
                GET: ({ path, callBack, nextStep }) => {
                    try {
                        var isBack = false
                        THIS.ROAD.THIS.GET({
                            path: path,
                            callBack: (_properties) => {

                                const include = _properties.include

                                const setting_include = include.SEAD

                                if (setting_include) {
                                    var setting_default = setting_include.SETTING

                                    const include_default = setting_include.INCLUDE

                                    const step_two = (__properties) => {
                                        Object.keys(__properties.map).forEach(key => {
                                            if (!THIS.IS.SETTING[key]) {
                                                THIS.IS.SETTING[key] = __properties.map[key]
                                            }
                                        })

                                        Object.keys(setting_default).forEach(key => {
                                            if (!THIS.IS.SETTING[key]) {
                                                THIS.IS.SETTING[key] = setting_default[key]
                                            }
                                        })

                                        if (callBack && !isBack) {
                                            isBack = true
                                            callBack(include)
                                            if (nextStep) {
                                                nextStep()
                                            }
                                        }
                                    }

                                    THIS.ROAD.THIS.GET({
                                        arrayPath: include_default,
                                        callBack: step_two,
                                        out: true
                                    })
                                }

                            },
                            out: true
                        }
                        )

                    } catch (error) {
                        THIS.EX.ERROR(error)
                    }
                }
            },

            INNIT: ({ callBack, nextStep }) => {

                try {
                    const path = THIS.OPTION().PATH.SYSTEM_CONFIG

                    THIS.SETTING.THIS.GET({
                        path: path,
                        callBack: callBack,
                        nextStep: nextStep
                    })
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }
        },

        THIS.MANIFACTOR = {
            THIS: {

                GET_MODULE_FROM_SETTING_AND_RUN: ({ name }) => {
                    try {
                        const ARRAY_SETTING = THIS.METHOD.GET_SETTING({ name: name })

                        if (Array.isArray(ARRAY_SETTING)) {
                            ARRAY_SETTING.forEach(_element => {
                                const method = THIS.METHOD.GET_MODULE({ name: _element, method: true })

                                if (method && method.TODO) {
                                    method.TODO()
                                }
                            })
                        }
                    } catch (error) {
                        THIS.EX.ERROR(error)
                    }
                }
            }
        }


    THIS.ROAD = {

        ADD: ({ input }) => {

        },

        LOAD: ({ name, road, params }) => {
            try {
                const roading = THIS.IS.MAP.ROAD[name]

                if (roading) {
                    THIS.ROAD.HISTORY.THIS.HISTORY().ADD({ name: name })
                    THIS.MANIFACTOR.THIS.GET_MODULE_FROM_SETTING_AND_RUN({ name: THIS.OPTION().NAME.ON_RENDER_START_MODULE })

                    if (!road) {
                        road = roading
                    }

                    if (params) {
                        THIS.ROAD.PARAMS.DATA = params
                    }

                    THIS.RENDER.FROM({
                        input: {
                            path: String(),
                            subPath: roading.src,
                            road: road
                        }
                    })
                    return true
                }
                else {
                    THIS.EX.ERROR(THIS.OPTION().MESSAGE.INVALID, name)
                    return false
                }
            } catch (error) {
                THIS.EX.ERROR(error)
            }
        },

        THIS: {
            GET: ({ path, callBack, out, arrayPath, includeDefault }) => {
                var register = THIS.OPTION().NORMAL.ARRAY_EMPTY
                var map = {}
                var isBack = false
                var include = {}
                var history = THIS.IS.MAP.HISTORY

                const normal = THIS.OPTION().NORMAL
                const road = THIS.IS.MAP.ROAD

                if (includeDefault) {
                    Object.keys(includeDefault).forEach(key => {
                        if (!road[key]) {
                            includeDefault[key].src = THIS.CONVERT.TAIL_AND_HEAD_EMPTY({
                                pathArray: Array.from(includeDefault[key].src)
                            }).join(String())
                            road[key] = includeDefault[key]
                        }
                    })
                }

                const back = () => {
                    if (!isBack) {
                        isBack = true
                        if (!out) {
                            Object.keys(map).forEach(key => {
                                if (!road[key]) {
                                    road[key] = map[key]
                                }
                            })
                        }

                        callBack({
                            path: path,
                            map: map,
                            register: register,
                            include: include,
                            callBack: callBack
                        })
                    }

                }

                const GET = ({ path, callBack }) => {

                    return new Promise((resolve, reject) => {

                        if (path) {
                            var meper = history.find(z => z == path)
                            if (!meper) {
                                history.push(path)

                                const success = ({ path }) => {
                                    if (THIS.CHECK.IS_OBJECT({ object: register })) {
                                        var load = register.find(x => x.src == path)

                                        if (load && !load.load) {
                                            load.load = normal.TRUE
                                            var loaded = normal.NUMBER_ZERO
                                            register.forEach(element => {
                                                if (element.load) {
                                                    loaded += normal.NUMBER_ONE
                                                }
                                            });

                                            if (loaded == THIS.EX.ARRAY_LENGTH({ array: register })) {
                                                back()
                                            }
                                        }
                                    }
                                    else {
                                        back()
                                    }
                                }

                                THIS.THIS.GET_JSON({ path: path }).then(_data => {
                                    var pathToThis = THIS.CONVERT.TO_FILE_GET_FOLDER({ path: path })

                                    const response = _data.response

                                    if (THIS.CHECK.IS_MAS_ARRAY_FROM_ONE({ array: Object.keys(include), compare: THIS.OPTION().NORMAL.NUMBER_ZERO })) {
                                        include = response
                                    }

                                    if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: response.INCLUDE })) {


                                        for (let index = normal.NUMBER_ZERO; index < response.INCLUDE.length; index++) {
                                            var element = response.INCLUDE[index];
                                            var itemPath = THIS.EX.MAP({ path: pathToThis, subPath: element })

                                            register.push({
                                                src: itemPath,
                                                load: false,
                                                run: false
                                            })
                                        }

                                        for (let index = normal.NUMBER_ZERO; index < register.length; index++) {
                                            var element = register[index];
                                            if (!element.load && !element.run) {
                                                element.run = THIS.OPTION().NORMAL.TRUE
                                                GET({ path: element.src, callBack: callBack })
                                            }


                                        }

                                    }

                                    if (THIS.CHECK.IS_OBJECT({ object: response.COMPONENT })) {
                                        var items = {}

                                        Object.keys(response.COMPONENT).forEach(element => {
                                            var item = response.COMPONENT[element]
                                            item.src = THIS.CONVERT.TAIL_AND_HEAD_EMPTY({
                                                pathArray: Array.from(THIS.EX.MAP({ path: pathToThis, subPath: item.src }))
                                            }).join(String())
                                            items[element] = item

                                        })
                                        map = { ...items, ...map }
                                    }

                                    if (THIS.CHECK.IS_OBJECT({ object: response.SETTING })) {
                                        map = { ...map, ...response.SETTING }
                                    }

                                    success({ path: path })
                                    resolve(_data)

                                })
                            }
                        }

                    });


                }

                if (arrayPath && Array.isArray(arrayPath)) {
                    arrayPath.forEach(_element => {
                        GET({ path: _element, callBack: callBack })
                    })
                }

                if (path) {
                    GET({ path: path, callBack: callBack })
                }

                if (!path && THIS.CHECK.IS_ARRAY_EMPTY({ array: arrayPath })) {
                    back()
                }
            },

        },



        INNIT: {
            THIS: {
                ROAD: (include) => {
                    try {
                        var map = THIS.IS.MAP

                        const route_include = include.ROAD

                        if (!map.PROPERTIES.MAP) {

                            THIS.ROAD.THIS.GET(
                                {
                                    arrayPath: route_include.INCLUDE,
                                    callBack: (properties) => {
                                        map.PROPERTIES.MAP = THIS.OPTION().NORMAL.TRUE
                                        THIS.ROAD.LOAD({ name: THIS.OPTION().ATTRIBUTE.DEFAULT_NAME })
                                        THIS.MANIFACTOR.THIS.GET_MODULE_FROM_SETTING_AND_RUN({ name: THIS.OPTION().NAME.ON_SYSTEM_START_MODULE })
                                    },
                                    includeDefault: route_include.COMPONENT
                                }
                            )
                        }
                    } catch (error) {
                        THIS.EX.ERROR(error)
                    }

                },

                BOUNDER: () => {
                    try {
                        var MAP = THIS.IS.MAP
                        if (!MAP.PROPERTIES.BOUNDER.READY) {
                            const path = THIS.IS.SETTING.BOUNDER_ROUTE
                            if (path) {
                                THIS.ROAD.THIS.GET({

                                    path: path,
                                    callBack: (properties) => {
                                        MAP.PROPERTIES.BOUNDER.READY = THIS.OPTION().NORMAL.TRUE
                                        MAP.BOUNDER = { ...MAP.BOUNDER, ...properties.map }
                                    },
                                    out: true
                                }
                                )
                            }
                            else {
                                THIS.EX.ERROR({ error: THIS.OPTION().MESSAGE.INVALID_OUT })
                            }


                        }
                    } catch (error) {
                        THIS.EX.ERROR(error)
                    }

                },

                MODULE: ({ array, include }) => {

                    try {
                        const OH = (include) => {
                            if (THIS.CHECK.IS_OBJECT({ object: array })) {
                                array.forEach(element => {
                                    element(include)
                                })
                            }
                        }


                        THIS.MODULE.GET({
                            path: THIS.OPTION().PATH.SYSTEM_CONFIG,
                            callBack: OH,
                            include: include
                        })


                    } catch (error) {
                        THIS.EX.ERROR(error)
                    }
                },



            },


            IN: () => {
                try {
                    THIS.STEP.INNIT()
                } catch (error) {
                    THIS.EX.ERROR(error)
                }
            }

        },

        RUN: () => {
            try {

                THIS.READY.READY()
                THIS.CURRENT.UPDATE()
                THIS.ROAD.INNIT.IN()

            } catch (error) {

            }

        },

        HISTORY: {
            THIS: {
                HISTORY: () => {
                    try {
                        const history = () => {
                            try {
                                var DATA = THIS.ROAD.HISTORY.HISTORY
                                var CURRENT_INPUT = {
                                    current: DATA.current ? DATA.current : String(),
                                    history: DATA.history ? DATA.history : THIS.OPTION().NORMAL.ARRAY_EMPTY,
                                }

                                if (!DATA) {
                                    THIS.ROAD.HISTORY.HISTORY = CURRENT_INPUT
                                }

                                return THIS.ROAD.HISTORY.HISTORY
                            } catch (error) {
                                THIS.ROAD.HISTORY.HISTORY = THIS.OPTION().NORMAL.OBJECT_EMPTY
                                THIS.EX.ERROR(THIS.OPTION().MESSAGE.INVALID_DATA)
                            }

                        }

                        return {
                            GET: () => {
                                return history()
                            },
                            ADD: ({ name }) => {
                                try {
                                    var hito = history()

                                    if (name == THIS.OPTION().ROAD.DEFAULT_ROUTE_NAME) {
                                        hito.history = THIS.OPTION().NORMAL.ARRAY_EMPTY
                                        hito.current = THIS.OPTION().NORMAL.STRING_EMPTY
                                    }

                                    if (hito.current != name) {

                                        hito.current = name

                                        var params = THIS.OPTION().NORMAL.OBJECT_EMPTY

                                        if (THIS.ROAD.PARAMS && THIS.ROAD.PARAMS.DATA) {

                                            params = THIS.ROAD.PARAMS.DATA
                                        }

                                        if (THIS.EX.TRUE_ARRAY_LENGTH({ array: hito.history }) > THIS.OPTION().ROAD.HISTORY.MAX_SAVE) {
                                            hito.history.shift()
                                        }

                                        hito.history.push({
                                            name: name,
                                            params: params
                                        })

                                        THIS.ROAD.HISTORY.HISTORY = hito
                                    }

                                } catch (error) {
                                    THIS.EX.ERROR(error)
                                }

                            },

                            BACK: () => {
                                try {
                                    const NORMAL = THIS.OPTION().NORMAL
                                    var hito = history();
                                    var currentBack = THIS.OPTION().NORMAL.OBJECT_EMPTY
                                    if (hito) {
                                        if (!THIS.CHECK.IS_ARRAY_EMPTY({ array: hito.history })) {
                                            if (THIS.EX.ARRAY_LENGTH({ array: hito.history }) > NORMAL.NUMBER_ONE) {
                                                const last = hito.history[THIS.EX.TRUE_ARRAY_LENGTH({ array: hito.history })]

                                                if (last.name == hito.current) {
                                                    hito.history.pop()
                                                    const current = hito.history[THIS.EX.TRUE_ARRAY_LENGTH({ array: hito.history })]
                                                    hito.current = current.name
                                                    currentBack = current
                                                    THIS.ROAD.LOAD({ name: current.name, param: current.params })
                                                }
                                                else {
                                                    hito.current = last.name
                                                    currentBack = last
                                                    THIS.ROAD.LOAD({ name: last.name, param: last.params })
                                                }
                                            }
                                            THIS.ROAD.HISTORY.HISTORY = hito
                                            return currentBack
                                        }
                                    }

                                } catch (error) {
                                    THIS.ROAD.LOAD({ name: THIS.OPTION().ROAD.DEFAULT_ROUTE_NAME, param: last.params })
                                    THIS.EX.ERROR(error)
                                }

                            }
                        }

                    } catch (error) {
                        THIS.EX.ERROR(error)
                    }

                }
            },
        }


    }

    THIS.INNIT = (INPUT) => {
        THIS.IS = INPUT
        INPUT.IS = THIS

        THIS.ROAD.RUN()

        return THIS
    }

    return THIS

}

var HERE_IS_LS_BTM3NJYXNTYXNZA = HERE_LS_DJM3NJYXMJAYNDM().INNIT(HERE_LS_DJM3NJYXMJAYNDM)
