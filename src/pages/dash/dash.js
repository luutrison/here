
(PROPS) => {

    return {
        REQUIRE: {
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
                    <header>
                        <div class="comos"><a id="name" href="#">Bảng điều khiển</a></div>
                        <div class="comos">
                            <div class="account-activitie">
                                <div class="account-content"><svg class="bi bi-bell-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"></path>
                                </svg></div>
                                <div class="account-content"><svg class="bi bi-mailbox2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z"></path>
                                    <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"></path>
                                </svg></div>
                                <div class="account-content">
                                    <div class="icon-avatar"><img class="img-content" src="./designs/images/4140037.png" /></div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section>
                        <div class="content">
                            <div id="menu">
                                <div class="menu-background"><img src="./designs/images/10112023.webp" /></div>
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
                                <div class="contenter-two">
                                    <div class="content-navigate"><span>Thống kê sơ bộ</span></div>
                                    <div class="content-page">
                                        <div><canvas height="310" style="display: block; width: 620px; height: 310px;" width="620"></canvas></div>
                                        <div><canvas height="310" style="display: block; width: 620px; height: 310px;" width="620"></canvas></div>
                                        <div><canvas height="310" style="display: block; width: 620px; height: 310px;" width="620"></canvas></div>
                                        <div><canvas height="310" style="display: block; width: 620px; height: 310px;" width="620"></canvas></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>
            ),
            TO: "CONTAINER",
            TRANSITION: "SLIDE_VERTICAL"
        },
        METHOD: () => {

            document.title = "Bảng điều khiển"
            const COMPONENTS = PROPS.COMPONENTS.INNIT

            const SIMPLE_BAR = COMPONENTS.SIMPLE_BAR

            const menu = new SIMPLE_BAR(document.getElementById("menu")).default
            const contenter = new SIMPLE_BAR(document.querySelector("#contenter")).default

            console.log(COMPONENTS);
        },
    }
}

