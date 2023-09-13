
(PROPS) => {
    console.log(PROPS);
    return {
        REQUIRE: {
            CSS: [
                {
                    src: "./login.css",
                }
            ],
        },
        RENDER: {
            FROM: (
                <div id="login"><img class="background-login" src="/designs/images/b-login.jpg" />
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
            TO: "PROPS.SETTING.THIS.CONTAINER",
            TRANSITION: "PROPS.EFFECT.TRANSITION.SLIDE_VERTICAL"
        },
        METHOD: () => {

            console.log("method");
        },
    }
}

