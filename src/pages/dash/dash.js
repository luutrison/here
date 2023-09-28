
(PROPS) => {

    return {
        REQUIRE: {
            PROPERTIES: {
                BOUNDER: "NORMAL",
            },
            COMPONENTS: [

                {
                    src: "../../components/menu/menu.js",
                    name: "MENU_COMPONENT"
                },
                {
                    src: "../../libs/simplebar/simplebar.min.js",
                    name: "SIMPLE_BAR"
                }
            ],
            CSS: [
                {
                    src: "./dash.css",
                },
                {
                    src: "../../libs/simplebar/simplebar.min.css"
                }
            ],
        },
        RENDER: {
            FROM: (
                <section id="dash">
                    <div class="content">
                        <div id="menu">
                            <div class="menu-background"><img src="/designs/images/10112023.webp" /></div>
                            <div class="name"><span>Danh sách</span></div>
                            <div class="menu-items">
                                <div class="item-menu">
                                    <div class="item-menu-name"><svg class="bi bi-bar-chart-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"></path>
                                    </svg><span>Thống kê sơ bộ</span></div>
                                </div>
                            </div>
                        </div>
                        <div id="contenter">
                            <div class="content-navigate"><span>Thống kê sơ bộ</span></div>
                            <div class="contenter-two">
                                <div class="content-page">
                                    <div><canvas height="300" style="display: block; width: 600px; height: 300px;" width="600"></canvas></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ),
            TRANSITION: "SLIDE_VERTICAL"
        },
        METHOD: () => {

            document.title = "Bảng điều khiển"

            const COMPONENTS = PROPS.REQUIRE.IS.COMPONENTS.INNIT
            const SIMPLE_BAR = COMPONENTS.SIMPLE_BAR
            const contenter = new SIMPLE_BAR(document.querySelector("#contenter"))
            const menu = new SIMPLE_BAR(document.getElementById("menu"))

        },
    }
}

