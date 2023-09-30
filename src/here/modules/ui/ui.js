const DTE2OTU3OTKXODC4NTG = () => {
    const SETTING = {
        OPTIONS: HERE,
        TAG: {
            LOADER: "shipper"
        }
    }

    return SETTING

}

const HERE_MODULES_UI = () => {
    const THIS = {}
    THIS.OPTIONS = DTE2OTU3OTKXODC4NTG

    THIS.SHIPPER = () => {
       
        const html = (
            `
            <div id="yje2otu0nty2mzaznju">
                <div id="cte2otu0nty2ndu1njy"><span id="ete2otu0nty4nze1otc">Rừm rừm...</span>
                <img src="/here/modules/ui/images/21695457730118.gif"/>
                <span id="zze2otu0ntc4otizmja">...</span>
                </div>
            </div>
            `
        )

        return html

    }

    THIS.INNIT = ({ props }) => {
        try {
            const iprops_place = ({ props }) => {
                if (props) {
                    return {
                        name: props.name,
                        in: props.in
                    }
                }
            }



            var iprops = {
                place: iprops_place({ props: props.place })
            }

            if (iprops.place) {
                const place = $(iprops.place.in)

                if (!place) {

                }
                else {
                    const element = $(iprops.place.in).find(THIS.OPTIONS().ELEMENTS({ name: THIS.OPTIONS().OPTIONS.NAME_CSS }))
                    if (!element) {
                        var tag = document.createElement(THIS.OPTIONS().OPTIONS.TAG.LINK_NAME)
                    }
                }



            }

        } catch (error) { 
            console.error(error);
        }
    }

    THIS.UPDATE = () => {
        try {
            const loader = $(THIS.OPTIONS().TAG.LOADER)
            if(loader){
                $(loader).each((index, element) => {
                    $(element).html(THIS.SHIPPER())
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    return THIS
}


HERE_MODULES_UI