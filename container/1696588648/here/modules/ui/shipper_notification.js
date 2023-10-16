const SHIPPER_MESSAGE = (props) => {
    const THIS = {}
    const IS = HERE_DTE2OTCXODIWOTY4MJY.IS

    const contructor = (props) => {
        return {
            container: props.container,

        }
    }

    const element = () => {
        try {
            const propse = contructor(props)

            const html = (
                `
                <div class="DZE2OTCYNDG5OTGWNZM">
                    <div class="DZE2OTCYNDG5OTGWNZM"></div>
                    <div class="ZZE2OTCYNDKWNTCYMZE">
                        <div class="BZE2OTCYNDKZNZK3NDM">
                            <span class="EJE2OTCYNDKZODQXNZQ">Thông báo</span>
                            <div class="AJE2OTCYNDKZODGYNDC"></div>
                        </div>
                    </div>
                </div>
                `

            )

            const content = IS.CONVERT.SPECIAL_CONTENT({ content: html })

            const exis = $(".DZE2OTCYNDG5OTGWNZM")

            if (IS.CHECK.IS_ARRAY_EMPTY({ ob: exis })) {
                $(propse.container).append(content)
            }

        } catch (error) { console.log(error) }



    }

    THIS.CREATE = (props) => {
        try {
            const contructor = () => {
                return {
                    notification: props.notification,
                    title: props.title
                }
            }

            element()

            const propse = contructor()

            const shipper_notification = $(".DZE2OTCYNDG5OTGWNZM")

            if (!IS.CHECK.IS_ARRAY_EMPTY({ ob: shipper_notification })) {
                const notification = $(shipper_notification).find(".AJE2OTCYNDKZODGYNDC")

                if (propse.title) {
                    $(shipper_notification).find(".EJE2OTCYNDKZODQXNZQ").html(propse.title)
                }

                const html = IS.CONVERT.SPECIAL_CONTENT({
                    content: (
                        `
                        <div class="DTE2OTCYNZI3MZA2NZA">
                            <img class="YJE2OTCYNZE3MZMYMZI" src="/@{release}/here/modules/ui/images/bde2otcynzizmjk5mdc.webp"></img>
                            ${propse.notification}
                        </div>
                        `
                    )
                })




                $(notification).html(String())
                $(notification).append(html)

            }
        } catch (error) { console.error(error) }
    }

    THIS.DONE = (props) => {
        try {
            const contructor = () => {
                return {
                    notification: props.notification,
                    title: props.title,
                    type: props.type,
                    buttonName: props.buttonName ? props.buttonName : "Đưọc"
                }
            }

            const propse = contructor()
            const shipper_notification = $(".DZE2OTCYNDG5OTGWNZM")

            $(shipper_notification).find(".ZZE2OTCYNDKWNTCYMZE").css("display", "none")

            const anim = () => {
                setTimeout(() => {
                    $(shipper_notification).find(".ZZE2OTCYNDKWNTCYMZE").css("display", "flex")
                }, 10)
            }

            if (propse.title) {
                $(shipper_notification).find(".EJE2OTCYNDKZODQXNZQ").html(propse.title)
            }
            if (!IS.CHECK.IS_ARRAY_EMPTY({ ob: shipper_notification })) {
                const propse = contructor()
                const notification = $(shipper_notification).find(".AJE2OTCYNDKZODGYNDC")

                var imgUrl = String()

                if (propse.type == "success") {
                    imgUrl = "/@{release}/here/modules/ui/images/tik_dde2otcyntmxmdmwmzm.png"
                }
                else if (propse.type == "error") {
                    imgUrl = "/@{release}/here/modules/ui/images/error_yze2otcyntuxnzaxmzq.webp"
                }


                const raw = IS.CONVERT.SPECIAL_CONTENT({
                    content: (
                        `
                        <div class="DTE2OTCYNZI3MZA2NZA">
                            <img class="YJE2OTCYNZE3MZMYMZI" src="${imgUrl}"></img>
                            <span class="YJE2OTCYNDKZOTIZOTA">
                                ${propse.notification}
                            </span>

                            <button class="DJE2OTC0NDCWOTE2NJK">${propse.buttonName}</button>
                        </div>
                    `
                    )
                })

                const html = $(raw)

                HERE_DTE2OTCXODIWOTY4MJY.IS.DOM.SET_EVENT_BY_NAME({
                    element: $(html).find(".DJE2OTC0NDCWOTE2NJK"),
                    name: "click",
                    callBack: () => {
                        $(shipper_notification).remove()
                    }
                })

                $(notification).html(String())
                $(notification).append(html)
                anim()

            }
        } catch (error) { console.error(error) }
    }


    THIS.CLOSE = () => {
        try {

        } catch (error) { console.error(error) }
    }

    return THIS



}

SHIPPER_MESSAGE