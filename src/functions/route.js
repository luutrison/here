import { LOGIN_PAGES } from "../pages/login/login.js"
import { PAGES_ROUTE } from "../pages/route.js"
import { CHECK as _CHECK } from "./check.js"
import { PATH } from "./path.js"




class ROUTE {

    constructor() {

    }

    static CHECK() {
        var isLogin = false

        var ac = JSON.parse(localStorage.getItem("_AC_"))
        if (_CHECK.IS_OBJECT(ac)) {
            PAGES_ROUTE[ac.active].ACTION["GET"]()
        }
        else {

            var deval = {
                active: "login_pages",
                prev: "",
            }

            localStorage.setItem("_AC_", JSON.stringify(deval))

        }

        if (isLogin) {

            var ac = localStorage.getItem("_AC_")
            if (ac) {
                PAGES_ROUTE[ac.active].ACTION["GET"]()
            }
            else {

                var deval = {
                    active: "login_pages",
                    prev: "",
                }

                localStorage.setItem("_AC_", deval)

            }

        }
        else {


            // var url = PATH.GET(PAGES_ROUTE.login_pages.ACTION)

            // $.get(url,
            //     function (data, textStatus, jqXHR) {
            //         console.log(url);
            //     },
            // ).fail(err => {


            // });

            // PAGES_ROUTE.login_pages.ACTION["GET"]()
        }
    }
    static UPDATE() {

        try {
            var current = localStorage.getItem

            cookie
        } catch (error) {
            console.error(error);
        }
    }
}

export { ROUTE }