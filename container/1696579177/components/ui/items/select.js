const UI_SELECT = (props) => {
    var THIS = {}

    const IS = HERE.IS

    const MODULES = HERE.IS.MODULES.INNIT

    const contructor = () => {

        if (props) {
            return {
                container: props.container,
                class: props.class,
                id: props.id,
                options: props.options
            }
        }
    }

    const element = () => {

        try {
            const eprops = contructor()

            if (eprops && eprops.options) {

                var id = String()
                var className = String()

                if (eprops.id) {
                    id = `id="${eprops.id}"`
                }

                if (eprops.class) {
                    className = eprops.class
                }

                var tag = $(
                    `
                    <div class="sete2otyzotu2odewota ${className}" ${id}>
                        <div class="syze2oty0ntm3nte3otm">
                            <span class="syje2oty0nty3mzkymdg"></span>
                            <div>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                            </div>
                        </div>

                        <div class="sade2oty0ntc1odg1mdi">

                            <div class="bde2oty0ntm3mjqznzc">


                            </div>
                        </div>


                    </div>

                    `
                )

                var items = $(tag).find(".bde2oty0ntm3mjqznzc")

                IS.DOM.SET_EVENT_BY_NAME({
                    element: $(tag).find(".syze2oty0ntm3nte3otm"),
                    name: "click",
                    callBack: (current) => {
                        const options = $(tag).find(".sade2oty0ntc1odg1mdi")

                        if ($(options).attr("show") == "true") {
                            $(options).attr("show", false)
                        }
                        else {
                            $(options).attr("show", true)
                        }
                    }

                })





                eprops.options.forEach(element => {
                    var select = $(
                        `
                        <div class="zde2oty0ntm0nzc5otq" value="${element.value}">
                            ${element.name}
                        </div>
                        `
                    )

                    IS.DOM.SET_EVENT_BY_NAME({
                        element: select,
                        name: "click",
                        callBack: (current) => {
                            $(tag).attr("current", element.value)
                            $(tag).find(".syje2oty0nty3mzkymdg").html(element.name)
                            $(tag).find(".sade2oty0ntc1odg1mdi").attr("show", false)
                        }

                    })

                    $(items).append(select)

                    if (element.selected) {
                        $(tag).find(".syje2oty0nty3mzkymdg").html(element.name)
                        $(tag).attr("current", element.value)
                    }

                })

                $(eprops.container).append(tag)

                return tag

            }
        } catch (err) { console.error(err) }

    }

    THIS.Create = () => {
        return element()
    }

    return THIS
}

UI_SELECT