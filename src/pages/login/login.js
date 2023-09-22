
(PROPS) => {
    
    return {
        REQUIRE: {
            CSS: [
                {
                    src: "./login.css",
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
                <div id="login">
                    <img class="background-login" alt="" src="/designs/images/b-login.jpg" />
                    <div class="card-login">
                        <div class="title-card-login"><span>Đăng nhập</span></div>
                        <div class="input-login"><span>Tên tài khoản</span><input type="text" /></div>
                        <div class="input-login"><span>Mật khẩu</span><input type="text" /></div>
                        <div class="human-dt-login"></div>
                        <div class="fg-pw-login"><a href="#">Quên mât khẩu</a></div>
                        <div class="input-login"><button class="btn btn-login" type="button">Button</button></div>
                    </div>
                </div>
            ),
            TO: "CONTAINER",
            TRANSITION: "SLIDE_VERTICAL"
        },
        METHOD: () => {
            const components = PROPS.COMPONENTS.INNIT
            $("#login button").click(function (e) { 
                e.preventDefault();
                PROPS.ROUTE.LOAD({props: {name: "pages.dash"}})
            });
        },
    }
}

