
(PROPS) => {

    return {
        REQUIRE: {
            PROPERTIES: {
                BOUNDER: "NORMAL",
            },
            COMPONENTS: [
                {
                    src: "../../components/ui/menu/menu.js",
                    name: "MENU"
                },
            ],
            CSS: [
                {
                    src: "./dash.css",
                }
            ],
        },
        RENDER: {
            FROM: (
                <section id="dash">
                    <div id="content">
                        <div id="menu">
                            
                            <div class="menu-background"><img src="/@{release}/designs/images/10112023.webp" /></div>
                            <div class="name"><span>Danh sách</span></div>
                            <div class="ZDE2OTYWNJA0MZK1MTU"></div>
                        </div>
                        <div id="contenter">
                            <div id="dash-container">
                               
                            </div>
                        </div>
                    </div>
                </section>
            ),
            TRANSITION: "SLIDE_VERTICAL"
        },
        METHOD: () => {
            const COMPONENTS = PROPS.REQUIRE.IS.COMPONENTS.INNIT
            const MENU = COMPONENTS.MENU()
            MENU.GET({elementName: ".ZDE2OTYWNJA0MZK1MTU"})
        },
    }
}

