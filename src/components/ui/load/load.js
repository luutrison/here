(PROPS) => {

    return {
        REQUIRE: {
            CSS: [
                {
                    src: "./load.css",
                }
            ],
        },
        RENDER: {
            FROM: (
                <div id="loader">

                    Loading

                </div>
            ),
            TO: "CONTAINER",
        },
        METHOD: () => {

            console.log(PROPS);
        },
    }
}