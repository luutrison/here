const UI_PAGER = (props) => {
    var THIS = {}

    const IS = HERE.IS

    const contructor = (props) => {
        return {
            unit: props.unit ? props.unit : 0,
            number: props.number ? props.number : 0,
            current: props.current ? props.current : 1,
            onClick: props.onClick,
            container: props.container
        }
    }

    const pager = () => {
        try {
            const propse = contructor(props)

            var arrContent = []



            const numcalc = propse.number / propse.unit
            var prow = Math.round(numcalc)


            if (numcalc - prow > 0) {
                prow = prow + 1
            }


            for (var num = 1; num <= prow; num++) {
                const element = $(
                    `
                    <div class="BTE2OTCWMZYWOTU2ODE" num="${num}">
                        <span>${num}</span>
                    </div>
                    `
                )
                const current = num

                HERE.IS.DOM.SET_EVENT_BY_NAME({
                    element: $(element),
                    name: "click",
                    callBack: () => {
                        propse.onClick({element, current})
                    }
                })

                arrContent.push(element)

            }

            return arrContent

        } catch (err) { console.log(err) }
    }

    const element = () => {
        try {
            const propse = contructor(props)
            const html = $(
                `
                <div class="EJE2OTCWMZQ1NJYXMDC">
                    <div class="ETE2OTCWMZQ2NTA5MJI">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                    </div>
                    <div class="YTE2OTCWMZQ4ODMYNTE">

                    </div>
                    <div class="EJE2OTCWMZQ5MTIWNDE">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                    </div>
                </div>
                `
            )

            const arritems = pager()

            arritems.forEach(element => {
                $(html).find(".YTE2OTCWMZQ4ODMYNTE").append(element)
            })

            $(propse.container).append(html)
        } catch (err) { console.error(err); }

    }

    THIS.CREATE = () => {
        try {
            element()
        } catch (error) { console.log(error) }
    }

    return THIS

}

UI_PAGER