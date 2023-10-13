const SETTING = {
    USE: HERE_DTE2OTCXODIWOTY4MJY.IS,
    ATTRIBUTE: {
        MIN_LENGTH: "min-length",
        MAX_LENGTH: "max-length",
        REQUIRE: "require"
    }
}

const VALIDATE = () => {
    var THIS = {}
    THIS.SETTING = SETTING

    USE = THIS.USE = SETTING.USE

    CHECK = THIS.CHECK = ({ props }) => {
        var iprops = {
            name: props.name,
            submit: props.submit
        }

        try {
            if (USE.CHECK.IS_OBJECT({ ob: iprops.name })) {
                var element = $(iprops.name)
                var input = $(element).find("input")
                
            }
        } catch (err) { }

    }
}