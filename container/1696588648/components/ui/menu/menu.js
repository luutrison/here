
const MENU = () => {

    try {
        const THIS = {}
        const IS = HERE_DTE2OTCXODIWOTY4MJY.IS
        const NAME_ITEM_MENU = "ZDE2OTY5MJE5NDUWODC"

        THIS.GET = ({ elementName }) => {


            const sampleData = [
                {
                    name: "Thống kê sơ bộ",
                    url: "dash.dashboard",
                    default: true,
                    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"></path></svg>`
                },

                {
                    name: "Quản lý sản phẩm",
                    url: "dash.product",
                    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"></path></svg>',
                    items: [
                        {
                            name: "Xem sản phẩm",
                            url: "dash.product",
                            icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"></path></svg>',
                        },
                        {
                            name: "Kho hàng",
                            url: "dash.product.store",
                            icon: ""
                        }
                    ]
                },


            ]


            const element = (props) => {

                const tag = document.createElement("div")



                if (props.items) {

                    var items = Array()

                    props.items.forEach(element => {

                        var tagtem = document.createElement("div")
                        tagtem.innerHTML = (
                            `
                            <div class="S21696253072135 ${NAME_ITEM_MENU}" come="${element.url}">
                                <div class="S31696256349519">
                                    ${element.icon}
                                </div>
                                <span>${element.name}</span>
                            </div>
                            `
                        )

                        IS.DOM.SET_EVENT_BY_NAME({
                            element: $(tagtem).find(".S21696253072135"),
                            name: "click",
                            callBack: (current) => {
                                IS.ROUTE.LOAD({ name: element.url })
                                const elements = $(".S21696253072135")
                                $(elements).attr("active", false)
                                $(".CZE2OTYWNJA1OTQYNZU").attr("active", false)
                                $(current.currentTarget).attr("active", true)
                            }
                        })
                        items.push(tagtem.firstElementChild)
                    })


                    tag.innerHTML = (
                        `
                        <div class="YZE2OTYWNJIYMZI4MJA">
                            <div class="S11696252745831">
                                <div class="S01696256143143">
                                    <svg class="bi bi-bar-chart-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"></path>
                                    </svg>
                                    <span>${props.name}</span></div>

                                <svg class="icon icon-tabler icon-tabler-chevron-down S81696252818575" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                            <div class="S71696252911655"></div>
                        </div>
                        `
                    )

                    IS.DOM.SET_EVENT_BY_NAME({
                        element: $(tag).find(".S81696252818575"),
                        name: "click",
                        callBack: (current) => {
                            const menu = $(current.currentTarget).closest(".YZE2OTYWNJIYMZI4MJA").find(".S71696252911655")[IS.OPTIONS().NORMAL.NUMBER_ZERO]
                            if ($(menu).css("display") == "flex") {
                                $(menu).css("display", "none");
                                $(current.currentTarget).css("transform", "rotate(-90deg)")
                                $(current.currentTarget).parent().attr("active", "false")
                            }
                            else {
                                $(menu).css("display", "flex");
                                $(current.currentTarget).css("transform", "rotate(0deg)")
                                $(".S81696252818575").attr("active", "false")
                                $(current.currentTarget).parent().attr("active", "true")
                            }
                        }

                    })

                    items.forEach(item => {
                        $(tag).find(".S71696252911655").append(item)

                    })


                    return tag.firstElementChild
                }
                else {
                    tag.innerHTML = (
                        `
                            <div class="CZE2OTYWNJA1OTQYNZU ${NAME_ITEM_MENU}" come="${props.url}">
                                    <div class="S31696256349519">
                                    ${props.icon}
                                    </div>
                                    <span>${props.name}</span>
                            </div>

                        `
                    )

                    IS.DOM.SET_EVENT_BY_NAME({
                        element: $(tag).find(".CZE2OTYWNJA1OTQYNZU"),
                        name: "click",
                        callBack: (current) => {
                            IS.ROUTE.LOAD({ name: props.url })
                            const elements = $(".CZE2OTYWNJA1OTQYNZU")
                            $(elements).attr("active", false)
                            $(".S21696253072135").attr("active", false)
                            $(current.currentTarget).attr("active", true)
                        }
                    })

                    return tag.firstElementChild
                }




            }

            var tags = []


            sampleData.forEach((value) => {
                tags.push(element(value))
            })


            tags.forEach((element) => {
                $(elementName).append(element)
            })

            const ship = $(elementName).attr("ship")

            if (!ship) {
                var def = sampleData.find(i => i.default == true)
                IS.ROUTE.LOAD({ name: def.url })
                $(elementName).attr("ship", "true")
                $(`.${NAME_ITEM_MENU}[come='${def.url}']`).attr("active", true)
            }

        }

        THIS.CHECK = (props) => {
            try {

                if(props){
                    const propse = {
                        name: props.name,
                        params: props.params
                    }
    
                    const arritems = $("." + NAME_ITEM_MENU)
                    $(arritems).attr("active", false)

                    $(arritems).each((num, element) => {
                        const item = $(element).attr("come")
                        if(item == propse.name){
                            $(element).attr("active", true)
                        }
                    })
                }
                
            } catch (err) {
                console.log(err)
            }
        }

        return THIS
    } catch (error) {
        console.error(error);
    }
}

MENU
