const UI_POPUP = (props) => {
    var THIS = {}
    const DOM = HERE_DTE2OTCXODIWOTY4MJY.IS.DOM

    const contructor = (props) => {

        const okayProps = (props) => {
            var propse = props
            if (!propse) {
                propse = {}
            }

            return {
                name: propse.name ? propse.name : "Được",
                onClick: propse.onClick ? propse.onClick : () => { }
            }

        }
        const cancelProps = (props) => {
            var propse = props
            if (!propse) {
                propse = {}
            }

            return {
                name: propse.name ? propse.name : "Hủy",
                onClick: propse.onClick ? propse.onClick : () => { }
            }
        }

        return {
            title: props.title,
            message: props.message,
            onSuccess: props.onSuccess,
            onCancel: props.onCancel,
            class: props.class,
            id: props.id,
            container: props.container,
            cancel: cancelProps(props.cancel),
            okay: okayProps(props.okay)
        }
    }


    const element = () => {
        try {
            const propse = contructor(props)

            var id = String()
            var clas = String()





            if (propse.id) {
                id = `id="${propse.id}"`
            }

            if (propse.class) {
                clas = `${propse.class}`
            }


            const html = $(
                `
                <div class="dte2oty4mju2mjcyndc">
                    <div class="yze2oty4mju2mjqwmtu"></div>

                    <div class="ede2oty4mju0mzgzndu ${clas}" ${id}>
                        <div class="cde2oty4mzy1ntgzntk">
                            <div class="zje2oty4mju0ntu1odq">
                                ${propse.title}
                            </div>
                            <div class="yte2oty4mju1nzm1oti">
                                ${propse.message}
                            </div>

                        </div>
                        <div class="ade2oty4mju1odiwnzi">
                            <button class="bde2oty4mju1otayoty">${propse.cancel.name}</button>
                            <button class="zze2oty4mju1otkxote">${propse.okay.name}</button>
                        </div>

                    </div>
                </div>
                `
            )

            DOM.SET_EVENT_BY_NAME({
                element: $(html).find(".yze2oty4mju2mjqwmtu"),
                name: "click",
                callBack: (current) => {
                    $(html).remove()
                }
            })

            DOM.SET_EVENT_BY_NAME({
                element: $(html).find(".bde2oty4mju1otayoty"),
                name: "click",
                callBack: (current) => {
                    console.log("click")
                    $(html).remove()
                    propse.cancel.onClick()
                }
            })

            DOM.SET_EVENT_BY_NAME({
                element: $(html).find(".zze2oty4mju1otkxote"),
                name: "click",
                callBack: (current) => {
                    propse.okay.onClick()
                }
            })


            $(propse.container).append(html)
        } catch (error) { console.error(error) }
    }

    THIS.CREATE = () => {
        element()
    }

    return THIS
}

UI_POPUP