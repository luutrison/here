if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker && navigator.serviceWorker.register("./statics/js/sw.js");
    });
}


const setting = {
    name: () => {
        const name = {
            number: "#number",
            uppercase_true: "#upcase-true",
            uppercase_false: "#upcase-false",
            text_true: "#text-true",
            text_false: "#text-false",
            copy_true: "#copy-true",
            copy_false: "#copy-false",
            name_box: "#name",
            button: "#button",
            stamp_require: "#require-stamp",
            stamp_split: "#stampit",
            check_able: "[checkable]",
            input: "input"
        }
        return name
    },
    varible: () => {
        const varible = {
            num_zero: 0,
            num_one: 1,
            num_two: 2,
            num_three: 3,
            checked: "checked",
            change: "change",
            string_empty: "",
            double_equal: "==",
            equal: "=",

        }
        return varible
    },
    this: () => {
        const content = {
            allow_list_text: "qwertyuiopasdfghjklzxcvbnm",
            allow_list_number: "0123456789",
        }
        return content
    }

}


var gacha = () => {

    const here = {}

    const checkable_one_or_two = () => {
        try {
            const varible = setting.varible()
            var checkable = $(setting.name().check_able)
            checkable.each((index, element) => {
                var input = $(element).find(setting.name().input)
                input.each((index, item) => {
                    $(item).on(varible.change, (event) => {
                        var pre = varible.num_zero
                        if (index == varible.num_zero) {
                            pre = varible.num_one
                        }
                        else {
                            pre = varible.num_zero
                        }
                        if (event.currentTarget.checked == true) {
                            input[pre].checked = false
                        }
                        else {
                            input[pre].checked = true
                        }
                    })

                })
            })
        } catch (error) {
            console.error(error)
        }
    }

    const method = {
        array_length_from_one: ({ arr }) => {
            try {
                if (arr) {
                    return arr.length - setting.varible().num_one
                }
            } catch (err) { console.error(err) }

        },
        array_length_from_zero: ({ arr }) => {
            try {
                if (arr) {
                    return arr.length
                }
            } catch (err) { console.error(err) }

        },
        to_string: ({ content }) => {
            try {
                if (content) {
                    return String(content).trim()
                }
            } catch (err) { console.error(err) }

        }

    }

    const born_name = () => {
        try {
            const varible = setting.varible()
            const set_this = setting.this()
            const name_set = setting.name()
            var current = varible.string_empty
            var max = $(name_set.number).val()

            const allowCharacter = $(name_set.text_true)[varible.num_zero].checked
            const allowUpper = $(name_set.uppercase_true)[varible.num_zero].checked
            const allowCopy = $(name_set.copy_true)[varible.num_zero].checked

            console.log(allowCharacter, $(name_set.text_true))

            var selectPeep = set_this.allow_list_text

            var require_name = method.to_string({ content: $(name_set.stamp_require).val() })
            var split = method.to_string({ content: $(name_set.stamp_split).val() })

            if(!split){
                split = String()
            }

            if (!allowCharacter) {
                selectPeep = set_this.allow_list_number
            }

            while (method.array_length_from_zero({ arr: current }) != max) {
                var random = Math.floor(Math.random() * method.array_length_from_zero({ arr: selectPeep }))
                current = current + selectPeep[random]
            }

            var nameis = varible.string_empty

            if (method.array_length_from_zero({ arr: current }) == max) {
                const time = Date.now()
                if (allowCharacter) {
                    if (require_name && require_name != varible.string_empty) {
                        nameis = require_name + split + btoa(current + String(time))

                    }
                    else {
                        nameis = btoa(current + String(time))

                    }
                }
                else {
                    if (require_name && require_name != varible.string_empty) {
                        nameis = require_name + split + current + String(time)

                    }
                    else {
                        nameis = current + String(time)

                    }
                }
            }

            if (allowUpper) {
                nameis = String(nameis).toUpperCase()
            }
            else{
                nameis = String(nameis).toLowerCase()
            }

            nameis = nameis.replaceAll(varible.double_equal, varible.string_empty)
            nameis = nameis.replaceAll(varible.equal, varible.string_empty)

            if (allowCopy) {
                navigator.clipboard.writeText(nameis)
            }

            return nameis

        } catch (error) {
            console.error(error);
        }
    }

    const event = () => {

        $(setting.name().button).click((event) => {
            var name = born_name()
            $(setting.name().name_box).html(name)
        })
    }


    const init = here.init = ({ props }) => {
        checkable_one_or_two()
        event()
        props.here = here
    }


    return here
}

gacha().init({ props: gacha })