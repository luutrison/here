const CTE2OTYWNTK5ODQ0MTG = {
    USE: HERE.IS
}


const MENU = () => {

    try {
        const THIS = {}

        THIS.SETTING = CTE2OTYWNTK5ODQ0MTG

        const IS = THIS.SETTING.USE

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
                    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"></path></svg>'
                },
            ]


            const element = (props) => {

                const tag = document.createElement("div")
                tag.setAttribute("class", "CZE2OTYWNJA1OTQYNZU")
                tag.setAttribute("to", props.url)
                tag.innerHTML = (
                    `
                    <div class="YZE2OTYWNJIYMZI4MJA">
                    ${props.icon}
                        <span>${props.name}</span>
                    </div>
                    `
                )

                IS.DOM.SET_EVENT_BY_NAME({
                    element: tag,
                    name: "click",
                    callBack: (current) => {
                        IS.ROUTE.LOAD({ name: props.url })
                        const elements = $(".CZE2OTYWNJA1OTQYNZU")
                        $(elements).attr("active", false)
                        $(current.currentTarget).attr("active", true)
                    }
                })

                return tag
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
                $(`.CZE2OTYWNJA1OTQYNZU[to='${def.url}']`).attr("active", true)
            }

        }
        return THIS
    } catch (error) {
        console.error(error);
    }
}

MENU
