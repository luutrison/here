const c760ac11059f011ee8c990242ac1200027f90da8059f011ee8c990242ac120002 = {
    NAME: {
        NAME_CSS: "here.modules.ui.ui.css"
    },
    PATH: {
        CSS: "./ui.css"
    },
    OPTIONS: HERE,
    ELEMENTS: {
        LINK: ({name}) => {
            return  HERE_OPTIONS.TAG.LINK_NAME + "[name=\\\"" + name + "\\\"]"
        }
    }
}

const HERE_MODULES_UI = () => {
    const THIS = {}
    THIS.OPTIONS = () => {
        return HERE_MODULES_UI_OPTIONS
    }

    SHIPPER = THIS.SHIPPER = () => {
        const html = (
            <div id="here-ui-loader">
                <div class=""></div>
                <span>Loading</span>
            </div>
        )

        return html

    }

    INNIT = THIS.INNIT = ({ props }) => {
        try {
            const iprops_place = ({props}) => {
                if(props){
                    return {
                        name: props.name,
                        in: props.in
                    }
                }
            }



            var iprops = {
                place : iprops_place({props: props.place})
            }

            if(iprops.place){
                const place = $(iprops.place.in)

                if(!place){
                
                }
                else{
                    const element = $(iprops.place.in).find(THIS.OPTIONS().ELEMENTS({name: THIS.OPTIONS().OPTIONS.NAME_CSS}))
                    if(!element){
                        var tag = document.createElement(THIS.OPTIONS().OPTIONS.TAG.LINK_NAME)
                    }
                }
                

                
            }

        } catch (error) { }
    }


}


HERE_MODULES_UI