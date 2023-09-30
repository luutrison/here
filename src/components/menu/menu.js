const CTE2OTYWNTK5ODQ0MTG = {
    USE: HERE.IS
}


const MENU = () => {

    try {
        const THIS = {}

        THIS.SETTING = CTE2OTYWNTK5ODQ0MTG

        const IS = THIS.SETTING.USE

        THIS.GET = () => {

            const sampleData = [
                {
                    name: "Thống kê sơ bộ",
                    url: "dash.dashboard"
                },

                {
                    name: "Quản lý sản phẩm",
                    url: "dash.product"
                },
            ]


            const element = (props) => {

                const tag = document.createElement("div")
                tag.setAttribute("class","CZE2OTYWNJA1OTQYNZU")
                tag.innerHTML = (
                    `
                    <div class="item-menu-name"><svg class="bi bi-bar-chart-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"></path>
                    </svg>
                        <span>${props.name}</span>
                    </div>
                    `
                )

                tag.addEventListener("click", () => {
                    console.log("click");
                    IS.ROUTE.LOAD({ name: props.url })
                })

                return tag
            }

            var tags = []


            sampleData.forEach((value) => {
                tags.push(element(value))
            })

            return tags
        }
        return THIS
    } catch (error) {
        console.error(error);
    }
}

MENU
