class CHANGE {
    static EMPTY_ELEMENT(element) {
        $(element).html("")
    }

    static CREATE_LINK_CSS(path) {
        var tag = `<link type="text/css" href="${path}" rel="stylesheet"></link>`
        return tag
    }

    static CREATE_STYLE_TAG({ context, content }) {

    }
}

class DOM {

    static SET_EVENT(dom) {
        try {
            dom()
        } catch (error) {
            console.error(error);
        }
    }
}

export { CHANGE }