

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
                <div id="pages-login">
                    <img class="background-login" alt="" src="/designs/images/b-login.jpg" />
                    <form class="card-login">
                        <div class="title-card-login"><span>Đăng nhập</span></div>
                        <div class="input-login">
                            <span>Tên tài khoản</span>
                            <input type="text" minlength="5" name="account" required /></div>
                        <div class="input-login">
                            <span>Mật khẩu</span>
                            <input type="password" minlength="6" name="password" required /></div>
                        <div class="human-dt-login"></div>
                        <div class="fg-pw-login"><a href="#">Quên mât khẩu</a></div>
                        <div class="input-login"><button class="btn btn-login" type="submit">Button</button></div>
                    </form>
                </div>
            ),
            TRANSITION: "SLIDE_VERTICAL"
        },
        METHOD: () => {
            $("#pages-login form").submit(function (event) {
                event.preventDefault()
                PROPS.ROUTE.LOAD({name: "dash"})
            });
          
        },
    }
}

