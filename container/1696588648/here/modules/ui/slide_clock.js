const SLIDE_CLOCK = () => {

    var THIS = {}

    const SETTING = () => {
        return HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM.SETTING
    }

    const IS = HERE_IS_EJE2OTC1NDUYMZM3ODI

    const element = () => {
        try {
            const element = $(
                `
                <div class="AJE2OTC0NTM3MZGXNDI">
                    <div class="YTE2OTC0NTQWMDG5NTC" percent="0" done="false"></div>
                </div>
                `
            )

            return element

        } catch (error) { console.error(error) }

    }

    THIS.START = () => {
        try {
            const timeDefault = SETTING().UI_SLIDE_CLOCK_TIME_SECOND_DEFAULT

            if (timeDefault) {
                const maxpec = SETTING().UI_SIDE_CLOCK_MAX_PERCENT_WAIT
                if (maxpec) {
                    const html = element()

                    const exis = $(".AJE2OTC0NTM3MZGXNDI")

                    const method = () => {
                        const slideName = ".YTE2OTC0NTQWMDG5NTC"
                        const mname = ".AJE2OTC0NTM3MZGXNDI"
                        const check = $(slideName).attr("percent")


                        if (check && Number.parseInt(check)  == 0) {
                            $(mname).attr("hide", false)
                            $(slideName).attr("done", false)
                            $(slideName).css("width", 0)
                            $(slideName).attr("percent", 0)
                        }

                        const unit = timeDefault * 1000 / maxpec

                        const updater = () => {
                            setTimeout(() => {
                                var done = $(slideName).attr("done")
                                var current = $(slideName).attr("percent")
                                if (current && Number.parseFloat(current)  < maxpec && done == "false") {
                                    current = Number.parseFloat(current) + 1
                                    $(slideName).css("width", current + "%")
                                    $(slideName).attr("percent", current)
                                    updater()
                                }
                            }, unit)
                        }
                        updater()
                    }



                    if (IS.CHECK.IS_ARRAY_EMPTY({ ob: exis })) {
                        const defaultTag = SETTING().DEFAULT_CONTENT_TAG ? SETTING().DEFAULT_CONTENT_TAG : "div"
                        $(defaultTag).append(html)
                        method()
                    }
                    else {
                        method()
                    }


                }
                else {
                    console.error("SETTING name 'UI_SIDE_CLOCK_MAX_PERCENT_WAIT' not found");
                }
            }
            else {
                console.error("SETTING name 'UI_SLIDE_CLOCK_TIME_DEFAULT' not found")

            }

        } catch (error) {
            console.error(error);
        }

    }

    THIS.DONE = () => {
        try {
            const slide = $(".YTE2OTC0NTQWMDG5NTC")

            $(slide).attr("percent", 100)
            $(slide).attr("done", true)
            $(slide).css("width", "100%")

            setTimeout(() => {
                $(".AJE2OTC0NTM3MZGXNDI").attr("hide", true)
                $(slide).attr("percent", 0)
            }, 100)
        } catch (error) { console.error(error) }
    }

    return THIS

}

SLIDE_CLOCK