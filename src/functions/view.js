import { SETTING, THIS } from "../ob/setting.js";
import { CHANGE } from "./change.js";
import { CHECK } from "./check.js";
import { PATH } from "./path.js";

class VIEW {




    static SET(props) {
        VIEW_OB.ADD_CSS({ path: props.css.path, name: props.css.name }).then(success => {
            if (success) {
                THIS.VIEW.append(props.view)
            }
            else {
                THIS.VIEW.append("error")
            }
        })

    }


}

class VIEW_PROPS {

    static SET(props) {
        return {
            view: props.view,
            css: VIEW_OB_PROPS.ADD_CSS(
                {
                    path: props.css.path,
                    context: props.css.context,
                    keep: props.css.keep
                }
            ),
            event: props.event
        }
    }
}



class VIEW_OB {

    static ADD_CSS(props) {

        var iprops = VIEW_PROPS.SET({css: props})

        try {

            return new Promise((resolve, reject) => {
                const scope = $(SETTING.SCOPE_NAME)

                if (CHECK.IS_EMPRY(scope)) {
                    var tag = document.createElement(SETTING.SCOPE_NAME)
                    $(SETTING.HEAD_NAME).append(tag)
                }
                else {
                    CHANGE.EMPTY_ELEMENT(scope)
                }

                $(SETTING.SCOPE_NAME).append(CHANGE.CREATE_LINK_CSS(iprops.css.path))


                $.get(PATH.GET(iprops.css.path)).done((data) => {
                    console.log(data);
                    resolve(true)
                }).fail(() => {
                    resolve(false)
                });
            });

        } catch (error) {
            console.error(error);
        }

    }
}


class VIEW_OB_PROPS {

    static ADD_CSS(props) {
        return {
            path: props.path,
            context: props.context,
            keep: false
        }
    }
}

export { VIEW, VIEW_PROPS, VIEW_OB }