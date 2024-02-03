const METHOD_LS_ADM3NDUWNDQ2NDC = () => {
    var HERE = {}
    HERE.OPTION = OPTION_DZE2OTU2OTE3OTI4OTI
    return {
        TAG: {
            CREATE_LINK_CSS: ({ name, src }) => {
                var tag = document.createElement(HERE.OPTION().TAG.LINK)
                tag.setAttribute(HERE.OPTION().ATTRIBUTE.NAME_REL, HERE.OPTION().ATTRIBUTE_VALUE.REL_STYLESHEET)
                tag.setAttribute(HERE.OPTION().ATTRIBUTE.HREF_NAME, src)
                tag.setAttribute(HERE.OPTION().ATTRIBUTE.NAME_NAME, name)
                return tag
            },
            CREATE_STYLE_CSS: ({ name, css }) => {
                if (name && css) {
                    const NORMAL = HERE.OPTION().NORMAL

                    const startTag = NORMAL.LEFT_SARO_SYMBOL + HERE.OPTION().TAG.STYLE + NORMAL.SPACE
                        + HERE.OPTION().ATTRIBUTE.NAME_NAME + NORMAL.EQUAL_SYMBOL + NORMAL.SINGLE_NHAY_SYMBOL
                        + name + NORMAL.SINGLE_NHAY_SYMBOL + NORMAL.RIGHT_SARO_SYMBOL

                    const endTag = NORMAL.LEFT_SARO_SYMBOL + NORMAL.RIGHT_SLASH_SYMBOL + HERE.OPTION().TAG.STYLE  + NORMAL.RIGHT_SARO_SYMBOL

                    var tag = startTag + css + endTag
                    return tag
                }
            },
        },
        REPLACE: {
            VERSION: ({input, replace}) => {
                return String(input).replace(/@{version}/g, replace)
            },
            BASE64_SORT: ({input}) => {
                return String(input).replace(/=/g, String())
            },
            TO_NAME: ({input}) => {
                return String(input).replace(/\//g, ".")
            }
        },
        CONVERT: {
            NO_MARK_UP: ({input}) => {
                input = input.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
                input = input.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
                input = input.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
                input = input.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
                input = input.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
                input = input.replace(/ì|í|ị|ỉ|ĩ/g, "i");
                input = input.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
                input = input.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
                input = input.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
                input = input.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
                input = input.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
                input = input.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
                input = input.replace(/Đ/g, "D");
                input = input.replace(/đ/g, "d");
                input = input.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
                input = input.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
                return input;
            }
        }
    }
}

const OPTION_DZE2OTU2OTE3OTI4OTI = () => {
    return {
        NORMAL: {
            NUMBER_ONE_MINUS: -1,
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
            RIGHT_QUERA_SYMBOL: "]",
            COMMA_SYMBOL: ",",
            COOKIE_EXPIRES: "expires=",
            RANDOM_CHARACTOR: "abcdeuiocbnmxhs",
            COOKIE: "path=",
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
        NUMBER: {
            ONE_HUNDRED: 100,
            TWO_HUNDRED: 200,
            THREE_HUNDRED: 300,
            FOUR_HUNDRED: 400,
            FIVE_HUNDRED: 500,
            FIFTY: 50,
            THIRTY: 30,
            ONE_THOUSAND: 1000
        },
        NAME: {
            LOCAL_STORAGE_HISTORY: "_LSH_",
            COMPONENT: "COMPONENT",
            RENDER: "$RENDER",
            FROM: "$FROM",
            ON_SYSTEM_START_MODULE: "ON_SYSTEM_START_MODULE",
            ON_RENDER_START_MODULE: "ON_RENDER_START_MODULE",
            ON_RENDER_FINISH_MODULE: "ON_RENDER_FINISH_MODULE",
            START_CONFIG: ["CONFIGOR_LS_BZY2NZA3ODK4MDM", "CONFIGOR", "LS_EJGWMZGXNDG1MZA", "LS_ZDGWMZKZMDY4NDE"],
        },
        QUERY: {
            CONTAINER: "#container",
            PAGE_CONFIG_ELEMENT: 'section[name="current-status"]',
            UNU: "._unu_",
            UNU_GROUP: "._unu_group_"
        },
        REQUEST: {
            NAME: ["ADDRESS_ONE"]
        },
        RESPONSE: {
            STATUS: ["GOOD", "BAD"]
        },
        SESSION: {
            NAME: ["GAP"]
        },

        PATH: {
            ARRAY_ABSOLUTE_CONTAIN: ["./", "../"],
            ARRAY_ORIGIN_METHOD: ["http://", "https://"],
            SYSTEM_CONFIG: "/SYSTEM_LS_ZJM4MJAXODYXMZU.json",
            BASE: "/",
        },
        COOKIE: {
            COOKIE_APP_NAME: "_CA_",
            COOKIE_EXPIRES_HOURS_DEFAULT: 5,
        },
        VARIBLE: {
            POST: "POST",
            GET: "GET"
        },
        ATTRIBUTE: {
            SRC_NAME: "src",
            HREF_NAME: "href",
            NAME_NAME: "name",
            NAME_REL: "rel",
            STATUS: "status",
            DATA: "data",
            CLASS_NAME: "class",
            ID_NAME: "id",
            DEFAULT_NAME: "default",
            OBJECT: "object",
            ORIGIN: "origin"
        },
        ATTRIBUTE_VALUE: {
            REL_STYLESHEET: "stylesheet",
            CSS_LEVEL_ONE_NAME: "one",
            CSS_LEVEL_TWO_NAME: "two",
        },
        EVENT: {
            NAME: {
                LOAD: "load",
                CLICK: "click"
            }
        },

        ROAD: {
            HISTORY: {
                MAX_SAVE: 20,
                CONTAINER_NAME: "html"
            },
            DEFAULT_ROUTE_NAME: "default"
        },
        MESSAGE: {
            INVALID: "Địa chỉ không hợp lệ (Địa chỉ chứa kí tự không hợp lệ)",
            INVALID_OUT: "Địa chỉ không đúng",
            LOCATION: "Địa chỉ không tồn tại",
            INVALID_DATA: "Dữ liệu không hợp lệ",
            INVALID_ROUTE: "Điều hướng không hợp lệ",
            ARRAY_IS_INVALID: "Mảng không hợp lệ",
            MODULE_NOT_EXIST: "Không có module",
            COMPONENT_NOT_EXIST: "Không có component",
            SETTING_NOT_EXIST: "Không có cài đặt",
            VARIBLE_NOT_EXIST: "Không có giá trị với tên được đưa ra",
            INFO_ERROR: "Thông tin:",
            THREE_DOT: "...",
            EVIEWII: "--->",
            EVIEWI: " "
        },

        TAG: {
            CSS: "css",
            HEAD: "head",
            SCRIPT: "script",
            BODY: "body",
            STYLE: "style",
            LINK: "link",
        },
    }
}
