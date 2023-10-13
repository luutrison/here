const UI_SWITCH = (PROPS) => {
    var THIS = {}

    const IS = HERE_DTE2OTCXODIWOTY4MJY.IS
    const MODULES = IS.MODULES.INNIT

    const contructor = () => {

        if (PROPS) {
            return {
                container: PROPS.container,
                class: PROPS.class,
                id: PROPS.id,
                name: PROPS.name,
                options: PROPS.options
            }
        }
    }


    const element = () => {
        try {
            const eprops = contructor()

            const on = (tag, side, padding) => {

                $(tag).attr("active", true)
                $(tag).find(".yze2oty2nzexmzy5mde").val(true)
                $(tag).find(".aje2oty2njywodywnze").css("left", side.width - side.height + padding)
            }

            const off = (tag, side, padding) => {
                $(tag).attr("active", false)
                $(tag).find(".yze2oty2nzexmzy5mde").val(false)
                $(tag).find(".aje2oty2njywodywnze").css("left", padding)
            }


            const defaultOptions = {
                on: false,
                side: 4,
                padding: 2
            }

            var options = {}

            if (!eprops.options) {
                options = defaultOptions
            }
            else {
                options = { ...defaultOptions, ...eprops.options }
            }

            if (eprops) {
                var id = String()
                var className = String()

                if (eprops.id) {
                    id = `id="${eprops.id}"`
                }

                if (eprops.class) {
                    className = eprops.class
                }

                const side = {
                    width: options.side * 11,
                    height: options.side * 5.5
                }



                var name = String()

                if (eprops.name) {
                    name = `name="${eprops.name}"`
                }


                const html = $(
                    `
                <div class="ate2oty2njywnji3mdq">
                    <input hidden class="yze2oty2nzexmzy5mde" ${name} />
                    <div class="aje2oty2njywodywnze"></div>
                </div>
                `
                )

                if (options.on) {
                    on(html, side, options.padding)
                }
                else {
                    off(html, side, options.padding)
                }

                $(html).css({
                    width: side.width,
                    height: side.height,
                    borderRadius: side.height,
                    padding: options.padding
                })

                $(html).find(".aje2oty2njywodywnze").css({
                    width: side.height - options.padding * 2,
                    height: side.height - options.padding * 2,
                    borderRadius: side.height
                })

                IS.DOM.SET_EVENT_BY_NAME({
                    element: html,
                    name: "click",
                    callBack: (curr) => {
                        const target = curr.currentTarget
                        if ($(target).attr("active") == "true") {
                            off(html, side, options.padding)
                        }
                        else {
                            on(html, side, options.padding)
                        }
                    }
                })


                $(eprops.container).append(html)


            }
        } catch (error) {
            console.error(error);
        }


    }


    THIS.CREATE = () => {
        element()
    }

    return THIS

}

UI_SWITCH