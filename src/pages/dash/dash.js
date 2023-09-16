
(PROPS) => {

    return {
        REQUIRE: {
            CSS: [
                {
                    src: "./dash.css",
                }
            ],
            COMPONENTS: [

                {
                    src: "../../components/menu/menu.js",
                    name: "MENU_COMPONENT"
                }
            ]
        },
        RENDER: {
            FROM: (
                <div id="dash">
                   dash page
                </div>
            ),
            TO: "CONTAINER",
            TRANSITION: "SLIDE_VERTICAL"
        },
        METHOD: () => {
            const menu = PROPS.COMPONENTS.MENU
            console.log(PROPS);
        },
    }
}

