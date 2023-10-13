const REGISTER = () => {
    const IS = HERE_DTE2OTCXODIWOTY4MJY.IS;



    if (!IS.EVENT.READY.document) {
        IS.DOM.SET_EVENT_BY_NAME({
            element: document,
            name: "click",
            callBack: (current) => {
                const target = current.target
                const select = $(".sete2otyzotu2odewota")
                const onSelect = $(select).find(target)
                
                if (IS.CHECK.IS_ARRAY_EMPTY({ ob: onSelect })) {
                    $(".sade2oty0ntc1odg1mdi").attr("show", false)
                }
            }

        })

        IS.EVENT.READY.document = true
    }




}


REGISTER