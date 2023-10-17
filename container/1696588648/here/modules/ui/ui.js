const UI = () => {
    const SETTING = () => {
        return HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM.SETTING
    }

    const IS = HERE_IS_EJE2OTC1NDUYMZM3ODI
    
    var THIS = {
        UI: {
            TIMER: {
                IN: ({ props }) => {
                    try {
                        var iprops = {
                            route: props.route
                        }

                        if (iprops.route && iprops.route.to) {
                            const render = iprops.route.to
                            const MODULES = HERE_IS_EJE2OTC1NDUYMZM3ODI.MODULES
                            const SETTING = HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM.SETTING

                            const TYPE = SETTING.CLOCK_EFFECT ? SETTING.CLOCK_EFFECT : HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM.OPTIONS().ATTRIBUTE.CLOCK_EFFECT_SLIDE

                            if (TYPE == HERE_IS_EJE2OTC1NDUYMZM3ODI.OPTIONS().ATTRIBUTE.CLOCK_EFFECT_SLIDE) {
                                if (HERE_IS_EJE2OTC1NDUYMZM3ODI.CHECK.IS_QUERY_ELEMENT({ name: render })) {
                                    const element = $(render)
                                    if (!HERE_IS_EJE2OTC1NDUYMZM3ODI.CHECK.IS_ARRAY_EMPTY({ ob: element })) {
                                        var name = HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM.SETTING.NAME_EFFECT_LOAD
                                        if (name) {
                                            $(element).addClass(name);
                                        }
                                    }
                                }
                                else {
                                    HERE_IS_EJE2OTC1NDUYMZM3ODI.EX.ERROR({ err: HERE_IS_EJE2OTC1NDUYMZM3ODI.OPTIONS().MESSAGE.INVALID_ROUTE })
                                }

                                const SLIDE_CLOCK = MODULES.INNIT.UI_SLIDE_CLOCK_ATE2OTC0NTYYNTI3NZM

                                if (MODULES && SLIDE_CLOCK) {
                                    const METHOD = SLIDE_CLOCK()
                                    METHOD.START()
                                }
                            }

                            else if (TYPE == HERE_IS_EJE2OTC1NDUYMZM3ODI.OPTIONS().ATTRIBUTE.CLOCK_EFFECT_ANIMATE) {
                                if (MODULES && MODULES.INNIT.UI_SHIPPER_DZE2OTCXODEWNZE0NZA) {
                                    const MODULES_UI = MODULES.INNIT.UI_SHIPPER_DZE2OTCXODEWNZE0NZA()

                                    if (HERE_IS_EJE2OTC1NDUYMZM3ODI.CHECK.IS_QUERY_ELEMENT({ name: render })) {
                                        const element = $(render)
                                        if (!HERE_IS_EJE2OTC1NDUYMZM3ODI.CHECK.IS_ARRAY_EMPTY({ ob: element })) {
                                            $(element).html(String())
                                            $(element).append(MODULES_UI.SHIPPER())
                                        }
                                    }
                                    else {
                                        HERE_IS_EJE2OTC1NDUYMZM3ODI.EX.ERROR({ err: HERE_IS_EJE2OTC1NDUYMZM3ODI.OPTIONS().MESSAGE.INVALID_ROUTE })
                                    }
                                }
                            }

                        }
                    } catch (error) {
                        HERE_IS_EJE2OTC1NDUYMZM3ODI.EX.ERROR({ err: error })
                    }
                },
                OUT: () => {
                    try {
                        const SETTING = HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM.SETTING
                        const TYPE = SETTING.CLOCK_EFFECT ? SETTING.CLOCK_EFFECT : HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM.OPTIONS().ATTRIBUTE.CLOCK_EFFECT_SLIDE
                        const MODULES = HERE_IS_EJE2OTC1NDUYMZM3ODI.MODULES

                        if (TYPE == HERE_IS_EJE2OTC1NDUYMZM3ODI.OPTIONS().ATTRIBUTE.CLOCK_EFFECT_SLIDE) {
                            const SLIDE_CLOCK = MODULES.INNIT.UI_SLIDE_CLOCK_ATE2OTC0NTYYNTI3NZM

                            if (MODULES && SLIDE_CLOCK) {
                                const METHOD = SLIDE_CLOCK()
                                METHOD.DONE()
                            }
                        }
                    } catch (error) { HERE_IS_EJE2OTC1NDUYMZM3ODI.EX.ERROR({ err: error }) }

                }
            },

            PERFECT: {
                CONTENT: ({ callBack, render }) => {
                    try {

                        const method = () => {
                            const defaultName = HERE_DTE2OTCXODIWOTY4MJY_CDE2OTC1NDYWMDIYNZC_ZTE2OTC1NDYWMJUYMTM.SETTING.DEFAULT_CONTAINER
                            const name_element = render ? render.to : defaultName
                           
                            const name = SETTING().NAME_EFFECT_LOAD
                            const leton_name = SETTING().SKELETON_NAME_ZDE2OTC1MZC2MDG2NJK
                            const leton_timer = SETTING().SKELETON_TIMER_NAME_BJE2OTC1MZC1OTKYNJK

                            if(leton_name && leton_timer){
                                const item_leton_name = $(leton_name)
                                const item_leton_timer = $()

                                $(leton_name).remove()
                                $(leton_timer).each((num, element) => {
                                    $(element).removeClass(String(leton_timer).replace(IS.OPTIONS().NORMAL.DOT_SYMBOL, String()))
                                })
                            }

                            if (name) {
                                $(name_element).removeClass(name);
                                $(defaultName).removeClass(name);
                            }
                            if (callBack) {
                                callBack()
                            }
                        }

                        var new_items = false

                        $(document.images).each((number, image) => {
                            if (!$(image).attr("done")) {
                                new_items = true
                                $(image).on("load", (event) => {
                                    $(event.currentTarget).attr("done", "true")
                                    var isLoad = true
                                    $(document.images).each((num, element) => {
                                        if (!$(element).attr("done")) {
                                            isLoad = false
                                        }

                                        if (num == HERE_IS_EJE2OTC1NDUYMZM3ODI.EX.TRUE_ARRAY_LENGTH({ arr: document.images }) && isLoad) {
                                            method()
                                        }
                                    })
                                })
                            }

                            if (number == HERE_IS_EJE2OTC1NDUYMZM3ODI.EX.TRUE_ARRAY_LENGTH({ arr: document.images }) && !new_items) {
                                method()
                            }

                        })
                    } catch (error) { console.error(error) }

                }

            },



            ON: ({ props }) => {
                try {
                    const CURRENT = HERE_IS_EJE2OTC1NDUYMZM3ODI.UI.THIS().UI
                    CURRENT.TIMER.IN({ props: props })
                } catch (error) {
                    HERE_IS_EJE2OTC1NDUYMZM3ODI.EX.ERROR({ err: error })
                }

            }
        }
    }

    return THIS
}

UI